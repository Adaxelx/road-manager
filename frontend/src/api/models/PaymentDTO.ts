import { PassageDTO } from "@api/models/PassageDTO";

export interface PaymentDTO {
    paid: boolean;
    passage: PassageDTO;
    amount: number;
}
