package server.beerfactory.dto.beer;

import lombok.*;
import server.beerfactory.entity.beer.Beer;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

public class BeerDto {

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Request{
        @Size(min = 2, max = 20)
        @NotBlank
        private String name;
        private String image;
        @Size(min = 10, message = "10자 이상 입력해주세요")
        @NotBlank
        private String description;
        @NotBlank
        private String brand;
        @NotBlank
        private String country;
        @NotBlank
        private Beer.BeerType beerType;
        @NotBlank
        private double alcohol;
        @NotBlank
        private String aroma;
        @NotBlank
        private int sweet;
        @NotBlank
        private int afterTaste;
        @NotBlank
        private int soda;
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response{
        private Long id;
        private String name;
        private String description;
        private Beer.BeerType beerType;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private String image;
        private double alcohol;
        private double star;
        private String brand;
        private String country;
        private String aroma;
        private int likeCount;
        private int disLikeCount;
        private int soda;
        private int sweet;
        private int afterTaste;
        private int sum;
        private int count;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Main{
        private Long id;
        private String name;
        private String description;
        private Beer.BeerType beerType;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private String image;
        private double alcohol;
        private double star;
        private String brand;
        private String country;
        private String aroma;
        private int likeCount;
        private int disLikeCount;
        private int soda;
        private int sweet;
        private int afterTaste;
        private int sum;
        private int count;
    }
}

