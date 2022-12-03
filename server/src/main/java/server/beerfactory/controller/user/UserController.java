package server.beerfactory.controller.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.beerfactory.dto.config.SingleResponseDto;
import server.beerfactory.entity.user.User;
import server.beerfactory.mapper.user.UserMapper;
import server.beerfactory.service.user.UserService;
@RequiredArgsConstructor
@Validated
@RestController
@Slf4j
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;

    // 로그인한 유저의 정보 조회
    @GetMapping("/me")
    public ResponseEntity<?> getMyInfo() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userService.findUser(email);

        return new ResponseEntity<>(
                new SingleResponseDto<>(userMapper.userToUserResponseDto(user)), HttpStatus.OK);
    }
}
