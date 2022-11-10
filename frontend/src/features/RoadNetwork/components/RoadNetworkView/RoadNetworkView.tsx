import * as React from "react";
import "leaflet/dist/leaflet.css";
import "./RoadNetworkView.scss";

import { MapContainer, TileLayer } from "react-leaflet";
import { LatLng, LatLngExpression } from "leaflet";
import { RoadDto } from "../../../../api/model/roadDto";
import { JunctionDto } from "../../../../api/model/junctionDto";
import { MapMarker } from "../MapMarker/MapMarker";
import Button from "@mui/material/Button";
import { RoadJunctionsTable } from "./RoadJunctionsTable";
import { RoadList } from "./RoadList";

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
    const [road, setRoad] = React.useState<RoadDto | undefined>();
    const [junctions, setJunctions] = React.useState<JunctionDto[]>([]);
    const handleAddRoadClick = () => {
        setRoad({});
        setJunctions([
            {
                latitude: 51.941,
                longitude: 19.0945,
            },
            {
                latitude: 52.941,
                longitude: 16.0945,
            },
        ]);
    };

    const handleSaveRoadClick = () => {};

    const handleEditRoad = (id: number) => {
        const road: RoadDto | undefined = roads.find(
            (road: RoadDto) => road.id === id
        );
        setRoad(road);

        const newJunctions: JunctionDto[] =
            road?.segments?.map((element) => element.startNode) || [];
        const j: JunctionDto | undefined = road?.segments?.at(-1)?.endNode;
        if (j) {
            newJunctions?.push(j);
        }
        setJunctions(newJunctions || []);
    };

    const handleAddJunction = () => {
        setJunctions([
            ...junctions,
            {
                latitude: 51.941,
                longitude: 19.0945,
            },
        ]);
    };

    const handleChangeJunctionPosition = (
        junctionIdx: number,
        latLng: LatLng
    ) => {
        setJunctions((junctions: JunctionDto[]) =>
            junctions.map((junction, idx) => {
                if (junctionIdx === idx) {
                    junction.latitude = latLng.lat;
                    junction.longitude = latLng.lng;
                }
                return junction;
            })
        );
    };

    const handleDeleteJunction = (junctionIdx: number) => {
        setJunctions(junctions.filter((junction, idx) => junctionIdx !== idx));
    };

    return (
        <>
            <MapContainer center={mapConfig.mapCenter} zoom={mapConfig.zoom}>
                <TileLayer
                    attribution={mapConfig.attribution}
                    url={mapConfig.url}
                />
                {junctions.map((junction: JunctionDto, idx: number) => (
                    <MapMarker
                        key={idx}
                        junctionIdx={idx}
                        road={road}
                        junction={junction}
                        handleChangeJunctionPosition={
                            handleChangeJunctionPosition
                        }
                    ></MapMarker>
                ))}
            </MapContainer>
            <RoadJunctionsTable
                junctions={junctions}
                road={road}
                handleDeleteJunction={handleDeleteJunction}
            />
            <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={handleAddRoadClick}
            >
                Dodaj drogę
            </Button>
            <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={handleSaveRoadClick}
            >
                Zapisz drogę
            </Button>
            <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={handleAddJunction}
            >
                Dodaj skrzyżowanie
            </Button>
            <RoadList roads={roads} handleEditRoad={handleEditRoad} />
        </>
    );
};
