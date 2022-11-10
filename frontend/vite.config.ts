import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: "@src", replacement: "/src" },
            { find: "@api", replacement: "/src/api" },
            { find: "@features", replacement: "/src/features" },
        ],
    },
});
