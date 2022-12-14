package server.beerfactory.controller.mix;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import server.beerfactory.dto.config.MultiResponseDto;
import server.beerfactory.dto.config.SingleResponseDto;
import server.beerfactory.dto.mix.MixDto;
import server.beerfactory.entity.mix.Mix;
import server.beerfactory.entity.user.User;
import server.beerfactory.image.S3Uploader;
import server.beerfactory.mapper.mix.MixMapper;
import server.beerfactory.service.mix.MixService;
import server.beerfactory.service.user.UserService;



import javax.validation.constraints.Positive;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/mixes")
@Validated
@AllArgsConstructor
public class MixController {
    private final MixService mixService;
    private final MixMapper mixMapper;
    private final UserService userService;
    private S3Uploader s3Uploader;


    @PostMapping
    public ResponseEntity postMix(@RequestPart(value = "requestBody") MixDto.Post requestBody,
                                  @RequestPart(value = "file", required = false) MultipartFile file) throws IOException {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userService.findUser(email);
        Mix mix = mixMapper.mixPostDtoToMix(requestBody);
        if (file != null) {
            String imgPath = s3Uploader.upload(file, "image");
            mix.setImage(imgPath);
        }
        mix.setUser(user);
        Mix createdMix = mixService.createMix(mix);
        MixDto.Response response = mixMapper.mixToMixResponse(createdMix);
        return new ResponseEntity<>(new SingleResponseDto<>(response),
                HttpStatus.CREATED);
    }


    @PatchMapping("/{mix-id}")
    public ResponseEntity patchMix(@PathVariable("mix-id") @Positive long id,
                                   @RequestPart(value = "requestBody") MixDto.Patch requestBody,
                                   @RequestPart(value = "file", required = false) MultipartFile file) throws IOException {
        requestBody.setMix(id);
        Mix  mix = mixMapper.mixPatchDtoToMix(requestBody);
        Mix updateMix = mixService.updateMix(mixMapper.mixPatchDtoToMix(requestBody));
        if (file != null) {
            updateMix.getImage();
            String imgPath = s3Uploader.upload(file, "image");
            updateMix.setImage(imgPath);
        }

        return new ResponseEntity<>(
                new SingleResponseDto<>(mixMapper.mixToMixResponse(updateMix)), HttpStatus.OK
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
    public ResponseEntity getMixes(@PageableDefault(size = 20, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
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
