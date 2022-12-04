package server.beerfactory.dto.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class UserDto {
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

        private String image;
    }

    @Getter
    @Setter
    public static class Patch {
        private Long id;
        private String nickname;
        private String image;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private Long id;
        private String email;
        private String nickname;
        private String birthday;
        private String image;
    }
}
