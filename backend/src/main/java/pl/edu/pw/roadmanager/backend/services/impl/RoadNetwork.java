package pl.edu.pw.roadmanager.backend.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.webjars.NotFoundException;
import pl.edu.pw.roadmanager.backend.domain.Junction;
import pl.edu.pw.roadmanager.backend.domain.Road;
import pl.edu.pw.roadmanager.backend.domain.RoadSegment;
import pl.edu.pw.roadmanager.backend.dto.RoadDTO;
import pl.edu.pw.roadmanager.backend.dto.RoadNetworkDTO;
import pl.edu.pw.roadmanager.backend.repositories.JunctionRepository;
import pl.edu.pw.roadmanager.backend.repositories.RoadRepository;
import pl.edu.pw.roadmanager.backend.repositories.RoadSegmentRepository;
import pl.edu.pw.roadmanager.backend.services.RoadNetworkAPI;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoadNetwork implements RoadNetworkAPI {

    @Autowired
    private RoadRepository roadRepository;

    @Autowired
    private RoadSegmentRepository roadSegmentRepository;

    @Autowired
    private JunctionRepository junctionRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Transactional
    @Override
    public void addOrEditRoad(RoadDTO roadDTO) {
        Road road = new Road();
        List<RoadSegment> roadSegments = new ArrayList<>();
        if (roadDTO.getId() != null) {
            road = roadRepository.findById(roadDTO.getId()).orElseThrow(() -> new NotFoundException("Road not found."));
        }

        road.setCode(roadDTO.getCode());
        road.setName(roadDTO.getName());
        road.setType(roadDTO.getType());

        roadDTO.getSegments().forEach(s -> {
            RoadSegment roadSegment = new RoadSegment();
            Junction start = new Junction();
            Junction end = new Junction();

            if (s.getId() != null) {
                roadSegment = roadSegmentRepository.findById(s.getId()).orElseThrow(() -> new NotFoundException("Road segment not found."));
            }
            if (s.getStart().getId() != null) {
                start = junctionRepository.findById(s.getStart().getId()).orElseThrow(() -> new NotFoundException("Segments start junction not found."));
            }
            if (s.getEnd().getId() != null) {
                end = junctionRepository.findById(s.getEnd().getId()).orElseThrow(() -> new NotFoundException("Segments end junction not found."));
            }

            modelMapper.map(s.getStart(), start);
            modelMapper.map(s.getEnd(), end);
            modelMapper.map(s, roadSegment);

            roadSegment.setStart(start);
            roadSegment.setEnd(end);
            roadSegments.add(roadSegment);
        });
        road.setSegments(roadSegments);
        roadRepository.save(road);
    }

    @Override
    public RoadNetworkDTO getRoadNetwork() {
        RoadNetworkDTO roadNetworkDTO = modelMapper.map(roadRepository.findById(1L), RoadNetworkDTO.class);

        return roadNetworkDTO;
    }
}
