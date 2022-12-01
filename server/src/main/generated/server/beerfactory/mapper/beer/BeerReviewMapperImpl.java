package server.beerfactory.mapper.beer;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import server.beerfactory.dto.beer.BeerReviewDto.Request;
import server.beerfactory.dto.beer.BeerReviewDto.Response;
import server.beerfactory.dto.beer.BeerReviewDto.Response.ResponseBuilder;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.entity.beer.BeerReview.BeerReviewBuilder;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-30T00:38:26+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.4 (Amazon.com Inc.)"
)
@Component
public class BeerReviewMapperImpl implements BeerReviewMapper {

    @Override
    public BeerReview beerReviewRequestToBeerReview(Request request) {
        if ( request == null ) {
            return null;
        }

        BeerReviewBuilder beerReview = BeerReview.builder();

        beerReview.title( request.getTitle() );
        beerReview.image( request.getImage() );
        beerReview.content( request.getContent() );
        beerReview.score( request.getScore() );

        return beerReview.build();
    }

    @Override
    public Response beerReviewToBeerReviewResponse(BeerReview created) {
        if ( created == null ) {
            return null;
        }

        ResponseBuilder response = Response.builder();

        response.id( created.getId() );
        response.content( created.getContent() );
        response.score( created.getScore() );
        response.likeCount( created.getLikeCount() );
        response.disLikeCount( created.getDisLikeCount() );
        response.createdAt( created.getCreatedAt() );
        response.modifiedAt( created.getModifiedAt() );

        return response.build();
    }

    @Override
    public List<Response> beerReviewToBeerReviewResponseDtos(List<BeerReview> reviews) {
        if ( reviews == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( reviews.size() );
        for ( BeerReview beerReview : reviews ) {
            list.add( beerReviewToBeerReviewResponse( beerReview ) );
        }

        return list;
    }
}
