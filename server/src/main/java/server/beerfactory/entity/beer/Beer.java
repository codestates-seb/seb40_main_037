package server.beerfactory.entity.beer;


import lombok.*;
import server.beerfactory.audit.Auditable;
import server.beerfactory.entity.user.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Builder
public class Beer extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BEER_ID")
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column
    private String image;

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

    @Column
    private int likeCount;

    @Column
    private int disLikeCount;

    // 도수
    @Column(nullable = false)
    private double alcohol;

    // 평점 합계
    @Column
    private int sum;

    // 평점 매긴 인원수
    @Column
    private int count;

    @Column
    private double star;

    @Column
    private String aroma;

    @Column
    private int soda;

    @Column
    private int sweet;

    @Column
    private int afterTaste;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "beer", cascade = CascadeType.ALL)
    private final List<BeerReview> beerReviews = new ArrayList<>();

    @OneToMany(mappedBy = "beer", cascade = CascadeType.ALL)
    private final List<BeerVote> beerVotes = new ArrayList<>();

    public enum BeerType {
        ALE("에일"),
        WHEAT_ALE("위트 에일"),
        LAGER("라거"),
        IPA("IPA"),
        STOUT("스타우트"),
        BOCK("복"),
        SOUR("사워");

        @Getter
        private final String type;

        BeerType(String type) {
            this.type = type;
        }
    }
}
