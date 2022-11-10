import { rest } from "msw";
import { RoadNetworkDto } from "../api/model/roadNetworkDto";

const roadsNetwork: RoadNetworkDto = {
    roadDtos: [
        {
            name: "Autostrada 1",
            segments: [
                {
                    startNode: {
                        latitude: 51.941,
                        longitude: 19.0945,
                    },
                    endNode: {
                        latitude: 51.931,
                        longitude: 19.1945,
                    },
                },
            ],
        },
    ],
};

export const handlers = [
    rest.get("/roadNetwork", (req, res, ctx) => {
        return res(ctx.json(roadsNetwork));
    }),

    rest.post("/roadNetwork", (req, res, ctx) => {
        return res(ctx.json({}));
    }),

    rest.post("/drive", (req, res, ctx) => {
        return res(ctx.json({}));
    }),
];
