package pl.edu.pw.roadmanager.backend.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pw.roadmanager.backend.domain.AppUser;
import pl.edu.pw.roadmanager.backend.domain.Vehicle;
import pl.edu.pw.roadmanager.backend.dto.VehicleDTO;
import pl.edu.pw.roadmanager.backend.repositories.VehicleRepository;
import pl.edu.pw.roadmanager.backend.repositories.AppUserRepository;
import pl.edu.pw.roadmanager.backend.services.CepikAPI;
import pl.edu.pw.roadmanager.backend.services.DriveAPI;

import java.util.List;

@Service
public class Drive implements DriveAPI {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private AppUserRepository appUserRepository;

    @Override
    public int registerVehicle(VehicleDTO vehicleDTO) {
        Vehicle vehicle = new Vehicle();
        if (!CepikAPI.getDataFromCEPIK(vehicleDTO)) {
            return 400;
        }

        List<AppUser> appUsers = appUserRepository.findAll();
        for(AppUser user:appUsers){
            if(user.getVehicles().contains(vehicle)){
                return 400;
            }
        }
        System.out.println(appUsers);

        modelMapper.map(vehicleDTO, vehicle);
        vehicleRepository.save(vehicle);
        return 200;
    }
}
