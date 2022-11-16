package server.beerfactory.repository.mix;

import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.mix.Mix;


public interface MixRepository extends JpaRepository<Mix, Long> {
}
