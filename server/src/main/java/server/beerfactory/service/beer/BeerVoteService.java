package server.beerfactory.service.beer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.entity.beer.BeerReviewVote;
import server.beerfactory.entity.beer.BeerVote;
import server.beerfactory.entity.user.User;
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

//    @Transactional
//    public BeerReview beerReviewIsLike(Long beerReviewId, User user, int flag) {
//        BeerReview beerReview = beerReviewRepository.findById(beerReviewId)
//                .orElseThrow(() -> new FindException());
//        Optional<BeerReviewVote> reviewVote = beerReviewVoteRepository.findByUserAndBeerReview(user, beerReview);
//        switch (flag){
//            case 1:
//                if(reviewVote.isPresent()){
//                    BeerReviewVote vote = reviewVote.get();
//                    if(!vote.isGood()){
//                        vote.setGood(true);
//                    }
//                }else{
//                    beerReviewVoteRepository.save(BeerReviewVote.builder()
//                            .beerReview(beerReview)
//                            .good(true)
//                            .build());
//                }
//                break;
//            case 2:
//                if(reviewVote.isPresent()){
//                    BeerReviewVote vote = reviewVote.get();
//                    if(!vote.isBad()){
//                        vote.setBad(true);
//                    }
//                }else{
//                    beerReviewVoteRepository.save(BeerReviewVote.builder()
//                            .beerReview(beerReview)
//                            .bad(true)
//                            .build());
//                }
//                break;
//            case 3:
//                reviewVote.ifPresent(beerReviewVoteRepository::delete);
//                break;
//            default:
//                break;
//        }
//        int good = beerReviewVoteRepository.countByBeerReviewAndGood(beerReview, true);
//        int bad = beerReviewVoteRepository.countByBeerReviewAndBad(beerReview, true);
//        beerReview.setLikeCount(good);
//        beerReview.setLikeCount(bad);
//        return beerReviewRepository.save(beerReview);
//    }

    @Transactional
    public int beerIsLike(Long beerId, int flag) {
        Beer beer = beerRepository.findById(beerId)
                .orElseThrow(() -> new FindException());
        Optional<BeerVote> Vote = beerVoteRepository.findByBeer(beer);
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
        beerRepository.save(beer);
        return flag == 1 ? beer.getLikeCount() : beer.getDisLikeCount();
    }
}
