package pl.edu.pw.roadmanager.backend.services;

import pl.edu.pw.roadmanager.backend.dto.SubscriptionDTO;
import pl.edu.pw.roadmanager.backend.dto.SubscriptionPaymentDTO;
import pl.edu.pw.roadmanager.backend.dto.SubscriptionTypeDTO;

import java.util.List;

public interface SubscriptionAPI {

    List<SubscriptionDTO> getSubscriptions();

    List<SubscriptionTypeDTO> getSubscriptionTypes();

    int addSubscription(SubscriptionPaymentDTO subscriptionPayment);
}
