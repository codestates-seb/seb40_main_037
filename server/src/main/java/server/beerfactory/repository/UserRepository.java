package server.beerfactory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.user.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
