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
import server.beerfactory.dto.mix.MixReplyDto;
import server.beerfactory.entity.mix.Mix;
import server.beerfactory.entity.mix.MixReply;
import server.beerfactory.entity.user.User;
import server.beerfactory.mapper.mix.MixReplyMapper;
import server.beerfactory.service.mix.MixReplyService;
import server.beerfactory.service.mix.MixService;
import server.beerfactory.service.user.UserService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/mixes/{mix-id}/reply")
@Validated
@AllArgsConstructor
public class MixReplyController {

    private final MixReplyService mixReplyService;
    private final MixService mixService;
    private final MixReplyMapper mapper;
    private final UserService userService;


    @PostMapping
    public ResponseEntity postMixReply(@Valid @RequestBody MixReplyDto.Post requestBody) {
        User foundUser = userService.findUser(requestBody.getUserId());
        Mix foundMix = mixService.findMix(requestBody.getMixId());

        MixReply mixReply = mapper.mixReplyPostDtoToMixReply(requestBody);
        mixReply.setUser(foundUser);
        mixReply.setMix(foundMix);

        MixReply createdMixReply = mixReplyService.createMixReply(mixReply);
        MixReplyDto.Response response = mapper.mixReplyToMixReplyResponse(createdMixReply);
        response.setNickName(foundUser.getNickname());

        return new ResponseEntity<>(
                new SingleResponseDto<>(response),
                HttpStatus.CREATED
        );
    }

    @PatchMapping("/{reply-id}")
    public ResponseEntity patchMixReply(@PathVariable("reply-id") @Positive long id,
                                        @Valid @RequestBody MixReplyDto.Patch requestBody) {
        requestBody.setMixReplyId(id);
        MixReply mixReply = mixReplyService.updatedMixReply(mapper.mixReplyPatchDtoToMixReply(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.mixReplyToMixReplyResponse(mixReply)),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMixReplies(@PageableDefault(size = 100, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        Page<MixReply> pageMixReply = mixReplyService.findMixReplies(pageable);
        List<MixReply> mixReplies = pageMixReply.getContent();
        List<MixReplyDto.Response> responses = mapper.mixReplyToMixRepliesResponseDto(mixReplies);

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.mixReplyToMixRepliesResponseDto(mixReplies),
                        pageMixReply),
                HttpStatus.OK);
    }

    @DeleteMapping("/{reply-id}")
    public ResponseEntity deleteMixReply(@PathVariable("reply-id") long id) {
        mixReplyService.deleteMixReply(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
