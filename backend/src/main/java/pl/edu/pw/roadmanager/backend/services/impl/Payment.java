package pl.edu.pw.roadmanager.backend.services.impl;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;
import pl.edu.pw.roadmanager.backend.domain.Toll;
import pl.edu.pw.roadmanager.backend.dto.TollDTO;
import pl.edu.pw.roadmanager.backend.repositories.TollRepository;
import pl.edu.pw.roadmanager.backend.services.PaymentAPI;

import java.lang.reflect.Type;
import java.util.List;

@Service
public class Payment implements PaymentAPI {

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    TollRepository tollRepository;

    @Override
    public void addOrEditToll(TollDTO tollDTO) {
        Toll toll = new Toll();
        if (tollDTO.getId() != null) {
            toll = tollRepository.findById(tollDTO.getId()).orElseThrow(() -> new NotFoundException("Toll not found."));
        }

        modelMapper.map(tollDTO, toll);
        tollRepository.save(toll);
    }

    @Override
    public List<TollDTO> getTollList() {
        Type listType = new TypeToken<List<TollDTO>>(){}.getType();

        return modelMapper.map(tollRepository.findAll(), listType);
    }
}
