package server.beerfactory.service.mix;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.beer.BeerVote;
import server.beerfactory.entity.mix.Mix;
import server.beerfactory.entity.mix.MixVote;
import server.beerfactory.entity.user.User;
import server.beerfactory.exception.BusinessLogicException;
import server.beerfactory.exception.ExceptionCode;
import server.beerfactory.repository.mix.MixRepository;
import server.beerfactory.repository.mix.MixVoteRepository;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MixVoteService {
    private final MixRepository mixRepository;
    private final MixVoteRepository mixVoteRepository;


    @javax.transaction.Transactional
    public int mixIsLike(User user, Long mixId, int flag) {
        Mix mix = mixRepository.findById(mixId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.BEER_REVIEW_NOT_FOUND));
        Optional<MixVote> Vote = mixVoteRepository.findByUserAndMix(user, mix);
        switch (flag){
            case 1:
                if(Vote.isPresent()){
                    MixVote vote = Vote.get();
                    if(vote.isGood()){
                        mixVoteRepository.delete(vote);
                    }
                }else{
                    mixVoteRepository.save(MixVote.builder()
                            .mix(mix)
                            .user(user)
                            .good(true)
                            .build());
                }
                break;
            case 2:
                if(Vote.isPresent()){
                    MixVote vote = Vote.get();
                    if(vote.isBad()){
                        mixVoteRepository.delete(vote);
                    }
                }else{
                    mixVoteRepository.save(MixVote.builder()
                            .mix(mix)
                            .user(user)
                            .bad(true)
                            .build());
                }
                break;
            default:
                break;
        }
        int good = mixVoteRepository.countByMixAndGood(mix, true);
        int bad = mixVoteRepository.countByMixAndBad(mix, true);
        mix.setLikeCount(good);
        mix.setDisLikeCount(bad);
        return flag == 1 ? mix.getLikeCount() : mix.getDisLikeCount();
    }
}

