package server.beerfactory.mapper.mix;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import server.beerfactory.dto.mix.MixReplyDto;
import server.beerfactory.entity.mix.MixReply;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MixReplyMapper {
    MixReply mixReplyPostDtoToMixReply(MixReplyDto.Post requestBody);
    MixReply mixReplyPatchDtoToMixReply(MixReplyDto.Patch requestBody);
    MixReplyDto.Response mixReplyToMixReplyResponse(MixReply mixReply);
    List<MixReplyDto.Response> mixReplyToMixReplyResponseDto(List<MixReply> mixReplies);
}
