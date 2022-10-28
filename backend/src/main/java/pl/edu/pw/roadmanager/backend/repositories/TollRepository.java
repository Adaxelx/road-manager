package pl.edu.pw.roadmanager.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.pw.roadmanager.backend.domain.Toll;

public interface TollRepository extends JpaRepository<Toll, Long> {
}
