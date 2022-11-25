package server.beerfactory.dto.BeerDto;

import lombok.*;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.user.User;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

public class BeerDto {

    @Getter
    @Builder
    public static class Request{
        @Size(min = 2, max = 20)
        private String name;
        private String image;
        @Size(min = 10, message = "10자 이상 입력해주세요")
        private String description;
        private String brand;
        private String country;
        private Beer.BeerType beerType;
        private double alcohol;
        private String aroma;
        private int sweet;
        private int afterTaste;
        private int soda;
    }

    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response{
        private Long id;
        private String name;
        private String description;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private String image;
        private double alcohol;
        private String brand;
        private String country;
        private String aroma;
        private int soda;
        private int sweet;
        private int afterTaste;
        private int sum;
        private int count;
    }
}
