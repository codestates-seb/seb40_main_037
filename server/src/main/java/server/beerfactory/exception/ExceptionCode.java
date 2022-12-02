package server.beerfactory.exception;

import lombok.Getter;

public enum ExceptionCode {

    USER_NOT_FOUND(404, "회원을 찾을 수 없습니다."),
    USER_EXISTS(409, "회원이 이미 존재합니다."),
    USER_DIFFERENT(404, "본인만 접근 가능합니다."),
    BEER_NOT_FOUND(404, "찾을 수 없는 맥주입니다."),

    BEER_REVIEW_NOT_FOUND(404, "찾을 수 없는 리뷰입니다."),
    MIX_NOT_FOUND(404, "조합을 찾을 수 없습니다.");


    @Getter
    private int code;
    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
}

