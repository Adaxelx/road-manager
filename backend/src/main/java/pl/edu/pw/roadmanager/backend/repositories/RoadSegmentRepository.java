package pl.edu.pw.roadmanager.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.edu.pw.roadmanager.backend.domain.RoadSegment;

import java.util.List;

@Repository
public interface RoadSegmentRepository extends JpaRepository<RoadSegment, Long> {

    List<RoadSegment> findAllByTollId(Long id);
}
