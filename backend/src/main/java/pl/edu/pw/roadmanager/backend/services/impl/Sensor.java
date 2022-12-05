package pl.edu.pw.roadmanager.backend.services.impl;

import org.apache.commons.lang3.StringUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pw.roadmanager.backend.domain.*;
import pl.edu.pw.roadmanager.backend.dto.PassageDTO;
import pl.edu.pw.roadmanager.backend.enums.VehicleType;
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
        if (registeredVehicle == null) {
            return 400;
        }
        passageDTO.setVehicle(registeredVehicle);

        Junction junction = getJunctionByLocation(passageDTO.getLongitude(), passageDTO.getLatitude());
        if (junction == null) {
            return 400;
        }

        List<Passage> passages = getVehiclesPassagesWithoutPayment(passageDTO.getRegistrationNumber());

        Passage passage = new Passage();
        if (passages.size() == 1) {
            passage = passages.get(0);
            passage.setEnd(junction);
            RoadSegment roadSegment = getRoadSegmentByJunctions(passage);
            if (roadSegment == null) {
                return 400;
            }
            List<VehicleToll> tolls = roadSegment.getToll()
                    .getVehicleTolls()
                    .stream()
                    .filter(t -> t.getType().equals(VehicleType.valueOf("CAR")))
                    .toList();
            if (tolls.size() == 1) {
                return 400;
            }
            float price = roadSegment.getLength() * tolls.get(0).getPricePerKilometer();
            Payment payment = new Payment();
            payment.setPassage(passage);
            payment.setPaid(false);
            payment.setPrice(price);
            passage.setPayment(payment);
            paymentRepository.save(payment);
            modelMapper.map(passageDTO, passage);
            passageRepository.save(passage);
        } else if (passages.isEmpty()) {
            passageDTO.setStart(junction);
            modelMapper.map(passageDTO, passage);
            passageRepository.save(passage);
        } else {
            return 400;
        }
        return 200;
    }

    private RoadSegment getRoadSegmentByJunctions(Passage passage) {
        List<RoadSegment> roadSegments = roadSegmentRepository.findAll()
                .stream()
                .filter(rs -> sameRoadSegments(rs.getStart(), rs.getEnd(), passage.getStart(), passage.getEnd()))
                .toList();
        if (roadSegments.size() != 1) {
            return null;
        }
        return roadSegments.get(0);
    }

    private boolean sameRoadSegments(Junction rsStart, Junction rsEnd, Junction pStart, Junction pEnd) {
        if (sameJunction(rsStart, pStart)) {
            return sameJunction(rsEnd, pEnd);
        } else if (sameJunction(rsEnd, pStart)) {
            return sameJunction(rsStart, pEnd);
        }
        return false;
    }

    private boolean sameJunction(Junction a, Junction b) {
        return a.getLongitude() == b.getLongitude() && a.getLatitude() == b.getLatitude();
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
