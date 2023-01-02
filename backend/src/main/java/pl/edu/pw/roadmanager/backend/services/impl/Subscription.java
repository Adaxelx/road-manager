package pl.edu.pw.roadmanager.backend.services.impl;

import pl.edu.pw.roadmanager.backend.services.SubscriptionAPI;

public class Subscription implements SubscriptionAPI {

    @Override
    public List<SubscriptionDTO> getSubscriptions(SubscriptionDTO subscriptionDTO) {
        return null;
    }

    @Override
    public List<SubscriptionTypeDTO> getSubscriptionTypes(SubscriptionTypeDTO subscriptionTypeDTO) {
        return null;
    }

    @Override
    public int addSubscription(SubscriptionPayment subscriptionPayment) {
        return 0;
    }
}
