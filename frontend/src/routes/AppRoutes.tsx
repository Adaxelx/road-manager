import { useRoutes } from "react-router-dom";

import { routes } from "@src/routes/routes";

export const AppRoutes = () => {
    const element = useRoutes([...routes]);

    return <>{element}</>;
};
