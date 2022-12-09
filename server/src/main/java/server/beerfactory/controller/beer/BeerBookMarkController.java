package server.beerfactory.controller.beer;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.beerfactory.dto.beer.BeerBookMarkDto;
import server.beerfactory.entity.user.User;
import server.beerfactory.service.beer.BeerService;
import server.beerfactory.service.user.UserService;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
@RequiredArgsConstructor
@RequestMapping("/bookmark")
public class BeerBookMarkController {

    private final UserService userService;
    private final BeerService beerService;

    @PostMapping("/{beer-id}")
    public ResponseEntity<?> postBookMark(@PathVariable("beer-id") @Positive Long beerId){
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User findUser = userService.findUser(email);
        int result = beerService.postBookMark(findUser, beerId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> bookMarkList() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User findUser = userService.findUser(email);
        List<BeerBookMarkDto.Dto> bookMarks = beerService.listBookMark(findUser);
        return new ResponseEntity<>(bookMarks, HttpStatus.OK);
    }
}
