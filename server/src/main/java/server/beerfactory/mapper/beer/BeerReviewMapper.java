package server.beerfactory.mapper.beer;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import server.beerfactory.dto.beer.BeerReviewDto;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.beer.BeerReview;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface BeerReviewMapper {
    BeerReview beerReviewRequestToBeerReview(BeerReviewDto.Request request);

    BeerReviewDto.Response beerReviewToBeerReviewResponse(BeerReview created);

    List<BeerReviewDto.Response> beerReviewToBeerReviewResponseDtos(List<BeerReview> reviews);
}
