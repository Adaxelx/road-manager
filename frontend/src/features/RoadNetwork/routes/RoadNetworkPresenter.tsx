import * as React from "react";

import { RoadNetworkView } from "../components/RoadNetworkView/RoadNetworkView";
import { RoadDTO } from "../../../api";

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
