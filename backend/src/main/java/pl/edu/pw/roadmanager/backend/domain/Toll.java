package pl.edu.pw.roadmanager.backend.domain;

import javax.persistence.*;

import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
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

    @OneToMany(mappedBy = "toll", cascade = { CascadeType.ALL })
    private List<RoadSegment> segments;

    @OneToMany(mappedBy = "toll", cascade = { CascadeType.ALL })
    private List<VehicleToll> vehicleTolls;
}
