import * as React from "react";
import "leaflet/dist/leaflet.css";
import "./RoadNetworkView.scss";

import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { RoadDto } from "../../../../api/model/roadDto";
import { RoadSegmentDto } from "../../../../api/model/roadSegmentDto";
import { JunctionDto } from "../../../../api/model/junctionDto";
import { MapMarker } from "../MapMarker/MapMarker";

interface MapConfig {
    mapCenter: LatLngExpression;
    url: string;
    attribution: string;
    zoom: number;
}
const mapConfig: MapConfig = {
    mapCenter: [51.941, 19.0945],
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    zoom: 6,
};

type RoadNetworkViewProps = {
    roads: RoadDto[];
};
export const RoadNetworkView = ({ roads }: RoadNetworkViewProps) => {
    return (
        <MapContainer center={mapConfig.mapCenter} zoom={mapConfig.zoom}>
            <TileLayer
                attribution={mapConfig.attribution}
                url={mapConfig.url}
            />
            {roads.map((road: RoadDto) =>
                road.segments?.map((segment: RoadSegmentDto) =>
                    [segment.startNode, segment.endNode].map(
                        (junction: JunctionDto, idx: number) => (
                            <MapMarker
                                key={idx}
                                road={road}
                                junction={junction}
                            ></MapMarker>
                        )
                    )
                )
            )}
        </MapContainer>
    );
};
