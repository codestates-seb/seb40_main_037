package server.beerfactory.controller.beer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.entity.user.User;
import server.beerfactory.service.beer.BeerReviewVoteService;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;

@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("/beerReviews")
@Slf4j
public class BeerReviewVoteController {

    private final BeerReviewVoteService beerReviewVoteService;

//    @PostMapping("/beer_reviews/{beer_review-id}/{flag}")
//    public BeerReview postBeerReviewIsLike(@PathVariable("beer_review-id") @Positive Long beerReviewId,
//                                           @Min(1) @Max(3) @PathVariable("flag") int flag,
//                                           User user){
//        return beerReviewVoteService.beerReviewIsLike(beerReviewId, user, flag);
//    }

    @PostMapping("/{beer_review-id}/{flag}")
    public int postBeerReviewIsLike(@PathVariable("beer_review-id") @Positive Long beerReviewId,
                                           @Min(1) @Max(2) @PathVariable("flag") int flag){
        log.info("beerReviewId = {}", beerReviewId);
        log.info("flag = {}", flag);
        return beerReviewVoteService.beerReviewIsLike(beerReviewId, flag);
    }
}
