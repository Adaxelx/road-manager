package pl.edu.pw.roadmanager.backend.domain;

import lombok.*;
import pl.edu.pw.roadmanager.backend.enums.RoadType;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "road")
@AllArgsConstructor
@NoArgsConstructor
public class Road {

    @Id
    @SequenceGenerator(name = "junction_sequence", sequenceName = "junction_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "junction_sequence")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "code", nullable = false)
    private String code;

    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private RoadType type;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH}, fetch = FetchType.LAZY)
    @JoinTable(
            name = "road_road_segment_relation",
            joinColumns = @JoinColumn(name = "road_id"),
            inverseJoinColumns = @JoinColumn(name = "road_segment_id")
    )
    private List<RoadSegment> segments;
}
