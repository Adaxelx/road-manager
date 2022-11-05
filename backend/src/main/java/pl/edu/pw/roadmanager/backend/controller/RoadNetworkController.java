package pl.edu.pw.roadmanager.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.pw.roadmanager.backend.dto.RoadDTO;
import pl.edu.pw.roadmanager.backend.services.RoadNetworkAPI;

@RestController
@CrossOrigin
public class RoadNetworkController {

    @Autowired
    private RoadNetworkAPI roadNetworkAPI;

    @PostMapping("/roadNetwork")
    public ResponseEntity<?> createOrUpdateRoadNetwork(@RequestBody RoadDTO roadDTO) {
        roadNetworkAPI.addOrEditRoad(roadDTO);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/roadNetwork")
    public ResponseEntity<?> getRoadNetwork() {
        return ResponseEntity.ok().body(roadNetworkAPI.getRoadNetwork());
    }

}
