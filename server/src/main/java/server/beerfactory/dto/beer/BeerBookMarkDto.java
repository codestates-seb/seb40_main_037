package server.beerfactory.dto.beer;

import lombok.*;
import server.beerfactory.dto.user.UserDto;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.user.User;

import java.time.LocalDateTime;

public class BeerBookMarkDto {

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Builder
    public static class Dto{
        private UserDto.Response user;
        private BeerDto.Response beer;
        private Long id;
    }
}
