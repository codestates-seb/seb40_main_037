package server.beerfactory.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.entity.beer.BeerReviewVote;
import server.beerfactory.entity.user.User;
import server.beerfactory.service.BeerReviewVoteService;

import javax.servlet.annotation.HttpConstraint;
import javax.servlet.annotation.HttpMethodConstraint;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;

@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("/api")
public class BeerReviewVoteController {

    private final BeerReviewVoteService beerReviewVoteService;

    @PostMapping("/beer_reviews/{beer_review-id}/{flag}")
    public BeerReview postBeerReviewIsLike(@PathVariable("beer_review-id") @Positive Long beerReviewId,
                                           @Min(1) @Max(3) @PathVariable("flag") int flag,
                                           User user){
        return beerReviewVoteService.beerReviewIsLike(beerReviewId, user, flag);
    }
}
