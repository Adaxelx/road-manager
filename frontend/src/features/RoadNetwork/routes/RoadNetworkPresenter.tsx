import * as React from "react";

import { RoadDTO } from "@src/api";
import { RoadNetworkView } from "@features/RoadNetwork/components/RoadNetworkView/RoadNetworkView";

export const RoadNetworkPresenter = () => {
    const roads: RoadDTO[] = [
        {
            id: 1,
            name: "Autostrada 1",
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
            name: "Autostrada2",
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
    ];

    return <RoadNetworkView roads={roads} />;
};
