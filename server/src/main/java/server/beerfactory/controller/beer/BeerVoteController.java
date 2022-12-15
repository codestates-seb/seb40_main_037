package server.beerfactory.controller.beer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.beerfactory.entity.user.User;
import server.beerfactory.service.beer.BeerVoteService;
import server.beerfactory.service.user.UserService;

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
    private final UserService userService;

    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/{beer-id}/{flag}")
    public int postBeerIsLike(@PathVariable("beer-id") @Positive Long beerId,
                                    @Min(1) @Max(2) @PathVariable("flag") int flag){
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User findUser = userService.findUser(email);
        return beerVoteService.beerIsLike(findUser, beerId, flag);
    }
}

