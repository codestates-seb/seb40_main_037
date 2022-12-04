package server.beerfactory.controller.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import server.beerfactory.dto.beer.BeerReviewDto;
import server.beerfactory.dto.config.SingleResponseDto;
import server.beerfactory.dto.mix.MixDto;
import server.beerfactory.dto.user.UserDto;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.entity.mix.Mix;
import server.beerfactory.entity.user.User;
import server.beerfactory.image.S3Uploader;
import server.beerfactory.mapper.beer.BeerReviewMapper;
import server.beerfactory.mapper.mix.MixMapper;
import server.beerfactory.mapper.user.UserMapper;
import server.beerfactory.service.beer.BeerReviewService;
import server.beerfactory.service.mix.MixService;
import server.beerfactory.service.user.UserService;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@Validated
@RestController
@Slf4j
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;
    private final BeerReviewService beerReviewService;
    private final BeerReviewMapper beerReviewMapper;
    private final MixService mixService;
    private final MixMapper mixMapper;
    private final S3Uploader s3Uploader;

    // 로그인한 유저 정보 수정 (닉네임, 이미지)
    @PatchMapping("/me")
    public ResponseEntity<?> patchUser(@RequestPart(value = "requestBody") UserDto.Patch requestBody,
                                       @RequestPart(value = "file", required = false) MultipartFile file) throws IOException {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userService.findUser(email);

        requestBody.setId(user.getId());
        if (file != null) {
            String imgPath = s3Uploader.upload(file, "image");
            requestBody.setImage(imgPath);
        }

        User updatedUser = userService.updateUser(userMapper.userPatchDtoToUser(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(userMapper.userToUserResponseDto(updatedUser)), HttpStatus.OK);
    }


    // 로그인한 유저의 정보 조회
    @GetMapping("/me")
    public ResponseEntity<?> getMyInfo() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userService.findUser(email);

        return new ResponseEntity<>(
                new SingleResponseDto<>(userMapper.userToUserResponseDto(user)), HttpStatus.OK);
    }

    // 로그인한 유저가 작성한 맥주 리뷰 조회
    @GetMapping("/me/beerReviews")
    public ResponseEntity<?> getMyBeerReviews() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userService.findUser(email);
        List<BeerReview> beerReviews = beerReviewService.listBeerReviews(user);
        List<BeerReviewDto.Response> response = beerReviewMapper.beerReviewToBeerReviewResponseDtos(beerReviews);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 로그인한 유저가 작성한 믹스 조회
    @GetMapping("/me/mixes")
    public ResponseEntity<?> getMyMixes() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userService.findUser(email);
        List<Mix> mixes = mixService.listMixes(user);
        List<MixDto.Response> response = mixMapper.mixesToMixResponseDto(mixes);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
