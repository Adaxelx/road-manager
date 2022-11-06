import { Marker, Popup } from "react-leaflet";
import * as React from "react";
import { RoadDto } from "../../../../api/model/roadDto";
import { JunctionDto } from "../../../../api/model/junctionDto";

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

    return (
        <Marker position={[junction.latitude, junction.longitude]}>
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
