import { VehicleTollDTOVehicleTypeEnum } from "@src/api";

export interface SubscriptionTypeDTO {
    id: number;
    name: string;
    period: number;
    price: number;
    type: VehicleTollDTOVehicleTypeEnum;
}
