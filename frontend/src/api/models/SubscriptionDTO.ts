import { SubscriptionTypeDTO } from "@api/models/SubscriptionType";

export interface SubscriptionDTO {
    id: number;
    to: Date;
    type: SubscriptionTypeDTO;
}
