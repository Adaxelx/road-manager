import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "../shared/Layout/Layout";
import { Drive } from "../features/Drive/routes/Drive";
import { RoadNetworkPresenter } from "../features/RoadNetwork/routes/RoadNetworkPresenter";
import { NavHeader } from "../shared/Layout/components/NavHeader/NavHeader";
import { Home } from "../features/Home/routes/Home";
import { OrangeThemeProvider } from "../providers/OrangeThemeProvider";

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
                        <Drive />
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
