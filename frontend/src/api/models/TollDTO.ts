import { VehicleTollDTO } from "./VehicleTollDTO";

export interface TollDTO {
    id?: number;
    name?: string;
    vehicleTollDTOS?: VehicleTollDTO[];
    roadSegments?: number[];
}