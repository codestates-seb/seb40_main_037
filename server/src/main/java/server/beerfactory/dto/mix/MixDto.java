package server.beerfactory.dto.mix;

import lombok.*;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class MixDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        private Long userId;
        @NotBlank(message = "제목을 입력해 주세요.")
        private String title;
        @NotBlank(message = "내용을 입력해 주세요.")
        private String content;
        private String image;
//        private Boolean mix_vote; 좋아요 미설정
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {

        private long userId;
        @NotBlank(message = "제목을 입력해 주세요.")
        private String title;
        @NotBlank(message = "내용을 입력해 주세요.")
        private String content;
        private String image;

        public void setUserId(long userId) {
            this.userId = userId;
        }
//        private Boolean mix_vote; 좋아요 미설정
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response {
        private long id;
        private String title;
        private String content;
        private String image;
        private Integer likeCount;
        private Integer dislikeCount;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
//        private Boolean mix_vote; 좋아요 미설정
    }

}
