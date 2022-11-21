package server.beerfactory.dto.mix;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class MixReplyDto {

    @AllArgsConstructor
    @Getter
    @NoArgsConstructor
    public static class Post {

        @Column
        @NotBlank(message = "댓글 내용을 입력해 주세요.")
        private String content;
        @Column
        private Long mixId;
        @Column
        private Long userId;

    }

    @AllArgsConstructor
    @Getter
    public static class Patch {
        private long mixReplyId;
        @NotBlank(message = "댓글 내용을 입력해 주세요.")
        private String content;

        public void setMixReplyId(long mixReplyId) {
            this.mixReplyId = mixReplyId;
        }
    }

    @AllArgsConstructor
    @Getter
    @Setter
    public static class Response {
        private long userId;
        private String nickName;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }


}
