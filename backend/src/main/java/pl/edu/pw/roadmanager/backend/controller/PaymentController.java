package pl.edu.pw.roadmanager.backend.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.webjars.NotFoundException;
import pl.edu.pw.roadmanager.backend.dto.TollDTO;
import pl.edu.pw.roadmanager.backend.services.PaymentAPI;

import javax.validation.Valid;

@RestController
@CrossOrigin
public class PaymentController {

    @Autowired
    private PaymentAPI paymentAPI;

    @Operation(summary = "Create or update toll. When toll's id == null, system creates new toll." +
            "Otherwise system gets toll from DB with id == toll.id and updates all fields.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Toll successfully created or updated.",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = TollDTO.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid data.",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Toll with given id does not exist in DB.",
                    content = @Content) })
    @PostMapping("/toll")
    public ResponseEntity<?> addOrEditTool(@Valid @RequestBody TollDTO tollDTO) {
        try {
            paymentAPI.addOrEditToll(tollDTO);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Get the toll list")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the toll list",
                    content = { @Content(mediaType = "application/json",
                            array = @ArraySchema(schema = @Schema(implementation = TollDTO.class))) }) })
    @GetMapping("/toll")
    public ResponseEntity<?> getTool() {
        return ResponseEntity.ok().body(paymentAPI.getTollList());
    }

}
