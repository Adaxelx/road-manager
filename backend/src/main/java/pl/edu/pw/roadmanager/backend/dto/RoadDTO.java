package pl.edu.pw.roadmanager.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.edu.pw.roadmanager.backend.enums.RoadType;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RoadDTO {

    private Long id;

    private String code;

    private String name;

    private RoadType type;

    private List<RoadSegmentDTO> segments;
}
