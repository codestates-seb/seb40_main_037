package server.beerfactory.entity.beer;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import server.beerfactory.entity.user.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Beer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BEER_ID")
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column
    private String image;

    @Column(nullable = false)
    private double score;

    @Column
    private BeerType beerType;

    @Column(nullable = false)
    private String country;

    @Column(nullable = false)
    private String brand;

    @Column(nullable = false)
    private String description;

    @Column
    private boolean bookmark;

    // 도수
    @Column(nullable = false)
    private double alcohol;

    // 평점 합계
    @Column
    private int sum;

    // 평점 매긴 인원수
    @Column
    private int count;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "beer", cascade = CascadeType.ALL)
    private final List<BeerReview> beerReviews = new ArrayList<>();

    @OneToMany(mappedBy = "beer", cascade = CascadeType.ALL)
    private final List<BeerJoinTag> beerJoinTags = new ArrayList<>();

    public enum BeerType {
        ALE("에일"),
        WHEAT_ALE("위트 에일"),
        LAGER("라거"),
        IPA("IPA"),
        STOUT("스타우트"),
        BOCK("복"),
        SOUR("사워");

        @Getter
        private String type;

        BeerType(String type) {
            this.type = type;
        }
    }

}
