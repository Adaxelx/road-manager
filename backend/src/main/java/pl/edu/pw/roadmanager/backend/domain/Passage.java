package pl.edu.pw.roadmanager.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name = "passage")
@AllArgsConstructor
@NoArgsConstructor
public class Passage {
    @Id
    @SequenceGenerator(name = "passage_sequence", sequenceName = "passage_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "passage_sequence")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "date", nullable = false)
    private Date date;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "payment_id", referencedColumnName = "id")
    private Payment payment;
}
