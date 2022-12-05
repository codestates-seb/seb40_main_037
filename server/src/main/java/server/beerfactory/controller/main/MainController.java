package server.beerfactory.controller.main;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.beerfactory.dto.beer.BeerDto;
import server.beerfactory.dto.config.MainResponseDto;
import server.beerfactory.dto.mix.MixDto;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.mix.Mix;
import server.beerfactory.mapper.beer.BeerMapper;
import server.beerfactory.mapper.mix.MixMapper;
import server.beerfactory.mapper.user.UserMapper;
import server.beerfactory.service.beer.BeerService;
import server.beerfactory.service.mix.MixService;
import server.beerfactory.service.user.UserService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Validated
@Slf4j
public class MainController {
    private final BeerMapper beerMapper;
    private final BeerService beerService;
    private final MixMapper mixMapper;
    private final MixService mixService;
    @GetMapping("/mainpage")
    public MainResponseDto<?> load(){
        List<BeerDto.Main> lists = beerService.listUp();
        List<Mix> mixes = mixService.mainMixes();
        List<MixDto.Response> responses = mixMapper.mixesToMixResponseDto(mixes);
        System.out.println(responses);
        return new MainResponseDto<>(lists,responses, HttpStatus.OK);
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
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}

