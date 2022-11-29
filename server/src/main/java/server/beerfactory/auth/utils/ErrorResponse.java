package server.beerfactory.auth.utils;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public class ErrorResponse {
    private int status;
    private String message;

    public static ErrorResponse of(HttpStatus httpStatus) {
           return new ErrorResponse(httpStatus.value(), httpStatus.getReasonPhrase());
    }
}
