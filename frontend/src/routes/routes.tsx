import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "../shared/Layout/Layout";
import { Drive } from "../features/Drive/routes/Drive";
import { RoadNetworkPresenter } from "../features/RoadNetwork/routes/RoadNetworkPresenter";

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
            { path: "road-network", element: <RoadNetworkPresenter /> },
            { path: "drive", element: <Drive /> },
            { path: "*", element: <Navigate to="." /> },
        ],
    },
    { path: "*", element: <Navigate to="app/road-network" /> },
];
