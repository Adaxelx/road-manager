export enum VehicleType {
    CAR = "SAMOCHÓD",
    TRUCK = "CIĘŻARÓWKA"
}

export interface VehicleTollDTO {
    id?: number;
    name?: string;
    pricePerKilometer?: number;
    vehicleType?: VehicleType;
}