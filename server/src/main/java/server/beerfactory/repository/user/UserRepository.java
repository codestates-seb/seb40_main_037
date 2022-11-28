package server.beerfactory.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.user.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
