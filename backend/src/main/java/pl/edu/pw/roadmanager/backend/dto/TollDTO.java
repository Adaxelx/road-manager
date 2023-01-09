package pl.edu.pw.roadmanager.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TollDTO {
    private Long id;

    private String name;

    private List<VehicleTollDTO> vehicleTolls;

    private List<Long> roadSegments;
}
