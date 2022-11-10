package pl.edu.pw.roadmanager.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pw.roadmanager.backend.dto.VehicleDTO;
import pl.edu.pw.roadmanager.backend.services.DriveAPI;

@RestController
@CrossOrigin
public class DriveController {

    @Autowired
    private DriveAPI driveAPI;

    @PostMapping("/drive")
    public ResponseEntity<?> registerVehicle(@RequestBody VehicleDTO vehicleDTO) {
        int responseCode = driveAPI.registerVehicle(vehicleDTO);
        return ResponseEntity.status(responseCode).build();
    }
}
