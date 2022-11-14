import { routes } from "@src/routes/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


export const AppProvider = () => {
    const router = createBrowserRouter(routes)

    return <RouterProvider router={router} />;
};
