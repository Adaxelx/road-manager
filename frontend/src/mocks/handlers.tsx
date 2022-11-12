import { rest } from "msw";

import { RoadNetworkDTO } from "@src/api";

const roadsNetwork: any = {
    RoadDTOS: [
        {
            id: 1,
            code: "A2",
            name: "Autostrada 1",
            type: "HIGHWAY",
            segments: [
                {
                    start: {
                        latitude: 51.941,
                        longitude: 19.0945,
                    },
                    end: {
                        latitude: 51.931,
                        longitude: 19.1945,
                    },
                },
            ],
        },
        {
            id: 2,
            code: "A4",
            name: "Droga 2",
            type: "NATIONAL_ROAD",
            segments: [
                {
                    start: {
                        latitude: 52.941,
                        longitude: 11.0945,
                    },
                    end: {
                        latitude: 51.931,
                        longitude: 11.1945,
                    },
                },
            ],
        },
    ],
};

export const handlers = [
    rest.get(
        "https://someserver.swagger.io/api/v3/roadNetwork",
        (req, res, ctx) => {
            return res(ctx.json(roadsNetwork));
        }
    ),

    rest.post(
        "https://someserver.swagger.io/api/v3/roadNetwork",
        (req, res, ctx) => {
            return res(ctx.json({}));
        }
    ),

    rest.post("https://someserver.swagger.io/api/v3/drive", (req, res, ctx) => {
        return res(ctx.json({}));
    }),
];
