import { setupWorker, SetupWorkerApi } from "msw";

import { handlers } from "@src/mocks/handlers";

export const worker: SetupWorkerApi = setupWorker(...handlers);
