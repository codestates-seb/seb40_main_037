package server.beerfactory.dto.BeerDto;

import lombok.*;
import server.beerfactory.entity.user.User;

import javax.validation.constraints.NotBlank;
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
        private int score;

        @Setter
        private User user;
    }

    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response{
        private Long BeerReviewId;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private User user;
    }
}
