package pl.edu.pw.roadmanager.backend.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pw.roadmanager.backend.domain.AppUser;
import pl.edu.pw.roadmanager.backend.domain.Vehicle;
import pl.edu.pw.roadmanager.backend.dto.VehicleDTO;
import pl.edu.pw.roadmanager.backend.repositories.AppUserRepository;
import pl.edu.pw.roadmanager.backend.repositories.VehicleRepository;
import pl.edu.pw.roadmanager.backend.services.CepikAPI;
import pl.edu.pw.roadmanager.backend.services.DriveAPI;

import java.util.stream.Stream;

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
        String secondOwnerName = vehicleDTO.getSecondOwner();
        if (secondOwnerProvided(secondOwnerName)) {
            if (secondOwnerDoesntExists(secondOwnerName)) {
                return 400;
            }
        }

        Vehicle vehicle = new Vehicle();
        if (!CepikAPI.getDataFromCEPIK(vehicleDTO)) {
            return 400;
        }

        modelMapper.map(vehicleDTO, vehicle);
        vehicleRepository.save(vehicle);
        return 200;
    }

    private boolean secondOwnerDoesntExists(String secondOwnerName) {
        String[] names = secondOwnerName.toLowerCase().split(" ");
        if (names.length != 2){
            return true;
        }

        String firstName = names[0];
        String lastName = names[1];
        Stream<AppUser> secondOwners = appUserRepository.findAll()
                .stream()
                .filter(user -> user.getFirstName().toLowerCase().equals(firstName) && user.getLastName().toLowerCase().equals(lastName));
        return secondOwners.count() != 1;
    }

    private boolean secondOwnerProvided(String secondOwnerName) {
        return secondOwnerName != null && !secondOwnerName.isEmpty();
    }
}
