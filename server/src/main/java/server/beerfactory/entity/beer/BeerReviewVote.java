package server.beerfactory.entity.beer;

import lombok.*;
import server.beerfactory.audit.Auditable;
import server.beerfactory.entity.user.User;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
public class BeerReviewVote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BEER_REVIEW_VOTE_ID")
    private Long id;

    // 추천 여부
    @Column
    private boolean good;

    // 비추천 여부
    @Column
    private boolean bad;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BEER_REVIEW_ID")
    private BeerReview beerReview;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;
}
