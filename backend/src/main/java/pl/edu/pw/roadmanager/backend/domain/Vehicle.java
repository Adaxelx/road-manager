package pl.edu.pw.roadmanager.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name = "vehicle")
@AllArgsConstructor
@NoArgsConstructor
public class Vehicle {
    @Id
    @SequenceGenerator(name = "vehicle_sequence", sequenceName = "vehicle_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "vehicle_sequence")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "cylinder_capacity", updatable = true)
    private double cylinderCapacity;

    @Column(name = "manufacturer", updatable = true)
    private String manufacturer;

    @Column(name = "model", updatable = true)
    private String model;

    @Column(name = "production_year", updatable = true)
    private Date productionYear;

    @Column(name = "registration_number", updatable = true)
    private String registrationNumber;

    @Column(name = "technical_id", updatable = true)
    private long technicalID;

    @Column(name = "type", updatable = true)
    private String type;

    @Column(name = "weight", updatable = true)
    private double weight;

    @Column(name = "first_owner", updatable = true)
    private String firstOwner;

    @Column(name = "second_owner", updatable = true)
    private String secondOwner;
}
