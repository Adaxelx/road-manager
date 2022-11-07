package pl.edu.pw.roadmanager.backend.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import pl.edu.pw.roadmanager.backend.domain.Vehicle;
import pl.edu.pw.roadmanager.backend.dto.VehicleDTO;
import pl.edu.pw.roadmanager.backend.repositories.VehicleRepository;
import pl.edu.pw.roadmanager.backend.services.CepikAPI;
import pl.edu.pw.roadmanager.backend.services.DriveAPI;

public class Drive implements DriveAPI {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public void registerVehicle(VehicleDTO vehicleDTO) {
        Vehicle vehicle = new Vehicle();
        CepikAPI.getDataFromCEPIK(vehicleDTO);

        modelMapper.map(vehicleDTO, vehicle);
        vehicleRepository.save(vehicle);
    }
}
