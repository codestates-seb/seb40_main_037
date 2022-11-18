package server.beerfactory.mapper.mix;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import server.beerfactory.dto.mix.MixDto;
import server.beerfactory.entity.mix.Mix;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MixMapper {
    Mix mixPostDtoToMix(MixDto.Post requestBody);
    Mix mixPatchDtoToMix(MixDto.Patch requestBody);
    MixDto.Response mixToMixResponse(Mix mix);
    List<MixDto.Response> mixesToMixResponseDto(List<Mix> mixes);
}
