import "./RoadNetworkView.scss";
import "leaflet/dist/leaflet.css";
import Button from "@mui/material/Button";
import { LatLng, LatLngExpression } from "leaflet";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { JunctionDTO, RoadDTO, RoadSegmentDTO } from "@src/api";
import { MapMarker } from "@features/RoadNetwork/components/MapMarker/MapMarker";
import { RoadJunctionsTable } from "@features/RoadNetwork/components/RoadNetworkView/RoadJunctionsTable";
import { RoadList } from "@features/RoadNetwork/components/RoadNetworkView/RoadList";

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

interface RoadNetworkViewProps {
    roads: RoadDTO[];
}

export const RoadNetworkView = ({ roads }: RoadNetworkViewProps) => {
    const [road, setRoad] = React.useState<RoadDTO | undefined>();
    const [junctions, setJunctions] = React.useState<JunctionDTO[]>([]);
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

    const handleSaveRoadClick = () => {
        console.log("saved");
    };

    const handleEditRoad = (id: number) => {
        const road: RoadDTO | undefined = roads.find(
            (road: RoadDTO) => road.id === id
        );
        setRoad(road);

        const newJunctions: JunctionDTO[] =
            road?.segments?.map(
                (element: RoadSegmentDTO) => element.start as JunctionDTO
            ) || [];
        const j: JunctionDTO | undefined = road?.segments?.at(-1)?.end;
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
        setJunctions((junctions: JunctionDTO[]) =>
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
                {junctions.map((junction: JunctionDTO, idx: number) => (
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
