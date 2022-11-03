package pl.edu.pw.roadmanager.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.edu.pw.roadmanager.backend.domain.Junction;

public interface JunctionRepository extends JpaRepository<Junction, Long> {

}
