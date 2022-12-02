package server.beerfactory.service.beer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.entity.user.User;
import server.beerfactory.exception.BusinessLogicException;
import server.beerfactory.exception.ExceptionCode;
import server.beerfactory.repository.beer.BeerRepository;
import server.beerfactory.repository.beer.BeerReviewRepository;
import server.beerfactory.repository.user.UserRepository;

import java.lang.module.FindException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BeerReviewService {

    private final BeerReviewRepository beerReviewRepository;
    private final BeerService beerService;
    private final UserRepository userRepository;

    @Transactional
    public BeerReview createBeerReview(Long beerId, BeerReview beerReview) {
        Beer beer = beerService.findBeer(beerId);
        beer.setSum(beer.getSum() + beerReview.getScore());
        beer.setCount(beer.getCount() + 1);
        beer.setStar((double)beer.getSum() / beer.getCount());
        beerReview.setBeer(beer);
        return beerReviewRepository.save(beerReview);
    }

    @Transactional
    public BeerReview updateBeerReview(User user, Long beerReviewId, BeerReview beerReview) {
        Optional<BeerReview> find = beerReviewRepository.findById(beerReviewId);
        BeerReview findBeerReview = find.orElseThrow(() -> new BusinessLogicException(ExceptionCode.BEER_REVIEW_NOT_FOUND));
        Optional<User> findUser = userRepository.findById(beerReviewId);
        User user2 = findUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        if(!Objects.equals(user.getId(), user2.getId())){
            throw new BusinessLogicException(ExceptionCode.USER_DIFFERENT);
        }
        findBeerReview.setContent(beerReview.getContent());
        findBeerReview.setTitle(beerReview.getTitle());
        return findBeerReview;
    }

    @Transactional
    public void deleteBeerReview(User user, Long beerReviewId) {
        Optional<BeerReview> find = beerReviewRepository.findById(beerReviewId);
        BeerReview findBeerReview = find.orElseThrow(() -> new BusinessLogicException(ExceptionCode.BEER_REVIEW_NOT_FOUND));
        Optional<User> findUser = userRepository.findById(beerReviewId);
        User user2 = findUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        if(!Objects.equals(user.getId(), user2.getId())){
            throw new BusinessLogicException(ExceptionCode.USER_DIFFERENT);
        }
        beerReviewRepository.delete(findBeerReview);
    }

    @Transactional(readOnly = true)
    public List<BeerReview> findBeerReviews(Beer beer) {
        return beerReviewRepository.findAllByBeer(beer);
    }
}
