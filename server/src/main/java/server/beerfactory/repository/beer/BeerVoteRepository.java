package server.beerfactory.repository.beer;

import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.beer.BeerVote;

import java.util.List;
import java.util.Optional;

public interface BeerVoteRepository extends JpaRepository<BeerVote, Long> {
    Optional<BeerVote> findByBeer(Beer beer);

    int countByBeerAndGood(Beer beer, boolean b);

    int countByBeerAndBad(Beer beer, boolean b);
}
