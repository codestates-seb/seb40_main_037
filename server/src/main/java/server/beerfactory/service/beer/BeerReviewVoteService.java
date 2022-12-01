package server.beerfactory.service.beer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.entity.beer.BeerReviewVote;
import server.beerfactory.entity.user.User;
import server.beerfactory.repository.beer.BeerRepository;
import server.beerfactory.repository.beer.BeerReviewRepository;
import server.beerfactory.repository.beer.BeerReviewVoteRepository;
import server.beerfactory.repository.user.UserRepository;

import javax.transaction.Transactional;
import java.lang.module.FindException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BeerReviewVoteService {

    private final BeerReviewRepository beerReviewRepository;
    private final BeerReviewVoteRepository beerReviewVoteRepository;
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
    public int beerReviewIsLike(Long beerReviewId, int flag) {
        BeerReview beerReview = beerReviewRepository.findById(beerReviewId)
                .orElseThrow(() -> new FindException());
        Optional<BeerReviewVote> reviewVote = beerReviewVoteRepository.findByBeerReview(beerReview);
        switch (flag){
            case 1:
                if(reviewVote.isPresent()){
                    BeerReviewVote vote = reviewVote.get();
                    if(vote.isGood()){
                        beerReviewVoteRepository.delete(vote);
                    }
                }else{
                    beerReviewVoteRepository.save(BeerReviewVote.builder()
                            .beerReview(beerReview)
                            .good(true)
                            .build());
                }
                break;
            case 2:
                if(reviewVote.isPresent()){
                    BeerReviewVote vote = reviewVote.get();
                    if(vote.isBad()){
                        beerReviewVoteRepository.delete(vote);
                    }
                }else{
                    beerReviewVoteRepository.save(BeerReviewVote.builder()
                            .beerReview(beerReview)
                            .bad(true)
                            .build());
                }
                break;
            default:
                break;
        }
        int good = beerReviewVoteRepository.countByBeerReviewAndGood(beerReview, true);
        int bad = beerReviewVoteRepository.countByBeerReviewAndBad(beerReview, true);
        beerReview.setLikeCount(good);
        beerReview.setDisLikeCount(bad);
        return flag == 1 ? beerReview.getLikeCount() : beerReview.getDisLikeCount();
    }
}
