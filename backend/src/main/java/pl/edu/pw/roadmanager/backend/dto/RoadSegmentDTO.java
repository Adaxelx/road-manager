package pl.edu.pw.roadmanager.backend.dto;

import pl.edu.pw.roadmanager.backend.domain.Junction;
import pl.edu.pw.roadmanager.backend.domain.Road;
import pl.edu.pw.roadmanager.backend.domain.Toll;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import java.util.List;

public class RoadSegmentDTO {
    private Long id;

    private float length;

    private Junction start;

    private Junction end;

    private Toll toll;
}
