package server.beerfactory.service.mix;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import server.beerfactory.entity.mix.Mix;
import server.beerfactory.exception.BusinessLogicException;
import server.beerfactory.exception.ExceptionCode;
import server.beerfactory.repository.mix.MixRepository;

import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class MixService {
    private final MixRepository mixRepository;


    public Mix createMix(Mix mix) {
        return mixRepository.save(mix);
    }

    public Mix findMix(long id) {
        return findVerifiedMix(id);
    }

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Mix updateMix(Long mixId, Mix mix) {
        Mix findMix = findVerifiedMix(mixId);

        Optional.ofNullable(mix.getTitle())
                .ifPresent(findMix::setTitle);
        Optional.ofNullable(mix.getContent())
                .ifPresent(findMix::setContent);
        Optional.of(mix.getImage())
                .ifPresent(findMix::setImage);

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
}