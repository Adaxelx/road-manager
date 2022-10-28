package pl.edu.pw.roadmanager.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
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

    @Column(name = "type", nullable = false)
    private RoadType type;

    @ManyToMany
    @JoinTable(
            name = "road_road_segment_relation",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private List<RoadSegment> segments;
}
