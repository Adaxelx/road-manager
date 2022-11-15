package pl.edu.pw.roadmanager.backend.domain;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@Table(name = "toll")
@AllArgsConstructor
@NoArgsConstructor
public class Toll {
    @Id
    @SequenceGenerator(name = "toll_sequence", sequenceName = "toll_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "toll_sequence")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "name", updatable = true)
    private String name;

    @Column(name = "price_per_kilometer", updatable = true)
    private float pricePerKilometer;

    @OneToMany(mappedBy = "toll", cascade = { CascadeType.ALL })
    private List<RoadSegment> segments;
}
