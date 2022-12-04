package server.beerfactory.repository.beer;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.dto.beer.BeerDto;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.user.User;

import java.util.List;
import java.util.Optional;

public interface BeerRepository extends JpaRepository<Beer, Long> {
    Page<Beer> findByNameContaining(String search, Pageable pageable);

    Page<Beer> findByAromaContaining(String search, Pageable pageable);

    List<Beer> findTop10By(Sort sort);
}
