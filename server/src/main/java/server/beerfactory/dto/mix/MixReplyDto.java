package server.beerfactory.dto.mix;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class MixReplyDto {

    @Getter
    @Setter
    @AllArgsConstructor
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

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        private long id;
        @NotBlank(message = "댓글 내용을 입력해 주세요.")
        private String content;

        public void setMixReplyId(long id) {
            this.id = id;
        }
    }


    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response {
        private long id;
        private String nickName;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

    }


}
