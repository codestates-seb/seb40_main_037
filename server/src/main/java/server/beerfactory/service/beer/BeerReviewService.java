package server.beerfactory.service.beer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.repository.beer.BeerRepository;
import server.beerfactory.repository.beer.BeerReviewRepository;

import java.lang.module.FindException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BeerReviewService {

    private final BeerReviewRepository beerReviewRepository;
    private final BeerService beerService;
    private final BeerRepository beerRepository;

    @Transactional
    public BeerReview createBeerReview(Long beerId, BeerReview beerReview) {
        Beer beer = beerService.findBeer(beerId);
        beer.setSum(beer.getSum() + beerReview.getScore());
        beer.setCount(beer.getCount() + 1);
        beer.setStar((double)beer.getSum() / beer.getCount());
        beer.setStar(1.0);
        beerReview.setBeer(beer);
        return beerReviewRepository.save(beerReview);
    }

    @Transactional
    public BeerReview updateBeerReview(Long beerReviewId, BeerReview beerReview) {
        Optional<BeerReview> find = beerReviewRepository.findById(beerReviewId);
        BeerReview findBeerReview = find.orElseThrow(() -> new FindException());

        findBeerReview.setContent(beerReview.getContent());
        findBeerReview.setTitle(beerReview.getTitle());
        return findBeerReview;
    }

    @Transactional
    public void deleteBeerReview(Long beerReviewId) {
        Optional<BeerReview> find = beerReviewRepository.findById(beerReviewId);
        BeerReview findBeerReview = find.orElseThrow(() -> new FindException());

        beerReviewRepository.delete(findBeerReview);
    }

    @Transactional(readOnly = true)
    public List<BeerReview> findBeerReviews(Beer beer) {
        return beerReviewRepository.findAllByBeer(beer);
    }
}
