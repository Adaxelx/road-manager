import * as React from "react";
import { useEffect } from "react";

import {
    JunctionDTO,
    RoadDTO,
    RoadNetworkApi,
    RoadNetworkDTO,
    RoadSegmentDTO,
} from "@src/api";
import { RoadNetworkView } from "@features/RoadNetwork/components/RoadNetworkView/RoadNetworkView";

export const RoadNetworkPresenter = () => {
    const roadNetworkApi: RoadNetworkApi = new RoadNetworkApi();
    const [roadNetwork, setRoadNetwork] = React.useState<RoadNetworkDTO>({
        roadDTOS: [],
    });

    useEffect(() => {
        loadRoadNetwork();
    }, []);

    const loadRoadNetwork = async () =>
        roadNetworkApi
            .getRoadNetwork()
            .then((network: RoadNetworkDTO) => setRoadNetwork(network));

    const saveRoad = async (
        road: RoadDTO,
        junctions: JunctionDTO[]
    ): Promise<void> => {
        const requestRoad: RoadDTO = {
            ...road,
            segments: createSegments(junctions),
        };
        return roadNetworkApi
            .addOrEditRoad(requestRoad)
            .then(() => loadRoadNetwork());
    };

    const createSegments = (junctions: JunctionDTO[]): RoadSegmentDTO[] => {
        if (junctions.length < 2) {
            return [];
        }

        const segments: RoadSegmentDTO[] = [];
        junctions.forEach((value, idx, array) => {
            if (idx < array.length - 1) {
                segments.push({
                    start: value,
                    end: array[idx + 1],
                });
            }
        });
        return segments;
    };

    return (
        <RoadNetworkView
            roads={roadNetwork.roadDTOS || []}
            saveRoad={saveRoad}
        />
    );
};
