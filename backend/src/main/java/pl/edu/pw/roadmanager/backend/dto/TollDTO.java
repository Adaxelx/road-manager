package pl.edu.pw.roadmanager.backend.dto;

import pl.edu.pw.roadmanager.backend.domain.RoadSegment;

import javax.persistence.*;
import java.util.List;

public class TollDTO {
    private Long id;

    private String name;

    private float pricePerKilometer;

    private List<RoadSegmentDTO> segments;
}
