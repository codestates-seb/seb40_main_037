package server.beerfactory.repository.beer;

import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.beer.BeerReview;

public interface BeerReviewRepository extends JpaRepository<BeerReview, Long> {
}
