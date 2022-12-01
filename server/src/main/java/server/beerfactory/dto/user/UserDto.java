package server.beerfactory.dto.user;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class UserDto {
    @AllArgsConstructor
    @Getter
    public static class Post {
        @NotBlank
        @Email
        public String email;

        @NotBlank
        private String password;

        @NotBlank
        private String nickname;

        @NotBlank
        private String birthday;

//        private String image;
    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private Long id;
        private String email;
        private String nickname;
        private String birthday;
//        private String image;
    }
}
