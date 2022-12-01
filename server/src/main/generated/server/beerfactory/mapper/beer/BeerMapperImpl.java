package server.beerfactory.mapper.beer;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import server.beerfactory.dto.beer.BeerDto.Main;
import server.beerfactory.dto.beer.BeerDto.Main.MainBuilder;
import server.beerfactory.dto.beer.BeerDto.Request;
import server.beerfactory.dto.beer.BeerDto.Response;
import server.beerfactory.dto.beer.BeerDto.Response.ResponseBuilder;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.beer.Beer.BeerBuilder;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-30T23:30:38+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.4 (Amazon.com Inc.)"
)
@Component
public class BeerMapperImpl implements BeerMapper {

    @Override
    public Response beerToBeerResponse(Beer beer) {
        if ( beer == null ) {
            return null;
        }

        ResponseBuilder response = Response.builder();

        response.id( beer.getId() );
        response.name( beer.getName() );
        response.description( beer.getDescription() );
        response.createdAt( beer.getCreatedAt() );
        response.modifiedAt( beer.getModifiedAt() );
        response.image( beer.getImage() );
        response.alcohol( beer.getAlcohol() );
        response.star( beer.getStar() );
        response.brand( beer.getBrand() );
        response.country( beer.getCountry() );
        response.aroma( beer.getAroma() );
        response.likeCount( beer.getLikeCount() );
        response.disLikeCount( beer.getDisLikeCount() );
        response.soda( beer.getSoda() );
        response.sweet( beer.getSweet() );
        response.afterTaste( beer.getAfterTaste() );
        response.sum( beer.getSum() );
        response.count( beer.getCount() );
        response.bookmark( beer.isBookmark() );

        return response.build();
    }

    @Override
    public List<Response> beersToBeerResponseDtos(List<Beer> beers) {
        if ( beers == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( beers.size() );
        for ( Beer beer : beers ) {
            list.add( beerToBeerResponse( beer ) );
        }

        return list;
    }

    @Override
    public Beer beerRequestToBeer(Request request) {
        if ( request == null ) {
            return null;
        }

        BeerBuilder beer = Beer.builder();

        beer.name( request.getName() );
        beer.image( request.getImage() );
        beer.country( request.getCountry() );
        beer.brand( request.getBrand() );
        beer.description( request.getDescription() );
        beer.bookmark( request.isBookmark() );
        beer.alcohol( request.getAlcohol() );
        beer.aroma( request.getAroma() );
        beer.soda( request.getSoda() );
        beer.sweet( request.getSweet() );
        beer.afterTaste( request.getAfterTaste() );

        return beer.build();
    }

    @Override
    public List<Main> beerMainToBeers(List<Beer> lists) {
        if ( lists == null ) {
            return null;
        }

        List<Main> list = new ArrayList<Main>( lists.size() );
        for ( Beer beer : lists ) {
            list.add( beerToMain( beer ) );
        }

        return list;
    }

    protected Main beerToMain(Beer beer) {
        if ( beer == null ) {
            return null;
        }

        MainBuilder main = Main.builder();

        main.id( beer.getId() );
        main.name( beer.getName() );
        main.description( beer.getDescription() );
        main.createdAt( beer.getCreatedAt() );
        main.modifiedAt( beer.getModifiedAt() );
        main.image( beer.getImage() );
        main.alcohol( beer.getAlcohol() );
        main.star( beer.getStar() );
        main.brand( beer.getBrand() );
        main.country( beer.getCountry() );
        main.aroma( beer.getAroma() );
        main.likeCount( beer.getLikeCount() );
        main.disLikeCount( beer.getDisLikeCount() );
        main.soda( beer.getSoda() );
        main.sweet( beer.getSweet() );
        main.afterTaste( beer.getAfterTaste() );
        main.sum( beer.getSum() );
        main.count( beer.getCount() );

        return main.build();
    }
}
