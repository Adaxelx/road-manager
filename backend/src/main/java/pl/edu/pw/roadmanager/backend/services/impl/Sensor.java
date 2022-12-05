package pl.edu.pw.roadmanager.backend.services.impl;

import com.sun.xml.bind.v2.TODO;
import org.apache.commons.lang3.StringUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pw.roadmanager.backend.domain.Junction;
import pl.edu.pw.roadmanager.backend.domain.Passage;
import pl.edu.pw.roadmanager.backend.domain.Vehicle;
import pl.edu.pw.roadmanager.backend.dto.PassageDTO;
import pl.edu.pw.roadmanager.backend.repositories.*;
import pl.edu.pw.roadmanager.backend.services.SensorAPI;

import java.util.List;

@Service
public class Sensor implements SensorAPI {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private RoadSegmentRepository roadSegmentRepository;

    @Autowired
    private JunctionRepository junctionRepository;

    @Autowired
    private PassageRepository passageRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Override
    public int registerPassage(PassageDTO passageDTO) {
        Vehicle registeredVehicle = getVehicleByRegistrationNumber(passageDTO.getRegistrationNumber());
        passageDTO.setVehicle(registeredVehicle);

        Junction junction = getJunctionByLocation(passageDTO.getLongitude(), passageDTO.getLatitude());

        List<Passage> passages = getVehiclesPassagesWithoutPayment(passageDTO.getRegistrationNumber());

        Passage passage = new Passage();
        if (passages.size() == 1) {
            // TODO: 12/5/2022 clean this if
            passage = passages.get(0);
            passage.setEnd(junction);
            Passage finalPassage = passage;
            roadSegmentRepository.findAll()
                    .stream()
                    .filter(rs ->sameRoadSegments(rs.getStart(), rs.getEnd(), finalPassage.getStart(), finalPassage.getEnd()))
                    .toList();
        } else if (passages.size() == 0) {
            passageDTO.setStart(junction);
            modelMapper.map(passageDTO, passage);
            passageRepository.save(passage);
        } else {
            return 400;
        }
        return 200;
    }

    // TODO: 12/5/2022 end creating this method
    private boolean sameRoadSegments(Junction rsStart, Junction rsEnd, Junction pStart, Junction pEnd){

    }

    private List<Passage> getVehiclesPassagesWithoutPayment(String registrationNumber) {
        return passageRepository.findAll()
                .stream()
                .filter(p -> StringUtils.equals(p.getVehicle().getRegistrationNumber(), registrationNumber))
                .filter(p -> p.getPayment() == null)
                .toList();
    }

    private Junction getJunctionByLocation(float longitude, float latitude) {
        List<Junction> junctions = junctionRepository.findAll()
                .stream()
                .filter(j -> j.getLatitude() == latitude && j.getLongitude() == longitude)
                .toList();
        if (junctions.size() != 1) {
            return null;
        }
        return junctions.get(0);
    }

    private Vehicle getVehicleByRegistrationNumber(String registrationNumber) {
        List<Vehicle> vehicles = vehicleRepository.findAll()
                .stream()
                .filter(v -> StringUtils.equals(v.getRegistrationNumber(), registrationNumber))
                .toList();
        if (vehicles.size() != 1) {
            return null;
        }
        return vehicles.get(0);
    }
}
