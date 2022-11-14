package pl.edu.pw.roadmanager.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "road_segment")
@AllArgsConstructor
@NoArgsConstructor
public class RoadSegment {

    @Id
    @SequenceGenerator(name = "junction_sequence", sequenceName = "junction_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "junction_sequence")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(nullable = false)
    private float length;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "start_junction_id", nullable = false)
    private Junction start;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "end_junction_id", nullable = false)
    private Junction end;

    @ManyToMany(mappedBy = "segments")
    private List<Road> roads;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "toll_id")
    private Toll toll;
}
