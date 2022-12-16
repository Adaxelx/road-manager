package pl.edu.pw.roadmanager.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.pw.roadmanager.backend.domain.Subscription;

public interface SubscriptionRepository extends JpaRepository<Subscription,Long> {
}
