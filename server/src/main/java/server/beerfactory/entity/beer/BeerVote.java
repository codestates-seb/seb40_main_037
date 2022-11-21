package server.beerfactory.entity.beer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import server.beerfactory.audit.Auditable;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class BeerVote extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BEER_VOTE_ID")
    private Long id;

    // 추천 여부
    @Column
    private boolean voteLike;

    // 비추천 여부
    @Column
    private boolean voteDislike;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BEER_REVIEW_ID")
    private BeerReview beerReview;

}
