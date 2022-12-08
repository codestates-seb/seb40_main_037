package server.beerfactory.controller.beer;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import server.beerfactory.dto.beer.BeerReviewDto;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.entity.user.User;
import server.beerfactory.image.S3Uploader;
import server.beerfactory.mapper.beer.BeerReviewMapper;
import server.beerfactory.service.beer.BeerReviewService;
import server.beerfactory.service.beer.BeerService;
import server.beerfactory.service.user.UserService;

import javax.validation.constraints.Positive;
import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("/beer/reviews")
public class BeerReviewController {
    private final BeerReviewService beerReviewService;
    private final BeerReviewMapper beerReviewMapper;
    private final BeerService beerService;
    private final UserService userService;
    private final S3Uploader s3Uploader;
    private final UserMapper userMapper;
    @PostMapping("/{beer-id}")
    public ResponseEntity<?> postBeerReview(@PathVariable("beer-id") @Positive Long beerId,
                                            @RequestPart(value = "requestBody") BeerReviewDto.Request request,
                                            @RequestPart(value = "file", required = false) MultipartFile file) throws IOException {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User findUser = userService.findUser(email);
        BeerReview beerReview = beerReviewMapper.beerReviewRequestToBeerReview(request);
        if (file != null) {
            String imgPath = s3Uploader.upload(file, "image");
            beerReview.setImage(imgPath);
        }
        BeerReview created = beerReviewService.createBeerReview(findUser.getId(), beerId, beerReview);
        BeerReviewDto.Response response = beerReviewMapper.beerReviewToBeerReviewResponse(created);
        response.setUserId(findUser.getId());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("/{beer_review-id}")
    public ResponseEntity<?> patchBeerReview(@PathVariable("beer_review-id") @Positive Long beerReviewId,
                                             @RequestPart(value = "requestBody") BeerReviewDto.Request request,
                                             @RequestPart(value = "file", required = false) MultipartFile file) throws IOException{
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User findUser = userService.findUser(email);
        BeerReview beerReview = beerReviewMapper.beerReviewRequestToBeerReview(request);
        if (file != null) {
            String imgPath = s3Uploader.upload(file, "image");
            beerReview.setImage(imgPath);
        }
        BeerReview updated = beerReviewService.updateBeerReview(findUser, beerReviewId, beerReview);
        BeerReviewDto.Response response = beerReviewMapper.beerReviewToBeerReviewResponse(updated);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{beer_review-id}")
    public ResponseEntity<?> deleteBeerReview(@PathVariable("beer_review-id") @Positive Long beerReviewId){
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User findUser = userService.findUser(email);
        beerReviewService.deleteBeerReview(findUser, beerReviewId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("{beer-id}")
    public ResponseEntity<?> getBeerReviews(@PathVariable("beer-id") @Positive Long beerId) {
        Beer beer = beerService.findBeer(beerId);
        List<BeerReview> beerReviews = beerReviewService.findBeerReviews(beer);
        List<BeerReviewDto.Response> responses = beerReviewMapper.beerReviewToBeerReviewResponseDtos(beerReviews);
        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

}
