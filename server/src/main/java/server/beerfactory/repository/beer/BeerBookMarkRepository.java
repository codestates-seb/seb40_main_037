package server.beerfactory.repository.beer;

import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.beer.BeerBookMark;
import server.beerfactory.entity.user.User;

import java.util.List;
import java.util.Optional;

public interface BeerBookMarkRepository extends JpaRepository<BeerBookMark, Long> {
    Optional<BeerBookMark> findByUserAndBeer(User user, Beer findBeer);

    List<BeerBookMark> findAllByUserAndOk(User user, boolean b);
}
