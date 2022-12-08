import { rest } from "msw";
import { RoadDTO } from "@src/api";

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
                        id: 1,
                        latitude: 51.941,
                        longitude: 19.0945,
                    },
                    end: {
                        id: 2,
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
                        id: 3,
                        latitude: 52.941,
                        longitude: 11.0945,
                    },
                    end: {
                        id: 4,
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
        "http://127.0.0.1:5173/src/api/apis/PaymentTollApi",
        (req, res, ctx) => {
            return res(ctx.json({}));
        }
    ),

    rest.get(
        "https://someserver.swagger.io/api/v3/roadNetwork",
        (req, res, ctx) => {
            return res(ctx.json(roadsNetwork));
        }
    ),

    rest.post(
        "https://someserver.swagger.io/api/v3/roadNetwork",
        (req, res, ctx) => {
            const newRoadDTO: RoadDTO = req.body as RoadDTO;
            if (newRoadDTO.id) {
                roadsNetwork.RoadDTOS = roadsNetwork.RoadDTOS.map(
                    (road: RoadDTO) =>
                        road.id === newRoadDTO.id ? newRoadDTO : road
                );
            } else {
                roadsNetwork.RoadDTOS.push(req.body);
            }

            return res(ctx.json({}));
        }
    ),

    rest.post("https://someserver.swagger.io/api/v3/drive", (req, res, ctx) => {
        return res(ctx.json({}));
    }),
];
