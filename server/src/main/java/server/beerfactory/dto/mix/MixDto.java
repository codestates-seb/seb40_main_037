package server.beerfactory.dto.mix;

import lombok.*;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class MixDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        private Long mixId;
        private Long userId;
        @NotBlank(message = "제목을 입력해 주세요.")
        private String title;
        @NotBlank(message = "내용을 입력해 주세요.")
        private String content;
//        private List<String> image;
//        private Boolean mix_vote; 좋아요 미설정
//        private List<String> tage; 태그 미설정
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        private long mixId;
        @NotBlank(message = "제목을 입력해 주세요.")
        private String title;
        @NotBlank(message = "내용을 입력해 주세요.")
        private String content;
//        private List<String> image;
//        private Boolean mix_vote; 좋아요 미설정
//        private List<String> tage; 태그 미설정

        public void setMixId(long mixId) {
            this.mixId = mixId;
        }
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private long mixId;
        private String title;
        private String content;
//        private String image;
        private int likeCount;
        private int dislikeCount;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
//        private Boolean mix_vote; 좋아요 미설정
//        private List<String> tage; 태그 미설정
    }

}
