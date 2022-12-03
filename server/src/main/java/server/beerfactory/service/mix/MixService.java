package server.beerfactory.service.mix;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import server.beerfactory.entity.mix.Mix;
import server.beerfactory.entity.user.User;
import server.beerfactory.exception.BusinessLogicException;
import server.beerfactory.exception.ExceptionCode;
import server.beerfactory.repository.mix.MixRepository;
import server.beerfactory.repository.user.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class MixService {
    private final MixRepository mixRepository;
    private final UserRepository userRepository;


    public Mix createMix(Mix mix) {
        return mixRepository.save(mix);
    }

    public Mix findMix(long id) {
        return findVerifiedMix(id);
    }

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Mix updateMix(Mix mix) {
        Mix findMix = findVerifiedMix(mix.getId());

        findMix.setTitle(mix.getTitle());
        findMix.setContent(mix.getContent());
        findMix.setImage(mix.getImage());
        findMix.setLikeCount(mix.getLikeCount());

        return mixRepository.save(findMix);
    }

    public void deleteMix(long id) {
        Mix mix = findVerifiedMix(id);
        mixRepository.delete(mix);
    }

    public Page<Mix> findMixes(Pageable pageable) {
        return mixRepository.findAll(pageable);
    }

    public Mix findVerifiedMix(long id) {
        Optional<Mix> optionalMix = mixRepository.findById(id);
        return optionalMix.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MIX_NOT_FOUND));
    }

    public List<Mix> listMixes(User user) {
        Optional<User> findUser = userRepository.findById(user.getId());
        User user2 = findUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        if(!user.getId().equals(user2.getId())){
            throw new BusinessLogicException(ExceptionCode.USER_DIFFERENT);
        }
        return mixRepository.findAllByUser(user);
    }
}
