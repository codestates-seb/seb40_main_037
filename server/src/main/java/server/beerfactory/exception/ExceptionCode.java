package server.beerfactory.exception;

import lombok.Getter;

public enum ExceptionCode {

    MIX_REPLY_NOT_FOUND(404, "회원을 조회할 수 없습니다.");

    @Getter
    private int code;
    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
}

