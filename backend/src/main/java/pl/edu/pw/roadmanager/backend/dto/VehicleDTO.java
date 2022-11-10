package pl.edu.pw.roadmanager.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VehicleDTO {

    private Long id;

    private double cylinderCapacity;

    private String manufacturer;

    private String model;

    private Date productionYear;

    private String registrationNumber;

    private long technicalID;

    private String type;

    private double weight;

    private String secondOwner;

    private String firstOwner;
}
