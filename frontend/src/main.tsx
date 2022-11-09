import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { worker } from "./mocks/browser.js";

if (process.env.NODE_ENV?.trim() == "mock") {
    console.log("start");
    worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
