import { Navigate, Outlet } from "react-router-dom";

import { OrangeThemeProvider } from "@src/providers/OrangeThemeProvider";
import { NavHeader } from "@src/shared/Layout/components/NavHeader/NavHeader";
import { Layout } from "@src/shared/Layout/Layout";
import { DrivePresenter } from "@features/Drive/routes/DrivePresenter";
import { Home } from "@features/Home/routes/Home";
import { RoadNetworkPresenter } from "@features/RoadNetwork/routes/RoadNetworkPresenter";
import { PaymentsPresenter } from "@features/Payments/routes/PaymentsPresenter";

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
                path: "payments",
                element: (
                    <>
                        <NavHeader />
                        <PaymentsPresenter />
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
