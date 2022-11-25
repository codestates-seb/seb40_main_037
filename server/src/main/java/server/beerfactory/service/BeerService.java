package server.beerfactory.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.repository.BeerRepository;

import java.lang.module.FindException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BeerService {

    private final BeerRepository beerRepository;

    @Transactional
    public Beer createBeer(Beer beer) {
        log.info("beer = {}", beer);
        return beerRepository.save(beer);
    }

    @Transactional
    public Beer updateBeer(Long beerId, Beer beer) {
        Optional<Beer> findBeer = beerRepository.findById(beerId);
        Beer find = findBeer.orElseThrow(() -> new FindException());
//        if(!find.getUser().getId().equals(beer.getUser().getId())){
//            throw new FindException();
//        }

        find.setBeerType(beer.getBeerType());
        find.setDescription(beer.getDescription());
        find.setCountry(beer.getCountry());
        find.setBrand(beer.getBrand());
        return find;
    }

    @Transactional(readOnly = true)
    public Beer findBeer(Long beerId) {
        Optional<Beer> findBeer = beerRepository.findById(beerId);
        Beer find = findBeer.orElseThrow(() -> new FindException());
        return find;
    }

    public Page<Beer> findBeers(Pageable pageable) {
        return beerRepository.findAll(pageable);
    }

    public void deleteBeer(Long beerId) {
        Optional<Beer> findBeer = beerRepository.findById(beerId);
        Beer find = findBeer.orElseThrow(() -> new FindException());
        beerRepository.delete(find);
    }
}
