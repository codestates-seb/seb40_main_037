package server.beerfactory.exception;

import lombok.Getter;

public enum ExceptionCode {

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

