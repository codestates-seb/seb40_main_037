package server.beerfactory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.beer.Beer;

public interface BeerRepository extends JpaRepository<Beer, Long> {
}
