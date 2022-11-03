package pl.edu.pw.roadmanager.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.pw.roadmanager.backend.domain.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
}
