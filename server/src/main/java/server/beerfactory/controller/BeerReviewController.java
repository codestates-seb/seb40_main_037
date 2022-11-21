package server.beerfactory.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.beerfactory.dto.BeerDto.BeerReviewDto;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.mapper.BeerReviewMapper;
import server.beerfactory.service.BeerReviewService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequiredArgsConstructor
@Validated
public class BeerReviewController {
    private final BeerReviewService beerReviewService;
    private final BeerReviewMapper beerReviewMapper;

    @PostMapping("/{beer-id}")
    public ResponseEntity<?> postBeerReview(@PathVariable("beer-id") @Positive Long beerId,
                                            @RequestBody @Valid BeerReviewDto.Request request){
        BeerReview beerReview = beerReviewMapper.beerReviewRequestToBeerReview(request);
        BeerReview created = beerReviewService.createBeerReview(beerId, beerReview);
        BeerReviewDto.Response response = beerReviewMapper.beerReviewToBeerReviewResponse(created);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("/beerReviews/{beer_review-id}")
    public ResponseEntity<?> patchBeerReview(@PathVariable("beer_review-id") @Positive Long beerReviewId,
                                             @RequestBody @Valid BeerReviewDto.Request request){
        BeerReview beerReview = beerReviewMapper.beerReviewRequestToBeerReview(request);
        BeerReview updated = beerReviewService.updateBeerReview(beerReviewId, beerReview);
        BeerReviewDto.Response response = beerReviewMapper.beerReviewToBeerReviewResponse(updated);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/beerReviews/{beer_review-id}")
    public ResponseEntity<?> deleteBeerReview(@PathVariable("beer_review-id") @Positive Long beerReviewId){
        beerReviewService.deleteBeerReview(beerReviewId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
