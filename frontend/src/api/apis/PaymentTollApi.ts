import { TollDTO } from "../models/TollDTO";
import { VehicleType } from "../models/VehicleTollDTO";

export class PaymentTollApi {
    static tolls: TollDTO[] = [
        {
            id: 1,
            name: 'Taryfa A42',
            vehicleTollDTOS: [
                {
                    id: 1,
                    name: 'Samochód osobowy',
                    pricePerKilometer: 0.34,
                    vehicleType: VehicleType.CAR
                }
            ],
            roadSegments: [1, 4, 5]
        },
        {
            id: 2,
            name: 'Taryfa B-2',
            vehicleTollDTOS: [
                {
                    id: 2,
                    name: 'Samochód osobowy',
                    pricePerKilometer: 1.17,
                    vehicleType: VehicleType.CAR
                },
                {
                    id: 3,
                    name: 'Ciężarówka',
                    pricePerKilometer: 1.05,
                    vehicleType: VehicleType.TRUCK
                }
            ],
            roadSegments: [3, 6]
        }
    ];

    static addOrEditToll(toll: TollDTO): void {
        const targetIndex = PaymentTollApi.tolls.findIndex(x => x.id === toll.id);
        if (targetIndex === -1) {
            PaymentTollApi.tolls.push(toll);
        } else {
            PaymentTollApi.tolls[targetIndex] = toll;
        }
    }

    static getTollList(): TollDTO[] {
        return PaymentTollApi.tolls;
    }
}