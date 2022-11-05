package pl.edu.pw.roadmanager.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.edu.pw.roadmanager.backend.domain.Toll;

@Repository
public interface TollRepository extends JpaRepository<Toll, Long> {
}
