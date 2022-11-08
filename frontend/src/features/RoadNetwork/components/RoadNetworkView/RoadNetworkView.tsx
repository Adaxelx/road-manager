import * as React from "react";
import "leaflet/dist/leaflet.css";
import "./RoadNetworkView.scss";

import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { RoadDto } from "../../../../api/model/roadDto";
import { RoadSegmentDto } from "../../../../api/model/roadSegmentDto";
import { JunctionDto } from "../../../../api/model/junctionDto";
import { MapMarker } from "../MapMarker/MapMarker";
import Button from "@mui/material/Button";
import { RoadJunctionsTable } from "./RoadJunctionsTable";

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
    const [addRoadFlag, setAddRoadFlag] = React.useState(false);
    const [roads2, setRoads2] = React.useState(roads);

    const road = {
        name: "Autostrada 2",
        segments: [
            {
                startNode: {
                    name: "junction 1234",
                    latitude: 52.941,
                    longitude: 19.3945,
                },
                endNode: {
                    name: "junction 1235",
                    latitude: 52.931,
                    longitude: 19.4945,
                },
            },
        ],
    };

    function handleAddRoadClick() {
        if(addRoadFlag){
            setAddRoadFlag(false)
            roads2.pop()
        } else {
            setAddRoadFlag(true)
            roads2.push(road)
        }
    }

    return (
        <>
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
            {addRoadFlag ? <RoadJunctionsTable road={road}/> : null}
            <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={handleAddRoadClick}
            >
                {addRoadFlag ? "Zapisz drogę" : "Dodaj drogę"}
            </Button>
        </>
    );
};
