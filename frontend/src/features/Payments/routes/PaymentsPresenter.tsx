import * as React from "react";
import { useEffect } from "react";

import { RoadNetworkApi, RoadNetworkDTO } from "@src/api";

export const PaymentsPresenter = () => {
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

    return <h1>Opłaty</h1>;
};
