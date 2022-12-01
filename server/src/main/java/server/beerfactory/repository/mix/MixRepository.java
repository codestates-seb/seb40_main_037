package server.beerfactory.repository.mix;

import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.mix.Mix;

import java.util.Optional;


public interface MixRepository extends JpaRepository<Mix, Long> {
    @Override
    Optional<Mix> findById(Long mixId);
}
