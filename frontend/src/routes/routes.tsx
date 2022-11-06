import { Navigate, Outlet } from "react-router-dom";
import { Drive } from "../features/Drive/routes/Drive";
import { Home } from "../features/Home/routes/Home";
import { RoadNetwork } from "../features/RoadNetwork/routes/RoadNetwork";
import { Layout } from "../shared/Layout/Layout";

const App = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};

export const routes = [
    {
        path: "/app",
        element: <App />,
        children: [
            { path: "road-network", element: <RoadNetwork /> },
            { path: "drive", element: <Drive /> },
            { path: "home", element: <Home /> },
            { path: "*", element: <Navigate to="." /> },
        ],
    },
    { path: "*", element: <Navigate to="app/home" /> },
];
