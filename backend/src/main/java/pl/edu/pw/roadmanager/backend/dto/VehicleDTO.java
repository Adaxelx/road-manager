package pl.edu.pw.roadmanager.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.edu.pw.roadmanager.backend.domain.AppUser;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VehicleDTO {

    private Long id;

    private float cylinderCapacity;

    private String manufacturer;

    private String model;

    private Date productionYear;

    private String registrationNumber;

    private long technicalID;

    private String type;

    private float weight;

    private List<AppUser> users;
}
