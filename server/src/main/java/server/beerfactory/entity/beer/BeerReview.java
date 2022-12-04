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
@Builder
@Entity
public class BeerReview extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BEER_REVIEW_ID")
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column
    private String image;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private int score;

    @Column
    private int likeCount;

    @Column
    private int disLikeCount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BEER_ID")
    private Beer beer;

    @OneToMany(mappedBy = "beerReview", cascade = CascadeType.ALL)
    private final List<BeerReviewVote> beerReviewVotes = new ArrayList<>();

}
