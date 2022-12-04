package server.beerfactory.repository.beer;

import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.entity.user.User;

import java.util.List;

public interface BeerReviewRepository extends JpaRepository<BeerReview, Long> {
    List<BeerReview> findAllByBeer(Beer beer);

    List<BeerReview> findAllByUser(User user);
}
