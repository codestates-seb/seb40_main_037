package server.beerfactory.service.mix;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import server.beerfactory.entity.mix.Mix;
import server.beerfactory.exception.BusinessLogicException;
import server.beerfactory.exception.ExceptionCode;
import server.beerfactory.repository.mix.MixRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MixService {
    private final MixRepository mixRepository;

    public MixService(MixRepository mixRepository) {
        this.mixRepository = mixRepository;
    }


    public Mix createMix(Mix mix) {
        return mixRepository.save(mix);
    }

    public Mix findMix(long id) {
        return findVerifiedMix(id);
    }

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Mix updateMix(Mix mix) {
        Mix findMix = findVerifiedMix(mix.getId());

        Optional.ofNullable(mix.getTitle())
                .ifPresent(title -> findMix.setTitle(title));
        Optional.ofNullable(mix.getContent())
                .ifPresent(content -> findMix.setContent(content));
        Optional.of(mix.getImage())
                .ifPresent(image -> findMix.setImage(image));

        return mixRepository.save(findMix);
    }

    public void deleteMix(long id) {
        Mix mix = findVerifiedMix(id);
        mixRepository.delete(mix);
    }

    public Page<Mix> findMixes(int page, int size) {
        return mixRepository.findAll(PageRequest.of(page, size,
                Sort.by("mixId").descending()));
    }

    public Mix findVerifiedMix(long id) {
        Optional<Mix> optionalMix = mixRepository.findById(id);
        return optionalMix.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MIX_NOT_FOUND));
    }
}
