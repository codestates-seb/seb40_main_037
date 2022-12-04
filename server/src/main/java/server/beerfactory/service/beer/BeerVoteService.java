package server.beerfactory.service.beer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.entity.beer.BeerReviewVote;
import server.beerfactory.entity.beer.BeerVote;
import server.beerfactory.entity.user.User;
import server.beerfactory.exception.BusinessLogicException;
import server.beerfactory.exception.ExceptionCode;
import server.beerfactory.repository.beer.BeerRepository;
import server.beerfactory.repository.beer.BeerReviewRepository;
import server.beerfactory.repository.beer.BeerReviewVoteRepository;
import server.beerfactory.repository.beer.BeerVoteRepository;
import server.beerfactory.repository.user.UserRepository;

import javax.transaction.Transactional;
import java.lang.module.FindException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BeerVoteService {
    private final BeerVoteRepository beerVoteRepository;
    private final BeerRepository beerRepository;
    private final UserRepository userRepository;
    @Transactional
    public int beerIsLike(User user, Long beerId, int flag) {
        Beer beer = beerRepository.findById(beerId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.BEER_REVIEW_NOT_FOUND));
        Optional<BeerVote> Vote = beerVoteRepository.findByUserAndBeer(user, beer);
        switch (flag){
            case 1:
                if(Vote.isPresent()){
                    BeerVote vote = Vote.get();
                    if(vote.isGood()){
                        beerVoteRepository.delete(vote);
                    }
                }else{
                    beerVoteRepository.save(BeerVote.builder()
                            .beer(beer)
                            .user(user)
                            .good(true)
                            .build());
                }
                break;
            case 2:
                if(Vote.isPresent()){
                    BeerVote vote = Vote.get();
                    if(vote.isBad()){
                        beerVoteRepository.delete(vote);
                    }
                }else{
                    beerVoteRepository.save(BeerVote.builder()
                            .beer(beer)
                            .user(user)
                            .bad(true)
                            .build());
                }
                break;
            default:
                break;
        }
        int good = beerVoteRepository.countByBeerAndGood(beer, true);
        int bad = beerVoteRepository.countByBeerAndBad(beer, true);
        beer.setLikeCount(good);
        beer.setDisLikeCount(bad);
        return flag == 1 ? beer.getLikeCount() : beer.getDisLikeCount();
    }
}

