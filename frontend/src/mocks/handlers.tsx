import { rest } from "msw";
import { PaymentDTO, RoadDTO } from "@src/api";

const roadsNetwork: any = {
    roadDTOS: [
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

const payments: PaymentDTO[] = [
    {
        paid: true,
        passage: {
            date: new Date(),
            // registrationNumber: "S01XXPXX",
        },
        price: 100.99,
    },
    {
        paid: false,
        passage: {
            date: new Date(),
            // registrationNumber: "S01XXPXX",
        },
        price: 200.99,
    },
    {
        paid: false,
        passage: {
            date: new Date(),
            // registrationNumber: "S01XXPXX",
        },
        price: 300.99,
    },
    {
        paid: false,
        passage: {
            date: new Date(),
            // registrationNumber: "S01XXPXX",
        },
        price: 400.99,
    },
];

export const handlers = [
    rest.get("http://localhost:8080/payment", (req, res, ctx) => {
        return res(ctx.json(payments));
    }),

    rest.get("http://localhost:8080/roadNetwork", (req, res, ctx) => {
        return res(ctx.json(roadsNetwork));
    }),

    rest.post("http://localhost:8080/roadNetwork", (req, res, ctx) => {
        const newRoadDTO: RoadDTO = req.body as RoadDTO;
        if (newRoadDTO.id) {
            roadsNetwork.roadDTOS = roadsNetwork.roadDTOS.map((road: RoadDTO) =>
                road.id === newRoadDTO.id ? newRoadDTO : road
            );
        } else {
            roadsNetwork.roadDTOS.push(req.body);
        }

        return res(ctx.json({}));
    }),

    rest.post("https://someserver.swagger.io/api/v3/drive", (req, res, ctx) => {
        return res(ctx.json({}));
    }),
];
