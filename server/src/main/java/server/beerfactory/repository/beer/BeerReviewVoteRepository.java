package server.beerfactory.repository.beer;

import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.entity.beer.BeerReviewVote;
import server.beerfactory.entity.user.User;

import java.util.Optional;

public interface BeerReviewVoteRepository extends JpaRepository<BeerReviewVote, Long> {
    Optional<BeerReviewVote> findByUserAndBeerReview(User user, BeerReview beerReview);

    int countByBeerReviewAndGood(BeerReview beerReview, boolean good);

    int countByBeerReviewAndBad(BeerReview beerReview, boolean bad);
}
