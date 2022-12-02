package server.beerfactory.repository.beer;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.beer.BeerReview;

import java.util.List;

public interface BeerReviewRepository extends JpaRepository<BeerReview, Long> {
    List<BeerReview> findAllByBeer(Beer beer);
}
