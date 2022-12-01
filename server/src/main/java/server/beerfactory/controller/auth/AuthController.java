package server.beerfactory.controller.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.beerfactory.dto.auth.AuthDto;
import server.beerfactory.dto.config.SingleResponseDto;
import server.beerfactory.entity.user.User;
import server.beerfactory.mapper.auth.AuthMapper;
import server.beerfactory.service.user.UserService;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {
    private final UserService userService;
    private final AuthMapper mapper;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody AuthDto.Signup requestBody) {
        User user = mapper.authSignupToUser(requestBody);
        User createdUser = userService.createUser(user);
        AuthDto.Response response = mapper.userToAuthResponseDto(createdUser);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response), HttpStatus.CREATED);
    }
}
