import * as React from "react";
import { useEffect } from "react";

import { SubscriptionControllerApi, SubscriptionTypeDTO } from "@src/api";
import { SubscriptionDTO } from "@api/models/SubscriptionDTO";
import { SubscriptionView } from "@features/Subscriptions/components/SubscriptionView/SubscriptionView";

export const SubscriptionWrapper = () => {
    const subscriptionControllerApi = new SubscriptionControllerApi();
    const [subscriptions, setSubscriptions] = React.useState<SubscriptionDTO[]>(
        []
    );
    const [subscriptionTypes, setSubscriptionTypes] = React.useState<
        SubscriptionTypeDTO[]
    >([]);

    useEffect(() => {
        loadSubscriptions();
    }, []);

    const handleBuySubscriptionButtonClicked = async () =>
        loadSubscriptionTypes();

    const handleBuySubscriptionFormSubmitted = async (
        subscriptionTypeDTO: SubscriptionTypeDTO,
        blickNumber: number
    ) => {
        return subscriptionControllerApi.addSubscription({
            subscriptionType: subscriptionTypeDTO,
            blickNumber: Math.floor(blickNumber),
        });
    };

    const loadSubscriptionTypes = async () =>
        subscriptionControllerApi
            .getSubscriptionTypes()
            .then((subscriptionTypes: SubscriptionTypeDTO[]) =>
                setSubscriptionTypes(subscriptionTypes)
            );

    const loadSubscriptions = async () =>
        subscriptionControllerApi
            .getSubscriptions()
            .then((subscriptions: SubscriptionDTO[]) =>
                setSubscriptions(subscriptions)
            );

    return (
        <>
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
        </>
    );
};
