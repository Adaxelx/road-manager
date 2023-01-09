package pl.edu.pw.roadmanager.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.edu.pw.roadmanager.backend.enums.VehicleType;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "subscription_type")
@AllArgsConstructor
@NoArgsConstructor
public class SubscriptionType {
    @Id
    @SequenceGenerator(name = "subscription_type_sequence", sequenceName = "subscription_type_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "subscription_type_sequence")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "period", nullable = false)
    private  Integer period;

    @Column(name = "price", nullable = false)
    private Float price;

    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private VehicleType type;
}