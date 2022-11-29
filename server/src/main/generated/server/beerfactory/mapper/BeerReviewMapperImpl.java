package server.beerfactory.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import server.beerfactory.dto.beer.BeerReviewDto;
import server.beerfactory.entity.beer.BeerReview;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-24T18:13:58+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.17 (Oracle Corporation)"
)
@Component
public class BeerReviewMapperImpl implements BeerReviewMapper {

    @Override
    public BeerReview beerReviewRequestToBeerReview(BeerReviewDto.Request request) {
        if ( request == null ) {
            return null;
        }

        BeerReview.BeerReviewBuilder beerReview = BeerReview.builder();

        beerReview.content( request.getContent() );
        beerReview.score( request.getScore() );
        beerReview.user( request.getUser() );

        return beerReview.build();
    }

    @Override
    public BeerReviewDto.Response beerReviewToBeerReviewResponse(BeerReview created) {
        if ( created == null ) {
            return null;
        }

        BeerReviewDto.Response.ResponseBuilder response = BeerReviewDto.Response.builder();

        response.id( created.getId() );
        response.content( created.getContent() );
        response.createdAt( created.getCreatedAt() );
        response.modifiedAt( created.getModifiedAt() );
        response.user( created.getUser() );

        return response.build();
    }

    @Override
    public List<BeerReviewDto.Response> beerReviewToBeerReviewResponseDtos(List<BeerReview> reviews) {
        if ( reviews == null ) {
            return null;
        }

        List<BeerReviewDto.Response> list = new ArrayList<BeerReviewDto.Response>( reviews.size() );
        for ( BeerReview beerReview : reviews ) {
            list.add( beerReviewToBeerReviewResponse( beerReview ) );
        }

        return list;
    }
}
