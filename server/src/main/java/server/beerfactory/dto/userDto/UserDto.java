package server.beerfactory.dto.userDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

public class UserDto {

    @Getter
    @AllArgsConstructor
    @Builder
    public static class Response{
        private Long userId;
        private String nickname;
        private String email;
        private String userStatus;
        private List<String> bookmarks;
    }
}
