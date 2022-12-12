package pl.edu.pw.roadmanager.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.edu.pw.roadmanager.backend.domain.Passage;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PaymentDTO {
    private Long id;

    private Boolean paid;

    private float price;

    private Long passage_id;
}
