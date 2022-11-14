package pl.edu.pw.roadmanager.backend.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;
import pl.edu.pw.roadmanager.backend.domain.Road;
import pl.edu.pw.roadmanager.backend.dto.RoadDTO;
import pl.edu.pw.roadmanager.backend.dto.RoadNetworkDTO;
import pl.edu.pw.roadmanager.backend.repositories.RoadRepository;
import pl.edu.pw.roadmanager.backend.services.RoadNetworkAPI;

@Service
public class RoadNetwork implements RoadNetworkAPI {

    @Autowired
    private RoadRepository roadRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public void addOrEditRoad(RoadDTO roadDTO) {
        Road road = new Road();
        if (roadDTO.getId() != null) {
            road = roadRepository.findById(roadDTO.getId()).orElseThrow(() -> new NotFoundException("Road not found"));
        }

        modelMapper.map(roadDTO, road);
        roadRepository.save(road);
    }

    @Override
    public RoadNetworkDTO getRoadNetwork() {
        RoadNetworkDTO roadNetworkDTO = modelMapper.map(roadRepository.findById(1L), RoadNetworkDTO.class);

        return roadNetworkDTO;
    }
}
