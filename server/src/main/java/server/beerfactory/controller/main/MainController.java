package server.beerfactory.controller.main;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.beerfactory.dto.beer.BeerDto;
import server.beerfactory.dto.config.MultiResponseDto;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.mapper.beer.BeerMapper;
import server.beerfactory.repository.beer.BeerRepository;
import server.beerfactory.repository.mix.MixRepository;
import server.beerfactory.service.beer.BeerService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Validated
public class MainController {
    private final BeerMapper beerMapper;
    private final BeerService beerService;

    @GetMapping("/mainpage")
    public ResponseEntity<?> load(){
        List<BeerDto.Main> lists = beerService.listUp();
        return new ResponseEntity<>(lists, HttpStatus.OK);
    }

    @PostMapping("/search")
    public ResponseEntity<?> BeerSearch(String search, @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC)Pageable pageable) {
        Page<Beer> searchList = beerService.searchBeers(search, pageable);
        Page<Beer> searchAromaList = beerService.searchAromaBeers(search, pageable);
        List<Beer> beers = searchList.getContent();
        List<Beer> beerList = searchAromaList.getContent();
        List<BeerDto.Response> response = beerMapper.beersToBeerResponseDtos(beers);
        List<BeerDto.Response> response2 = beerMapper.beersToBeerResponseDtos(beerList);
        response.addAll(response2);
        return new ResponseEntity<>(new MultiResponseDto<>(response, searchList), HttpStatus.OK);
    }
}

