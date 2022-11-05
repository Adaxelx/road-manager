package pl.edu.pw.roadmanager.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RoadDTO {

    private Long id;

    private String code;

    private String name;

    private int type;
}
