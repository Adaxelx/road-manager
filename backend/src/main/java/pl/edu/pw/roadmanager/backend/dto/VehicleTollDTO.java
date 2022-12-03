package pl.edu.pw.roadmanager.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.edu.pw.roadmanager.backend.enums.VehicleType;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VehicleTollDTO {
    private Long id;

    private float pricePerKilometer;

    private VehicleType vehicleType;
}
