package server.beerfactory.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class AuthDto {
    @Getter
    public static class Login {
        @NotBlank
        @Email
        private String username;

        @NotBlank
        private String password;
    }

    @Getter
    @AllArgsConstructor
    public static class Signup {
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
    @AllArgsConstructor
    public static class Response {
        private Long id;
        private String email;
        private String nickname;
        private String birthday;
        private String image;
    }
}
