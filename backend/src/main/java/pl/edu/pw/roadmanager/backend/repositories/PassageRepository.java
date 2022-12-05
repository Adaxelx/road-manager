package pl.edu.pw.roadmanager.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.edu.pw.roadmanager.backend.domain.Passage;

@Repository
public interface PassageRepository extends JpaRepository<Passage, Long> {
}
