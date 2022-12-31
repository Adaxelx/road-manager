import * as React from "react";
import { useEffect } from "react";

import { VehicleTollDTOVehicleTypeEnum } from "@src/api";
import { SubscriptionDTO } from "@api/models/SubscriptionDTO";
import { SubscriptionTypeDTO } from "@api/models/SubscriptionType";
import { SubscriptionView } from "@features/Subscriptions/components/SubscriptionView/SubscriptionView";

export const SubscriptionWrapper = () => {
    const [subscriptions, setSubscriptions] = React.useState<SubscriptionDTO[]>(
        []
    );
    const [subscriptionTypes, setSubscriptionTypes] = React.useState<
        SubscriptionTypeDTO[]
    >([]);

    useEffect(() => {
        loadSubscriptions();
    }, []);

    const handleBuySubscriptionButtonClicked = async () => {
        const subscriptionTypes = [
            {
                id: 1,
                name: "Abonament roczny",
                type: VehicleTollDTOVehicleTypeEnum.Car,
                price: 229.99,
                period: 12,
            },
            {
                id: 2,
                name: "Abonament miesięczny",
                type: VehicleTollDTOVehicleTypeEnum.Car,
                price: 30.99,
                period: 1,
            },
        ];
        setSubscriptionTypes(subscriptionTypes);
    };

    const handleBuySubscriptionFormSubmitted = async (
        subscription: SubscriptionDTO
    ) => {
        // some PayU stuff
        // return this.subscriptionApi.addSubscription(subscription);
        setSubscriptions([...subscriptions, subscription]);
    };

    const loadSubscriptions = async () =>
        setSubscriptions([
            {
                id: 1,
                to: new Date(),
                type: {
                    id: 1,
                    name: "Abonament roczny",
                    type: VehicleTollDTOVehicleTypeEnum.Car,
                    price: 129.99,
                    period: 10,
                },
            },
            {
                id: 1,
                to: new Date(),
                type: {
                    id: 1,
                    name: "Abonament roczny",
                    type: VehicleTollDTOVehicleTypeEnum.Car,
                    price: 129.99,
                    period: 10,
                },
            },
            {
                id: 1,
                to: new Date(),
                type: {
                    id: 1,
                    name: "Abonament roczny",
                    type: VehicleTollDTOVehicleTypeEnum.Car,
                    price: 129.99,
                    period: 10,
                },
            },
            {
                id: 1,
                to: new Date(),
                type: {
                    id: 1,
                    name: "Abonament roczny",
                    type: VehicleTollDTOVehicleTypeEnum.Car,
                    price: 129.99,
                    period: 10,
                },
            },
        ]);
    //     subscriptionApi
    //         .getSubscriptions()
    //         .then((subscriptions: SubscriptionDTO[]) => setSubscriptions(subscriptions));

    return (
        <SubscriptionView
            subscriptions={subscriptions}
            subscriptionTypes={subscriptionTypes}
            handleBuySubscriptionButtonClicked={
                handleBuySubscriptionButtonClicked
            }
            handleBuySubscriptionFormSubmitted={
                handleBuySubscriptionFormSubmitted
            }
        />
    );
};
