package pl.edu.pw.roadmanager.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.edu.pw.roadmanager.backend.domain.SubscriptionType;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SubscriptionPaymentDTO {

    private SubscriptionType subscriptionType;

    private String blickNumber;
}
