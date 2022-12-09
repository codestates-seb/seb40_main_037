package server.beerfactory.mapper.beer;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import server.beerfactory.dto.beer.BeerDto;
import server.beerfactory.entity.beer.Beer;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface BeerMapper {

    BeerDto.Response beerToBeerResponse(Beer beer);

    List<BeerDto.Response> beersToBeerResponseDtos(List<Beer> beers);

    Beer beerRequestToBeer(BeerDto.Request request);

    List<BeerDto.Response> beerResponseToBeers(List<Beer> lists);
}

