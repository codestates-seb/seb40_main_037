package server.beerfactory.dto.beer;

import lombok.*;
import server.beerfactory.entity.beer.Beer;

import javax.persistence.Column;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

public class BeerDto {

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Request{
        @Size(min = 2, max = 20)
        private String name;
        private String image;
        @Size(min = 10, message = "10자 이상 입력해주세요")
        private String description;
        private String brand;
        private String country;
        private String type;
        private double alcohol;
        private String aroma;
        private int sweet;
        private int afterTaste;
        private int soda;
        private boolean bookmark;
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response{
        private Long id;
        private String name;
        private String description;
        private String type;
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
        private boolean bookmark;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Main{
        private Long id;
        private String name;
        private String description;
        private String type;
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
