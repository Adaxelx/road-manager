package pl.edu.pw.roadmanager.backend.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.webjars.NotFoundException;
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

    @Operation(summary = "Add subscription. When subscription's id == null, system will return bad request." +
            "Otherwise system adds new subscription to the database.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Subscription successfully added.",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = SubscriptionPaymentDTO.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid data.",
                    content = @Content) })
    @PostMapping("/addSubscription")
    public ResponseEntity<?> addSubscription(@RequestBody SubscriptionPaymentDTO subscriptionPaymentDTO) {

        try {
            subscriptionAPI.addSubscription(subscriptionPaymentDTO);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.ok().build();
    }
}
