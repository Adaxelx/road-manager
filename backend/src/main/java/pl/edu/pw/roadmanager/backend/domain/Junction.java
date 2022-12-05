package pl.edu.pw.roadmanager.backend.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "junction")
@AllArgsConstructor
@NoArgsConstructor
public class Junction {

    @Id
    @SequenceGenerator(name = "junction_sequence", sequenceName = "junction_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "junction_sequence")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private float latitude;

    @Column(nullable = false)
    private float longitude;
}
