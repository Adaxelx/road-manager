import "./App.scss";
import React from "react";

import { AppProvider } from "@src/providers/AppProvider";
import { AppRoutes } from "@src/routes/AppRoutes";

function App() {
    return (
        <AppProvider>
            <AppRoutes />
        </AppProvider>
    );
}

export default App;
