package pl.edu.pw.roadmanager.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.edu.pw.roadmanager.backend.domain.Junction;
import pl.edu.pw.roadmanager.backend.domain.Payment;
import pl.edu.pw.roadmanager.backend.domain.Vehicle;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PassageDTO {

    private Long id;

    private Date date;

    private Payment payment;

    private Junction start;

    private Junction end;

    private Vehicle vehicle;

    private float latitude;

    private float longitude;

    private String registrationNumber;
}
