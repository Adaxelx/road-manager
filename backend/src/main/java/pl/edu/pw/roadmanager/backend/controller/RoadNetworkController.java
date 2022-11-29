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
import pl.edu.pw.roadmanager.backend.dto.RoadDTO;
import pl.edu.pw.roadmanager.backend.dto.RoadNetworkDTO;
import pl.edu.pw.roadmanager.backend.services.RoadNetworkAPI;

import javax.validation.Valid;

@RestController
@CrossOrigin
public class RoadNetworkController {

    @Autowired
    private RoadNetworkAPI roadNetworkAPI;

    @Operation(summary = "Create or update road. When road's id == null, system creates new road." +
            "Otherwise system gets road from DB with id == road.id and updates all fields.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Road successfully created or updated.",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = RoadDTO.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid data.",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Road with given id does not exist in DB.",
                    content = @Content) })
    @PostMapping("/roadNetwork")
    public ResponseEntity<?> addOrEditRoad(@Valid @RequestBody RoadDTO roadDTO) {
        try {
            roadNetworkAPI.addOrEditRoad(roadDTO);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Get a road network")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the road network",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = RoadNetworkDTO.class)) }) })
    @GetMapping("/roadNetwork")
    public ResponseEntity<?> getRoadNetwork() {
        return ResponseEntity.ok().body(roadNetworkAPI.getRoadNetwork());
    }

}
