package pl.edu.pw.roadmanager.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pw.roadmanager.backend.dto.SubscriptionPaymentDTO;

@RestController
@CrossOrigin
public class SubscriptionController {

    @GetMapping("/getSubscriptions")
    public ResponseEntity<?> getSubscriptions() {

    }

    @GetMapping("/getSubscriptionTypes")
    public ResponseEntity<?> getSubscriptionTypes() {

    }

    @PostMapping("/addSubscription")
    public ResponseEntity<?> addSubscription(SubscriptionPaymentDTO subscriptionPaymentDTO) {

    }
}
