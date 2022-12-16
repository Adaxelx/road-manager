package pl.edu.pw.roadmanager.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "subscription")
@AllArgsConstructor
@NoArgsConstructor
public class Subscription {
    @Id
    @SequenceGenerator(name = "subscription_sequence", sequenceName = "subscription_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "subscription_sequence")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "to_date", nullable = false)
    private Date to;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH})
    @JoinColumn(name = "app_user_id")
    private AppUser user;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH})
    @JoinColumn(name = "subscription_type_id")
    private SubscriptionType type;
}
