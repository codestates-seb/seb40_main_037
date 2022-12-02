package server.beerfactory.repository.beer;

import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.beer.BeerVote;
import server.beerfactory.entity.user.User;

import java.util.List;
import java.util.Optional;

public interface BeerVoteRepository extends JpaRepository<BeerVote, Long> {
    int countByBeerAndGood(Beer beer, boolean b);

    int countByBeerAndBad(Beer beer, boolean b);

    Optional<BeerVote> findByUserAndBeer(User user, Beer beer);
}

