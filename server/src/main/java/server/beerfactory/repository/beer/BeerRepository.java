package server.beerfactory.repository.beer;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.beer.Beer;

import java.util.List;

public interface BeerRepository extends JpaRepository<Beer, Long> {
    Page<Beer> findByNameContaining(String search, Pageable pageable);

    Page<Beer> findByAromaContaining(String search, Pageable pageable);

    List<Beer> findTop10By(Sort sort);
}
