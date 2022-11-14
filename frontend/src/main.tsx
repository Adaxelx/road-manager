import "./index.scss";
import ReactDOM from "react-dom/client";
import React from "react";

import App from "@src/App";
import { worker } from "@src/mocks/browser";

if (process.env.NODE_ENV?.trim() === "mock") {
    worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
