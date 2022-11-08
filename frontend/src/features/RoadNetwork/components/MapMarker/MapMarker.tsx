import { Marker, Popup } from "react-leaflet";
import * as React from "react";
import { RoadDto } from "../../../../api/model/roadDto";
import { JunctionDto } from "../../../../api/model/junctionDto";
import { useState } from "react";

type MapMarkerProps = {
    road: RoadDto;
    junction: JunctionDto;
};
export const MapMarker = ({ road, junction }: MapMarkerProps) => {
    const popupContent = ({
        roadName,
        latitude,
        longitude,
    }: {
        latitude: number;
        longitude: number;
        roadName?: string | undefined;
    }) => `(${latitude.toFixed(3)}, ${longitude.toFixed(3)}) ${roadName}`;

    const [position, setPosition] = useState({
        lat: junction.latitude,
        lng: junction.longitude,
    });

    return (
        <Marker
            position={position}
            draggable={true}
            eventHandlers={{
                moveend: (x) => {
                    console.log("marker move");
                    //setPosition();
                },
            }}
        >
            <Popup>
                {popupContent({
                    roadName: road.name,
                    latitude: junction.latitude,
                    longitude: junction.longitude,
                })}
            </Popup>
        </Marker>
    );
};
