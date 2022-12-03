package pl.edu.pw.roadmanager.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.edu.pw.roadmanager.backend.enums.RoadTypeEnums;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "vehicle_toll")
@AllArgsConstructor
@NoArgsConstructor
public class VehicleToll {
    @Id
    @SequenceGenerator(name = "vehicle_toll_sequence", sequenceName = "vehicle_toll_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "vehicle_toll_sequence")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "price_per_kilometer", updatable = true)
    private float pricePerKilometer;

    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private RoadTypeEnums type;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH})
    @JoinColumn(name = "toll_id")
    private Toll toll;
}
