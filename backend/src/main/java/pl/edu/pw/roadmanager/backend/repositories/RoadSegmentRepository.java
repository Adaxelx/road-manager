package pl.edu.pw.roadmanager.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.edu.pw.roadmanager.backend.domain.RoadSegment;

@Repository
public interface RoadSegmentRepository extends JpaRepository<RoadSegment, Long> {
}
