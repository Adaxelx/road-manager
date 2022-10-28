package pl.edu.pw.roadmanager.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.edu.pw.roadmanager.backend.domain.Road;

public interface RoadRepository extends JpaRepository<Road, Long> {

}
