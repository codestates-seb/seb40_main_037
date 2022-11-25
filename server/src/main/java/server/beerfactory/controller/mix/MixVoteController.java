package server.beerfactory.controller.mix;

import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.beerfactory.entity.user.User;
import server.beerfactory.service.mix.MixVoteService;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@RestController
@RequiredArgsConstructor
@RequestMapping("/mixes")
@Validated
public class MixVoteController {
    private final MixVoteService mixVoteService;

    @PostMapping("/like")
    public int postMixVote(@PathVariable("mix-id") Long id,
                           @Min(1) @Max(3) @PathVariable("num") int num,
                           User user) {
        return mixVoteService.mixVote(id, num, user);
    }

}
