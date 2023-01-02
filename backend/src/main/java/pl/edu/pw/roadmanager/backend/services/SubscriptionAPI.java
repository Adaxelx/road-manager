package pl.edu.pw.roadmanager.backend.services;

public interface SubscriptionAPI {

    List<SubscriptionDTO> getSubscriptions(SubscriptionDTO subscriptionDTO);

    List<SubscriptionTypeDTO> getSubscriptionTypes(SubscriptionTypeDTO subscriptionTypeDTO);

    int addSubscription(SubscriptionPayment subscriptionPayment);
}
