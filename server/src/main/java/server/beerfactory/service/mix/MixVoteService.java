package server.beerfactory.service.mix;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
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


    public int mixVote(Long mixId, int flag, User user) {
        Mix mix = mixRepository.findById(mixId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MIX_NOT_FOUND));

        Optional<MixVote> optionalVote = mixVoteRepository.findByUserAndMix(user, mix);

        switch (flag) {
            case 1:
                if (optionalVote.isPresent()) {
                    MixVote mixVote = optionalVote.get();
                    if (!mixVote.isGood()) {
                        mixVote.setGood(true);
                    }
                } else {
                    mixVoteRepository.save(
                            MixVote.builder().user(user).mix(mix).good(true).build());
                }
                break;
            case 2:
                if (optionalVote.isPresent()) {
                    MixVote mixVote = optionalVote.get();
                    if (mixVote.isBad()) {
                        mixVote.setBad(true);
                    }
                } else {
                    mixVoteRepository.save(
                            MixVote.builder().user(user).mix(mix).bad(true).build());
                }
                break;
            case 3:
                optionalVote.ifPresent(mixVoteRepository::delete);
                break;
            default:
                break;
        }
        int good = mixVoteRepository.countByMixAndGood(mix, true);
        int bad = mixVoteRepository.countByMixAndBad(mix, true);
        mix.setLikeCount(good);
        mix.setDisLikeCount(bad);
        return mix.getLikeCount();
    }
}

