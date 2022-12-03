package server.beerfactory.controller.beer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import server.beerfactory.auth.userdetails.CustomUserDetailsService;
import server.beerfactory.dto.beer.BeerDto;
import server.beerfactory.dto.config.MultiResponseDto;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.beer.BeerBookMark;
import server.beerfactory.entity.user.User;
import server.beerfactory.image.S3Uploader;
import server.beerfactory.mapper.beer.BeerMapper;
import server.beerfactory.mapper.user.UserMapper;
import server.beerfactory.service.beer.BeerService;
import server.beerfactory.service.user.UserService;

import javax.validation.constraints.Positive;
import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Validated
@Slf4j
@RequestMapping("/beers")
public class BeerController {

    private final UserService userService;
    private final BeerService beerService;
    private final BeerMapper beerMapper;
    private final S3Uploader s3Uploader;

    private UserMapper userMapper;

    @PostMapping
    public String postBeer(@RequestPart(value = "requestBody") BeerDto.Request request,
                           @RequestPart(value = "file", required = false) MultipartFile file) throws IOException{
        String email = (String)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User findUser = userService.findUser(email);
        request.setUser(findUser);
        Beer beer = beerMapper.beerRequestToBeer(request);
        if (file != null) {
            String imgPath = s3Uploader.upload(file, "image");
            beer.setImage(imgPath);
        }
        Beer created = beerService.createBeer(beer);
        return String.valueOf(created.getId());
    }

    @PatchMapping("/{beer-id}")
    public String patchBeer(@RequestPart(value = "requestBody") BeerDto.Request request,
                            @PathVariable("beer-id") @Positive Long beerId,
                            @RequestPart(value = "file", required = false) MultipartFile file) throws IOException{
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User findUser = userService.findUser(email);
        request.setUser(findUser);
        Beer beer = beerMapper.beerRequestToBeer(request);
        if (file != null) {
            String imgPath = s3Uploader.upload(file, "image");
            beer.setImage(imgPath);
        }
        Beer updated = beerService.updateBeer(findUser, beerId, beer);
        return String.valueOf(updated.getId());
    }

    @GetMapping("/{beer-id}")
    public ResponseEntity<?> getBeer(@PathVariable("beer-id") @Positive Long beerId){
        Beer beer = beerService.findBeer(beerId);
        BeerDto.Response response = beerMapper.beerToBeerResponse(beer);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getBeers(@PageableDefault(size = 10, sort = "createdAt", direction = Sort.Direction.DESC)Pageable pageable){
        Page<Beer> pageBeers = beerService.findBeers(pageable);
        List<Beer> beers = pageBeers.getContent();
        List<BeerDto.Response> response = beerMapper.beersToBeerResponseDtos(beers);
        return new ResponseEntity<>(new MultiResponseDto<>(response, pageBeers), HttpStatus.OK);
    }

    @DeleteMapping("/{beer-id}")
    public ResponseEntity<?> deleteBeer(@PathVariable("beer-id") @Positive Long beerId){
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User findUser = userService.findUser(email);
        beerService.deleteBeer(findUser, beerId);
        return new ResponseEntity<>(beerId, HttpStatus.NO_CONTENT);
    }

    @PostMapping("/bookmark/{beer-id}")
    public ResponseEntity<?> postBookMark(@PathVariable("beer-id") @Positive Long beerId){
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User findUser = userService.findUser(email);
        log.info("findUser = {}", findUser.getId());
        int result = beerService.postBookMark(findUser, beerId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/bookmark")
    public ResponseEntity<?> bookMarkList() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User findUser = userService.findUser(email);
        log.info("findUser = {}", findUser.getId());
        List<BeerBookMark> bookMarks = beerService.listBookMark(findUser);
        return new ResponseEntity<>(bookMarks, HttpStatus.OK);
    }
}
