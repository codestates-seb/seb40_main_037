package server.beerfactory.controller.beer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.entity.user.User;
import server.beerfactory.service.beer.BeerReviewVoteService;
import server.beerfactory.service.beer.BeerVoteService;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;

@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("/beers")
@Slf4j
public class BeerVoteController {

    private final BeerVoteService beerVoteService;

//    @PostMapping("/beer_reviews/{beer_review-id}/{flag}")
//    public BeerReview postBeerReviewIsLike(@PathVariable("beer_review-id") @Positive Long beerReviewId,
//                                           @Min(1) @Max(3) @PathVariable("flag") int flag,
//                                           User user){
//        return beerReviewVoteService.beerReviewIsLike(beerReviewId, user, flag);
//    }

    @PostMapping("/{beer-id}/{flag}")
    public int postBeerIsLike(@PathVariable("beer-id") @Positive Long beerId,
                                    @Min(1) @Max(2) @PathVariable("flag") int flag){
        return beerVoteService.beerIsLike(beerId, flag);
    }
}
