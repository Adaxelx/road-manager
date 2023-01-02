package pl.edu.pw.roadmanager.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pw.roadmanager.backend.dto.SubscriptionPaymentDTO;
import pl.edu.pw.roadmanager.backend.services.SubscriptionAPI;

@RestController
@CrossOrigin
public class SubscriptionController {

    @Autowired
    private SubscriptionAPI subscriptionAPI;

    @GetMapping("/getSubscriptions")
    public ResponseEntity<?> getSubscriptions() {
        return ResponseEntity.ok().body(subscriptionAPI.getSubscriptions());
    }

    @GetMapping("/getSubscriptionTypes")
    public ResponseEntity<?> getSubscriptionTypes() {
        return ResponseEntity.ok().body(subscriptionAPI.getSubscriptionTypes());
    }

    @PostMapping("/addSubscription")
    public ResponseEntity<?> addSubscription(SubscriptionPaymentDTO subscriptionPaymentDTO) {

    }
}
