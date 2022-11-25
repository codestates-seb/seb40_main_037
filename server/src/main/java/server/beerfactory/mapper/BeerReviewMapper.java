package server.beerfactory.mapper;

import org.mapstruct.Mapper;
import server.beerfactory.dto.BeerDto.BeerReviewDto;
import server.beerfactory.entity.beer.BeerReview;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BeerReviewMapper {
    BeerReview beerReviewRequestToBeerReview(BeerReviewDto.Request request);

    BeerReviewDto.Response beerReviewToBeerReviewResponse(BeerReview created);

    List<BeerReviewDto.Response> beerReviewToBeerReviewResponseDtos(List<BeerReview> reviews);
}
