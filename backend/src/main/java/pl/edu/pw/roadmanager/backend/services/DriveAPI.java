package pl.edu.pw.roadmanager.backend.services;

import pl.edu.pw.roadmanager.backend.dto.VehicleDTO;

public interface DriveAPI {

    void registerVehicle(VehicleDTO vehicleDTO);
}
