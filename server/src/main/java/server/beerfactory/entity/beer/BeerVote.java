package server.beerfactory.entity.beer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class BeerVote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BEER_VOTE_ID")
    private long id;

    // 추천 여부
    @Column
    private boolean beerVoteLike;

    // 비추천 여부
    @Column
    private boolean beerVoteDislike;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BEER_REVIEW_ID")
    private BeerReview beerReview;

}