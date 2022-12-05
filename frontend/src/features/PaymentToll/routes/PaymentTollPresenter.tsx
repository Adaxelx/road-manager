import { PaymentTollApi } from "@src/api/apis/PaymentTollApi";
import { TollDTO } from "@src/api/models/TollDTO";
import * as React from "react";
import { PaymentTollView } from "../components/PaymentTollView";

export const PaymentTollPresenter = () => {
    const [tolls, setTolls] = React.useState<TollDTO[]>([])

    const loadTolls = () => {
        const apiResult = PaymentTollApi
            .getTollList()
            .map(
                x => {
                    return x.vehicleTollDTOS!.length < 2 ?
                        [x] :
                        x.vehicleTollDTOS!.map(
                            y => {
                                return {
                                    ...x, vehicleTollDTOS: [y]
                                } as TollDTO;
                            }
                        );
                }
            )
            .flat()

        setTolls(apiResult);
    }

    if (tolls.length === 0) {
        loadTolls();
    }

    return (
        <PaymentTollView tolls={tolls} />
    )
}