package server.beerfactory.mapper;

import org.mapstruct.Mapper;
import server.beerfactory.dto.BeerDto.BeerDto;
import server.beerfactory.entity.beer.Beer;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BeerMapper {

    BeerDto.Response beerToBeerResponse(Beer beer);

    List<BeerDto.Response> beersToBeerResponseDtos(List<Beer> beers);

    Beer beerRequestToBeer(BeerDto.Request request);
}
