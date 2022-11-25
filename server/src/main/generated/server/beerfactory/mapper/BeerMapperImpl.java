package server.beerfactory.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import server.beerfactory.dto.BeerDto.BeerDto;
import server.beerfactory.entity.beer.Beer;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-24T18:13:58+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.17 (Oracle Corporation)"
)
@Component
public class BeerMapperImpl implements BeerMapper {

    @Override
    public BeerDto.Response beerToBeerResponse(Beer beer) {
        if ( beer == null ) {
            return null;
        }

        BeerDto.Response.ResponseBuilder response = BeerDto.Response.builder();

        response.id( beer.getId() );
        response.name( beer.getName() );
        response.description( beer.getDescription() );
        response.createdAt( beer.getCreatedAt() );
        response.modifiedAt( beer.getModifiedAt() );
        response.image( beer.getImage() );
        response.score( beer.getScore() );
        response.alcohol( beer.getAlcohol() );
        response.brand( beer.getBrand() );
        response.country( beer.getCountry() );
        response.sum( beer.getSum() );
        response.count( beer.getCount() );

        return response.build();
    }

    @Override
    public List<BeerDto.Response> beersToBeerResponseDtos(List<Beer> beers) {
        if ( beers == null ) {
            return null;
        }

        List<BeerDto.Response> list = new ArrayList<BeerDto.Response>( beers.size() );
        for ( Beer beer : beers ) {
            list.add( beerToBeerResponse( beer ) );
        }

        return list;
    }

    @Override
    public Beer beerRequestToBeer(BeerDto.Request request) {
        if ( request == null ) {
            return null;
        }

        Beer.BeerBuilder beer = Beer.builder();

        beer.name( request.getName() );
        beer.image( request.getImage() );
        beer.score( request.getScore() );
        beer.beerType( request.getBeerType() );
        beer.country( request.getCountry() );
        beer.brand( request.getBrand() );
        beer.description( request.getDescription() );
        beer.alcohol( request.getAlcohol() );
        beer.aroma( request.getAroma() );
        beer.soda( request.getSoda() );
        beer.sweet( request.getSweet() );
        beer.afterTaste( request.getAfterTaste() );

        return beer.build();
    }
}
