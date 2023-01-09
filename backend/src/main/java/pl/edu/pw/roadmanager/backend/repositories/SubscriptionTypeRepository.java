package pl.edu.pw.roadmanager.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.pw.roadmanager.backend.domain.SubscriptionType;

public interface SubscriptionTypeRepository extends JpaRepository<SubscriptionType, Long> {
}
