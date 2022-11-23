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


    public int mixVote(Long mixId, int num, User user) {
        Mix mix = mixRepository.findById(mixId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MIX_NOT_FOUND));

        Optional<MixVote> optionalVote = mixVoteRepository.findByUserAndMix(user, mix);

        switch (num) {
            case 1:
                if (optionalVote.isPresent()) {
                    MixVote mixVote = optionalVote.get();
                    if (!mixVote.isVote()) {
                        mixVote.setVote(true);
                    }
                } else {
                    mixVoteRepository.save(
                            MixVote.builder().user(user).mix(mix).vote(true).build());
                }
                break;
            case 2:
                if (optionalVote.isPresent()) {
                    MixVote mixVote = optionalVote.get();
                    if (mixVote.isVote()) {
                        mixVote.setVote(false);
                    }
                } else {
                    mixVoteRepository.save(
                            MixVote.builder().user(user).mix(mix).vote(false).build());
                }
                break;
            case 3:
                optionalVote.ifPresent(mixVoteRepository::delete);
                break;
            default:
                break;
        }
        int up = mixVoteRepository.countByMixAndVote(mix, true);
        int down = mixVoteRepository.countByMixAndVote(mix, false);
        mix.setVoteCount(up - down);
        return mix.getLikeCount();
    }
}

