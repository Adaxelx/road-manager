package pl.edu.pw.roadmanager.backend.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @Column(name = "cilinder_capacity", updatable = true)
    private float cilinderCapacity;

    @Column(name = "height", updatable = true)
    private float height;

    @Column(name = "length", updatable = true)
    private float length;

    @Column(name = "manufacturer", updatable = true)
    private String manufacturer;

    @Column(name = "model", updatable = true)
    private String model;

    @Column(name = "production_year", updatable = true)
    private Date productionYear;

    @Column(name = "registartion_number", updatable = true)
    private String registartionNumber;

    @Column(name = "technical_id", updatable = true)
    private long technicalID;

    @Column(name = "type", updatable = true)
    private String type;

    @Column(name = "weight", updatable = true)
    private float weight;

    @Column(name = "width", updatable = true)
    private float width;
}
