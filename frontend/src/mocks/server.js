import { handlers } from "./handlers.js";
import { setupServer } from "msw/node";

// Setup requests interception using the given handlers.
export const server = setupServer(...handlers);
