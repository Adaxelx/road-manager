import { Navigate, Outlet } from "react-router-dom";
import { DrivePresenter } from "../features/Drive/routes/DrivePresenter";
import { Home } from "../features/Home/routes/Home";
import { RoadNetworkPresenter } from "../features/RoadNetwork/routes/RoadNetworkPresenter";
import { OrangeThemeProvider } from "../providers/OrangeThemeProvider";
import { NavHeader } from "../shared/Layout/components/NavHeader/NavHeader";
import { Layout } from "../shared/Layout/Layout";

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
