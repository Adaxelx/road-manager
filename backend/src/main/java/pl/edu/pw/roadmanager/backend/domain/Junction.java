package pl.edu.pw.roadmanager.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
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

    @OneToMany(mappedBy = "road_segment", cascade = CascadeType.REMOVE)
    protected List<RoadSegment> segments;
}
