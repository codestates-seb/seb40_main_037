package server.beerfactory.controller.beer;

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
import server.beerfactory.dto.config.MultiResponseDto;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.mapper.beer.BeerMapper;
import server.beerfactory.service.beer.BeerService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Validated
@Slf4j
@RequestMapping("/beers")
public class BeerController {

    private final BeerService beerService;
    private final BeerMapper beerMapper;

    @PostMapping
    public String postBeer(@RequestBody @Valid BeerDto.Request request){
        Beer beer = beerMapper.beerRequestToBeer(request);
        Beer created = beerService.createBeer(beer);
        return String.valueOf(created.getId());
    }

    @PatchMapping("/{beer-id}")
    public String patchBeer(@PathVariable("beer-id") @Positive Long beerId,
                            @RequestBody @Valid BeerDto.Request request){
        Beer beer = beerMapper.beerRequestToBeer(request);
        Beer updated = beerService.updateBeer(beerId, beer);
        return String.valueOf(updated.getId());
    }

    @GetMapping("/{beer-id}")
    public ResponseEntity<?> getBeer(@PathVariable("beer-id") @Positive Long beerId){
        Beer beer = beerService.findBeer(beerId);
        BeerDto.Response response = beerMapper.beerToBeerResponse(beer);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getBeers(@PageableDefault(size = 10, sort = "createdAt", direction = Sort.Direction.DESC)Pageable pageable){
        Page<Beer> pageBeers = beerService.findBeers(pageable);
        List<Beer> beers = pageBeers.getContent();
        List<BeerDto.Response> response = beerMapper.beersToBeerResponseDtos(beers);
        return new ResponseEntity<>(new MultiResponseDto<>(response, pageBeers), HttpStatus.OK);
    }

    @DeleteMapping("/{beer-id}")
    public ResponseEntity<?> deleteBeer(@PathVariable("beer-id") @Positive Long beerId){
        beerService.deleteBeer(beerId);
        return new ResponseEntity<>(beerId, HttpStatus.NO_CONTENT);
    }
}
