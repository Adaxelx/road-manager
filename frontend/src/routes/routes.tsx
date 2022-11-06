import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "../shared/Layout/Layout";
import { RoadNetwork } from "../features/RoadNetwork/routes/RoadNetwork";
import { Drive } from "../features/Drive/routes/Drive";

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
            { path: "*", element: <Navigate to="." /> },
        ],
    },
    { path: "*", element: <Navigate to="app/road-network" /> },
];
