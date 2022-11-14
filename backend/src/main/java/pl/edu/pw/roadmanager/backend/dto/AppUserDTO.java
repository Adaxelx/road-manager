package pl.edu.pw.roadmanager.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.edu.pw.roadmanager.backend.domain.Vehicle;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppUserDTO {
    private Long id;

    private String email;

    private String firstName;

    private String lastName;

    private String phoneNumber;

    private List<Vehicle> vehicles;
}
