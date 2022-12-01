package server.beerfactory.service.beer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.beerfactory.dto.beer.BeerDto;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.mapper.beer.BeerMapper;
import server.beerfactory.repository.beer.BeerRepository;
import server.beerfactory.repository.beer.BeerVoteRepository;

import java.lang.module.FindException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BeerService {

    private final BeerMapper beerMapper;
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

    @Transactional(readOnly = true)
    public Page<Beer> findBeers(Pageable pageable) {
        return beerRepository.findAll(pageable);
    }

    @Transactional
    public void deleteBeer(Long beerId) {
        Optional<Beer> findBeer = beerRepository.findById(beerId);
        Beer find = findBeer.orElseThrow(() -> new FindException());
        beerRepository.delete(find);
    }

    @Transactional
    public List<BeerDto.Main> listUp() {
        Sort sort = Sort.by(
                Sort.Order.desc("likeCount"),
                Sort.Order.asc("disLikeCount"),
                Sort.Order.asc("createdAt")
        );
        List<BeerDto.Main> beerList = beerMapper.beerMainToBeers(beerRepository.findAll());
        if(beerList.size() == 0) throw new FindException();
        return beerMapper.beerMainToBeers(beerRepository.findTop10By(sort));
    }

    @Transactional(readOnly = true)
    public Page<Beer> searchBeers(String search, Pageable pageable) {
        return beerRepository.findByNameContaining(search, pageable);
    }

    @Transactional
    public Page<Beer> searchAromaBeers(String search, Pageable pageable) {
        return beerRepository.findByAromaContaining(search, pageable);
    }
}

