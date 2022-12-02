package server.beerfactory.service.beer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.beerfactory.dto.beer.BeerDto;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.user.User;
import server.beerfactory.exception.BusinessLogicException;
import server.beerfactory.exception.ExceptionCode;
import server.beerfactory.mapper.beer.BeerMapper;
import server.beerfactory.repository.beer.BeerRepository;
import server.beerfactory.repository.beer.BeerVoteRepository;
import server.beerfactory.repository.user.UserRepository;

import java.lang.module.FindException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BeerService {

    private final BeerMapper beerMapper;
    private final BeerRepository beerRepository;
    private final UserRepository userRepository;
    @Transactional
    public Beer createBeer(Beer beer) {
        return beerRepository.save(beer);
    }

    @Transactional
    public Beer updateBeer(User user, Long beerId, Beer beer) {
        Optional<Beer> findBeer = beerRepository.findById(beerId);
        Beer find = findBeer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.BEER_NOT_FOUND));
        Optional<User> findUser = userRepository.findById(beerId);
        User user2 = findUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        if(!Objects.equals(user.getId(), user2.getId())){
            throw new BusinessLogicException(ExceptionCode.USER_DIFFERENT);
        }
        find.setImage(beer.getImage());
        find.setSum(beer.getSum());
        find.setBeerType(beer.getBeerType());
        find.setDescription(beer.getDescription());
        find.setCountry(beer.getCountry());
        find.setBrand(beer.getBrand());
        return find;
    }

    @Transactional(readOnly = true)
    public Beer findBeer(Long beerId) {
        Optional<Beer> findBeer = beerRepository.findById(beerId);
        Beer find = findBeer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.BEER_NOT_FOUND));
        return find;
    }

    @Transactional(readOnly = true)
    public Page<Beer> findBeers(Pageable pageable) {
        return beerRepository.findAll(pageable);
    }

    @Transactional
    public void deleteBeer(User user, Long beerId) {
        Optional<Beer> findBeer = beerRepository.findById(beerId);
        Beer find = findBeer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.BEER_NOT_FOUND));
        Optional<User> findUser = userRepository.findById(beerId);
        User user2 = findUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        if(!Objects.equals(user.getId(), user2.getId())){
            throw new BusinessLogicException(ExceptionCode.USER_DIFFERENT);
        }
        beerRepository.delete(find);
    }

    @Transactional(readOnly = true)
    public List<BeerDto.Main> listUp() {
        Sort sort = Sort.by(
                Sort.Order.desc("likeCount"),
                Sort.Order.asc("disLikeCount"),
                Sort.Order.asc("createdAt")
        );
        List<BeerDto.Main> beerList = beerMapper.beerMainToBeers(beerRepository.findAll());
        if(beerList.size() == 0) throw new FindException();
        return beerMapper.beerMainToBeers(beerRepository.findTop10By(sort));
    }

    @Transactional(readOnly = true)
    public Page<Beer> searchBeers(String search, Pageable pageable) {
        return beerRepository.findByNameContaining(search, pageable);
    }

    @Transactional(readOnly = true)
    public Page<Beer> searchAromaBeers(String search, Pageable pageable) {
        return beerRepository.findByAromaContaining(search, pageable);
    }

    @Transactional
    public void postBookMark(Long beerId) {
        Optional<Beer> find = beerRepository.findById(beerId);
        Beer beer = find.orElseThrow(() -> new FindException());
//        boolean isOk = beerRepository.findByUserAndBookMark();
//        if(isOk){
//            beerRepository.delete(beer);
//        }else{
//            beer.setBookmark(true);
//        }
    }
}

