package server.beerfactory.controller.beer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.beerfactory.auth.userdetails.CustomUserDetailsService;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.entity.user.User;
import server.beerfactory.service.beer.BeerReviewVoteService;
import server.beerfactory.service.user.UserService;

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
    private final UserService userService;
    @PostMapping("/{beer_review-id}/{flag}")
    public int postBeerReviewIsLike(@PathVariable("beer_review-id") @Positive Long beerReviewId,
                                    @Min(1) @Max(2) @PathVariable("flag") int flag){
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userService.findUser(email);
        return beerReviewVoteService.beerReviewIsLike(user, beerReviewId, flag);
    }
}
