package pl.edu.pw.roadmanager.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RoadSegmentDTO {
    private Long id;

    private float length;

    private JunctionDTO start;

    private JunctionDTO end;

    private Long toolId;
}
