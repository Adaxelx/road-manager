package pl.edu.pw.roadmanager.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.pw.roadmanager.backend.dto.PassageDTO;
import pl.edu.pw.roadmanager.backend.dto.VehicleDTO;
import pl.edu.pw.roadmanager.backend.services.DriveAPI;
import pl.edu.pw.roadmanager.backend.services.SensorAPI;

@RestController
@CrossOrigin
public class DriveController {

    @Autowired
    private DriveAPI driveAPI;

    @Autowired
    private SensorAPI sensorAPI;

    @PostMapping("/drive")
    public ResponseEntity<?> registerVehicle(@RequestBody VehicleDTO vehicleDTO) {
        int responseCode = driveAPI.registerVehicle(vehicleDTO);
        return ResponseEntity.status(responseCode).build();
    }

    @PostMapping("/registerPassage")
    public ResponseEntity<?> registerPassage(@RequestBody PassageDTO passageDTO) {
        int responseCode = sensorAPI.registerPassage(passageDTO);
        return ResponseEntity.status(responseCode).build();
    }
}
