package server.beerfactory.controller.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.beerfactory.dto.config.SingleResponseDto;
import server.beerfactory.entity.user.User;
import server.beerfactory.mapper.user.UserMapper;
import server.beerfactory.service.user.UserService;

import javax.validation.constraints.Positive;

@RequiredArgsConstructor
@Validated
@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private final UserMapper mapper;

    @GetMapping("/{user-id}")
    public ResponseEntity<?> getUser(@PathVariable("user-id") @Positive Long id) {
        User user = userService.findUser(id);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user)), HttpStatus.OK);
    }


}
