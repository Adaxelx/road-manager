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
    rest.get("/road-network", (req, res, ctx) => {
        return res(ctx.json(roadsNetwork));
    }),

    rest.post("/road-network/:id", (req, res, ctx) => {
        return res(ctx.json({}));
    }),
];
