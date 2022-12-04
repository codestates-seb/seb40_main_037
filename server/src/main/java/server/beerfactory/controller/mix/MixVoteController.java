package server.beerfactory.controller.mix;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.beerfactory.entity.user.User;
import server.beerfactory.service.mix.MixVoteService;
import server.beerfactory.service.user.UserService;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;

@RestController
@RequiredArgsConstructor
@RequestMapping("/mixes")
@Validated
public class MixVoteController {
    private final MixVoteService mixVoteService;
    private final UserService userService;

    @PostMapping("/{mix-id}/{flag}")
    public int postMixVote(@PathVariable("mix-id") @Positive Long id,
                           @Min(1) @Max(2) @PathVariable("flag") int flag) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userService.findUser(email);
        return mixVoteService.mixIsLike(user, id, flag);
    }

}
