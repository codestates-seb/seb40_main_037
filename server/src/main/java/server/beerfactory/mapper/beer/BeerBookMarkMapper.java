package server.beerfactory.mapper.beer;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import server.beerfactory.dto.beer.BeerBookMarkDto;
import server.beerfactory.entity.beer.BeerBookMark;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface BeerBookMarkMapper {
    BeerBookMarkDto.Dto beerBookMarkToDtos(BeerBookMark beerBookMark);
}
