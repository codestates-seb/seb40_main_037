package server.beerfactory.controller.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.beerfactory.dto.config.SingleResponseDto;
import server.beerfactory.dto.user.UserDto;
import server.beerfactory.entity.user.User;
import server.beerfactory.mapper.User.UserMapper;
import server.beerfactory.service.User.UserService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

/**
 * 임시 작업
 * 시큐리티 적용 전 (회원가입, 로그인 기능 제외)
 * requestBody에 유저 정보를 작성하여 DB에 저장, 조회
 * 시큐리티 구현 후 전체 로직 수정 예정
 */
@RequiredArgsConstructor
@Validated
@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private final UserMapper mapper;

    @PostMapping
    public ResponseEntity<?> postUser(@Valid @RequestBody UserDto.Post requestBody) {
        User user = mapper.userPostToUser(requestBody);
        User createdUser = userService.createUser(user);
        UserDto.Response response = mapper.userToUserResponseDto(createdUser);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    @GetMapping("/{user-id}")
    public ResponseEntity<?> getUser(@PathVariable("user-id") @Positive Long id) {
        User user = userService.findUser(id);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user)), HttpStatus.OK);
    }

//    @GetMapping("/signup")
//    public String signupUserForm() {
//        return "user_signup";
//    }
//
//    @PostMapping("/signup")
//    public String signupUser(@Valid UserDto .Post requestBody) {
//        User user = mapper.userPostToUser(requestBody);
//        userService.createUser(user);
//
//        return "login";
//    }
//
//    @GetMapping("/mypage")
//    public String myPage() {
//        return "mypage";
//    }
}
