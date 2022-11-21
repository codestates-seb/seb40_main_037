package server.beerfactory.service.mix;


import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.beerfactory.entity.mix.MixReply;
import server.beerfactory.exception.BusinessLogicException;
import server.beerfactory.exception.ExceptionCode;
import server.beerfactory.repository.mix.MixReplyRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class MixReplyService {
    private final MixReplyRepository mixReplyRepository;


    public MixReply createMixReply(MixReply mixReply) {
        return mixReplyRepository.save(mixReply);
    }

    public MixReply updatedMixReply(MixReply mixReply) {
        MixReply findMixReply = findVerifiedMixReply(mixReply.getId());

        Optional.ofNullable(mixReply.getContent())
                .ifPresent(findMixReply::setContent);

        return mixReplyRepository.save(findMixReply);
    }

    public Page<MixReply> findMixReplies(int page, int size) {
        return mixReplyRepository.findAll(PageRequest.of(page, size,
                Sort.by("mixReplyId").descending()));
    }


    public List<MixReply> findMixReplies(long mixId) {
        List<MixReply> mixReplies = mixReplyRepository.findAll();
        mixReplies.removeIf(mixReply -> mixReply.getMix().getId() != mixId);
        return mixReplies;
    }

    public void deleteMixReply(long id) {
        MixReply findMixReply = findVerifiedMixReply(id);
        mixReplyRepository.delete(findMixReply);
    }

    public MixReply findVerifiedMixReply(long id) {
        Optional<MixReply> optionalMixReply = mixReplyRepository.findById(id);
        return optionalMixReply.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MIX_REPLY_NOT_FOUND));
    }
}
