package server.beerfactory.dto.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class UserDto {
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
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

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response {
        private Long id;
        private String email;
        private String nickname;
        private String birthday;
//        private String image;
    }
}
