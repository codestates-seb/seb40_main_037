package server.beerfactory.controller.mix;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.beerfactory.dto.config.MultiResponseDto;
import server.beerfactory.dto.config.SingleResponseDto;
import server.beerfactory.dto.mix.MixDto;
import server.beerfactory.entity.mix.Mix;
import server.beerfactory.mapper.mix.MixMapper;
import server.beerfactory.service.mix.MixService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/mixes")
@Validated
@AllArgsConstructor
public class MixController {
    private final MixService mixService;
    private final MixMapper mixMapper;


    @PostMapping
    public ResponseEntity postMix(@Valid @RequestBody MixDto.Post requestBody) {
        Mix mix = mixMapper.mixPostDtoToMix(requestBody);
        Mix createdMix = mixService.createMix(mix);
        MixDto.Response response = mixMapper.mixToMixResponse(createdMix);
        return new ResponseEntity<>(new SingleResponseDto<>(response),
                HttpStatus.CREATED);
    }


    @PatchMapping("/{mix-id}")
    public ResponseEntity patchMix(@PathVariable("mix-id") @Positive long id,
                                   @Valid @RequestBody MixDto.Patch requestBody) {
        requestBody.setId(id);
        Mix mix = mixMapper.mixPatchDtoToMix(requestBody);
        Mix updatedMix = mixService.updateMix(mix);
        MixDto.Response response = mixMapper.mixToMixResponse(updatedMix);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response),HttpStatus.OK
        );

    }

    @GetMapping("/{mix-id}")
    public ResponseEntity getMix(@PathVariable("mix-id") long id) {
        Mix mix = mixService.findMix(id);

        return new ResponseEntity(
                new SingleResponseDto<>(mixMapper.mixToMixResponse(mix)),
                HttpStatus.OK
        );
    }

    @GetMapping
    public ResponseEntity getMixes(@PageableDefault(size = 20, sort = "createdAt",direction = Sort.Direction.DESC)Pageable pageable) {
        Page<Mix> pageMixes = mixService.findMixes(pageable);
        List<Mix> mixes = pageMixes.getContent();
        List<MixDto.Response> responses = mixMapper.mixesToMixResponseDto(mixes);

        return new ResponseEntity<>(
                new MultiResponseDto<>(mixMapper.mixesToMixResponseDto(mixes),
                        pageMixes),
                HttpStatus.OK);
    }

    @DeleteMapping("/{mix-id}")
    public ResponseEntity deleteMix(@PathVariable("mix-id") long id) {
        mixService.deleteMix(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
