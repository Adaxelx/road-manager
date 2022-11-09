import { Marker, Popup } from "react-leaflet";
import * as React from "react";
import { RoadDto } from "../../../../api/model/roadDto";
import { JunctionDto } from "../../../../api/model/junctionDto";
import { useMemo, useRef } from "react";
import { LatLng } from "leaflet";

type MapMarkerProps = {
    junctionIdx: number;
    road: RoadDto | undefined;
    junction: JunctionDto;
    handleChangeJunctionPosition: (idx: number, latLng: LatLng) => void;
};
export const MapMarker = ({
    junctionIdx,
    road,
    junction,
    handleChangeJunctionPosition,
}: MapMarkerProps) => {
    const markerRef = useRef(null);
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current;
                if (marker != null) {
                    handleChangeJunctionPosition(
                        junctionIdx,
                        // @ts-ignore
                        marker.getLatLng()
                    );
                }
            },
        }),
        []
    );

    const popupContent = ({
        roadName,
        latitude,
        longitude,
    }: {
        latitude: number;
        longitude: number;
        roadName?: string | undefined;
    }) => `(${latitude.toFixed(3)}, ${longitude.toFixed(3)}) ${roadName}`;

    return (
        <Marker
            position={[junction.latitude, junction.longitude]}
            draggable={true}
            ref={markerRef}
            eventHandlers={eventHandlers}
        >
            <Popup>
                {popupContent({
                    roadName: road?.name || "",
                    latitude: junction.latitude,
                    longitude: junction.longitude,
                })}
            </Popup>
        </Marker>
    );
};
