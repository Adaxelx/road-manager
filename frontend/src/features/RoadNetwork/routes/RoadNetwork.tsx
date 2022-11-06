import * as React from "react";
import "leaflet/dist/leaflet.css";
import "./RoadNetwork.scss";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export const RoadNetwork = () => {
    return (
        <MapContainer center={[40.8054, -74.0241]} zoom={14}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};
