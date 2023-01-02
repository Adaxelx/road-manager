package pl.edu.pw.roadmanager.backend.services.impl;

import pl.edu.pw.roadmanager.backend.dto.SubscriptionDTO;
import pl.edu.pw.roadmanager.backend.dto.SubscriptionPaymentDTO;
import pl.edu.pw.roadmanager.backend.dto.SubscriptionTypeDTO;
import pl.edu.pw.roadmanager.backend.services.SubscriptionAPI;

import java.util.List;

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
    public int addSubscription(SubscriptionPaymentDTO subscriptionPaymentDTO) {
        return 0;
    }
}
