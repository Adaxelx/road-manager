package pl.edu.pw.roadmanager.backend.domain;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "road_segment")
@AllArgsConstructor
@NoArgsConstructor
public class RoadSegment {

    @Id
    @SequenceGenerator(name = "road_segment_sequence", sequenceName = "road_segment_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "road_segment_sequence")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(nullable = false)
    private float length;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH}, fetch = FetchType.LAZY)
    @JoinColumn(name = "start_junction_id", nullable = false)
    private Junction start;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH}, fetch = FetchType.LAZY)
    @JoinColumn(name = "end_junction_id", nullable = false)
    private Junction end;

    @ManyToMany(mappedBy = "segments")
    private List<Road> roads;

    @ManyToOne
    @JoinColumn(name = "toll_id")
    private Toll toll;
}
