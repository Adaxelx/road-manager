import * as React from "react";

import { RoadDto } from "../../../api/model/roadDto";
import { RoadNetworkView } from "../components/RoadNetworkView/RoadNetworkView";

export const RoadNetworkPresenter = () => {
    const roads: RoadDto[] = [
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
    ];

    return <RoadNetworkView roads={roads} />;
};