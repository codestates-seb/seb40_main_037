package server.beerfactory.dto.beer;

import lombok.*;
import server.beerfactory.dto.user.UserDto;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.user.User;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

public class BeerReviewDto {
    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Request{
        @NotBlank
        @Size(min = 10, message = "10자 이상 입력해주세요")
        private String content;

        @NotBlank
        private String title;

        private String image;

        @NotNull
        private int score;
        @Setter
        private User user;
        @Setter
        private Beer beer;
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response{
        private Long id;
        private String title;
        private String content;
        private int score;
        private int likeCount;
        private int disLikeCount;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private UserDto.Response user;
    }
}
