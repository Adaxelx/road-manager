import "leaflet/dist/leaflet.css";
import { Snackbar } from "@mui/material";
import { LatLng } from "leaflet";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { JunctionDTO, RoadDTO, RoadSegmentDTO } from "@src/api";
import { MapMarker } from "@features/RoadNetwork/components/MapMarker/MapMarker";
import { RoadForm } from "@features/RoadNetwork/components/RoadNetworkView/RoadForm";
import { RoadJunctionsTable } from "@features/RoadNetwork/components/RoadNetworkView/RoadJunctionsTable";
import { RoadList } from "@features/RoadNetwork/components/RoadNetworkView/RoadList";

interface MapConfig {
    mapCenter: [number, number];
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

export enum EditMode {
    NONE,
    EDIT,
    ADD,
}

interface RoadNetworkViewProps {
    roads: RoadDTO[];
    saveRoad: (road: RoadDTO, junctions: JunctionDTO[]) => Promise<void>;
}
export const RoadNetworkView = ({ roads, saveRoad }: RoadNetworkViewProps) => {
    const [road, setRoad] = React.useState<RoadDTO | undefined>();
    const [junctions, setJunctions] = React.useState<JunctionDTO[]>([]);

    const [editMode, setEditMode] = React.useState<EditMode>(EditMode.NONE);
    const [alert, setAlert] = React.useState();
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleAddRoadClick = () => {
        setRoad({});
        setEditMode(EditMode.ADD);
        setJunctions([]);
    };

    const handleSaveRoadClick = (saveRoadDTO: RoadDTO) => {
        saveRoad({ ...road, ...saveRoadDTO }, junctions).then(() => {
            setEditMode(EditMode.NONE);
        });
    };

    const handleEditRoad = (id: number) => {
        setEditMode(EditMode.EDIT);

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
                latitude: mapConfig.mapCenter[0],
                longitude: mapConfig.mapCenter[1],
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
            <h1>Sieć drogowa</h1>
            <RoadList
                roads={roads}
                handleEditRoad={handleEditRoad}
                handleAddRoadClick={handleAddRoadClick}
            />

            {!(editMode !== EditMode.NONE) || (
                <RoadForm
                    key={road?.name || editMode}
                    editMode={editMode}
                    road={road}
                    junctions={junctions}
                    handleSaveRoadClick={handleSaveRoadClick}
                    setAlert={setAlert}
                    setSnackbarOpen={setSnackbarOpen}
                    table={
                        <RoadJunctionsTable
                            junctions={junctions}
                            road={road}
                            handleDeleteJunction={handleDeleteJunction}
                            handleAddJunction={handleAddJunction}
                        />
                    }
                />
            )}

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

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                sx={{ width: "90%" }}
                onClose={() => setSnackbarOpen(false)}
            >
                {alert}
            </Snackbar>
        </>
    );
};
