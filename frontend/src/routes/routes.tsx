import { Navigate, Outlet } from "react-router-dom";
import { Drive } from "../features/Drive/routes/Drive";
import { Home } from "../features/Home/routes/Home";
import { RoadNetwork } from "../features/RoadNetwork/routes/RoadNetwork";
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
    )
};

export const routes = [
    {
        path: "/app",
        element: <App />,
        children: [
            {
                path: "road-network",
                element: <>
                    <NavHeader />
                    <RoadNetwork />
                </>
            },
            {
                path: "drive",
                element: <>
                    <NavHeader />
                    <Drive />
                </>
            },
            {
                path: "home",
                element: <>
                    <Home />
                </>
            },
            {
                path: "*",
                element: <Navigate to="." />
            },
        ],
    },
    { path: "*", element: <Navigate to="/app/home" /> },
];
