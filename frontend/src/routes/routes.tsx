import { Navigate, Outlet } from "react-router-dom";

import { PaymentTollPresenter } from "@src/features/PaymentToll/routes/PaymentTollPresenter";
import { OrangeThemeProvider } from "@src/providers/OrangeThemeProvider";
import { NavHeader } from "@src/shared/Layout/components/NavHeader/NavHeader";
import { Layout } from "@src/shared/Layout/Layout";
import { DrivePresenter } from "@features/Drive/routes/DrivePresenter";
import { Home } from "@features/Home/routes/Home";
import { PaymentsPresenter } from "@features/Payments/routes/PaymentsPresenter";
import { RoadNetworkPresenter } from "@features/RoadNetwork/routes/RoadNetworkPresenter";
import { SubscriptionWrapper } from "@features/Subscriptions/routes/SubscriptionWrapper";

const App = () => {
    return (
        <OrangeThemeProvider>
            <Layout>
                <Outlet />
            </Layout>
        </OrangeThemeProvider>
    );
};

export const routes = [
    {
        path: "/app",
        element: <App />,
        children: [
            {
                path: "subscriptions",
                element: (
                    <>
                        <NavHeader />
                        <SubscriptionWrapper />
                    </>
                ),
            },
            {
                path: "payments",
                element: (
                    <>
                        <NavHeader />
                        <PaymentsPresenter />
                    </>
                ),
            },
            {
                path: "payment-toll",
                element: (
                    <>
                        <NavHeader />
                        <PaymentTollPresenter />
                    </>
                ),
            },
            {
                path: "road-network",
                element: (
                    <>
                        <NavHeader />
                        <RoadNetworkPresenter />
                    </>
                ),
            },
            {
                path: "drive",
                element: (
                    <>
                        <NavHeader />
                        <DrivePresenter />
                    </>
                ),
            },
            {
                path: "home",
                element: (
                    <>
                        <Home />
                    </>
                ),
            },
            {
                path: "*",
                element: <Navigate to="." />,
            },
        ],
    },
    { path: "*", element: <Navigate to="/app/home" /> },
];
