package server.beerfactory.controller.mix;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
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

@SuppressWarnings("ALL")
@RestController
@RequestMapping("/mix")
@Validated
@AllArgsConstructor
public class MixController {
    private final MixService mixService;
    private final MixMapper mapper;
//    private final UserService userService;


/*    @PostMapping
    public ResponseEntity postMix(@Valid @RequestBody MixDto.Post requestBody) {
        User findUser = userService.findUser(requestBody.getUserId());
        Mix mix = mapper.mixPostDtoToMix(requestBody);
        mix.setUser(findUser);
        Mix createdMix = mixService.createMix(mix);

        return new ResponseEntity<>(new SingleResponseDto<>(mix), HttpStatus.CREATED);
    }*/

    @PostMapping
    public ResponseEntity postMix(@Valid @RequestBody MixDto.Post requestBody) {
        Mix mix = mapper.mixPostDtoToMix(requestBody);
        Mix createdMix = mixService.createMix(mapper.mixPostDtoToMix(requestBody));

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.mixPostDtoToMix(requestBody)),
                HttpStatus.CREATED);
    }


    @PatchMapping("/{mix-id}")
    public ResponseEntity patchMix(
            @PathVariable("mix-id") @Positive long mixId,
            @Valid @RequestBody MixDto.Patch requestBody) {
        requestBody.setMixId(mixId);
        Mix mix = mixService.updateMix(mapper.mixPatchDtoToMix(requestBody));
        Mix updatedMix = mixService.updateMix(mix);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.mixToMixResponse(mix)),
                HttpStatus.OK);
    }

    @GetMapping("/{mix-id}")
    public ResponseEntity getMix(@PathVariable("mix-id") @Positive long mixId) {
        Mix mix = mixService.findMix(mixId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.mixToMixResponse(mix)),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMixes(@Positive @RequestBody int page,
                                   @Positive @RequestBody int size) {
        Page<Mix> pageMixes = mixService.findMixes(page - 1, size);
        List<Mix> mixes = pageMixes.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.mixesToMixResponse(mixes), pageMixes),
                HttpStatus.OK
        );
    }

    @DeleteMapping("/{mix-id}")
    public ResponseEntity deleteMix(@PathVariable("mix-id") @Positive long mixId) {
        mixService.deleteMix(mixId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}


