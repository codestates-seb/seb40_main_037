package server.beerfactory.dto.config;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import server.beerfactory.dto.beer.BeerDto;
import server.beerfactory.dto.mix.MixDto;

import java.util.List;

@Getter
public class MainResponseDto<T> {
    private List<T> beerData;
    private List<T> mixData;

    public MainResponseDto(List<BeerDto.Main> lists, List<MixDto.Response> responses, HttpStatus ok) {
        this.beerData = (List<T>) lists;
        this.mixData = (List<T>) responses;
    }
}
