package pl.edu.pw.roadmanager.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.edu.pw.roadmanager.backend.domain.AppUser;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {

}
