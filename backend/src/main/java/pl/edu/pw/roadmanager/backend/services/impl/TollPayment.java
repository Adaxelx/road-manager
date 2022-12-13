package pl.edu.pw.roadmanager.backend.services.impl;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.webjars.NotFoundException;
import pl.edu.pw.roadmanager.backend.domain.*;
import pl.edu.pw.roadmanager.backend.dto.PaymentDTO;
import pl.edu.pw.roadmanager.backend.dto.TollDTO;
import pl.edu.pw.roadmanager.backend.repositories.PaymentRepository;
import pl.edu.pw.roadmanager.backend.repositories.RoadSegmentRepository;
import pl.edu.pw.roadmanager.backend.repositories.TollRepository;
import pl.edu.pw.roadmanager.backend.repositories.VehicleTollRepository;
import pl.edu.pw.roadmanager.backend.services.PaymentAPI;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

@Service
public class TollPayment implements PaymentAPI {

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    TollRepository tollRepository;

    @Autowired
    VehicleTollRepository vehicleTollRepository;

    @Autowired
    RoadSegmentRepository roadSegmentRepository;

    @Autowired
    PaymentRepository paymentRepository;

    @Transactional
    @Override
    public void addOrEditToll(TollDTO tollDTO) {
        Toll toll = new Toll();
        List<VehicleToll> vehicleTolls = new ArrayList<>();
        if (tollDTO.getId() != null) {
            toll = tollRepository.findById(tollDTO.getId()).orElseThrow(() -> new NotFoundException("Toll not found."));
        }

        toll.setName(tollDTO.getName());

        tollDTO.getVehicleTolls().forEach(vt -> {
            VehicleToll vehicleToll = new VehicleToll();

            if (vt.getId() != null) {
                vehicleToll = vehicleTollRepository.findById(vt.getId()).orElseThrow(() -> new NotFoundException("Vehicle toll not found."));
            }

            modelMapper.map(vt, vehicleToll);
            vehicleTolls.add(vehicleToll);
        });

        toll.setVehicleTolls(vehicleTolls);

        Toll finalToll = toll;
        vehicleTolls.forEach(vt -> vt.setToll(finalToll));
        vehicleTollRepository.saveAll(vehicleTolls);
    }

    @Override
    public List<TollDTO> getTollList() {
        Type listType = new TypeToken<List<TollDTO>>(){}.getType();

        return modelMapper.map(tollRepository.findAll(), listType);
    }

    @Override
    public void addPayment(PaymentDTO paymentDTO) {
        Payment payment = new Payment();
        if (paymentDTO.getId() != null) {
            payment = paymentRepository.findById(paymentDTO.getId()).orElseThrow(() -> new NotFoundException("Payment not found."));
        }

        modelMapper.map(paymentDTO, payment);
        paymentRepository.save(payment);
    }

    @Override
    public List<PaymentDTO> getPaymentList(String userId) {
        Type listType = new TypeToken<List<PaymentDTO>>() {
        }.getType();

        return modelMapper.map(paymentRepository.findAll(), listType);

    }
}
