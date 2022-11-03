package pl.edu.pw.roadmanager.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.pw.roadmanager.backend.domain.RoadSegment;

public interface RoadSegmentRepository extends JpaRepository<RoadSegment, Long> {
}
