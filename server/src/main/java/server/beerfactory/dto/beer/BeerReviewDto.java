package server.beerfactory.dto.beer;

import lombok.*;

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

        private String title;

        private String image;

        @NotNull
        private int score;

    }

    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response{
        private Long id;
        private String content;
        private int score;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
