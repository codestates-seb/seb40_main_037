package server.beerfactory.dto.beer;

import lombok.*;
import server.beerfactory.dto.user.UserDto;
import server.beerfactory.entity.beer.Beer;
import server.beerfactory.entity.user.User;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

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
        @Setter
        private User user;
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
        private UserDto.Response user;
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
        private List<BeerReviewDto.Response> beerReviews;
    }
}

