package server.beerfactory.dto.beer;

import lombok.*;
import server.beerfactory.entity.beer.Beer;

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
        @NotBlank
        private String image;

        @NotNull
        private int score;
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response{
        private Long id;
        private String content;
        private int score;
        private int likeCount;
        private int disLikeCount;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
