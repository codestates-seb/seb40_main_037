package server.beerfactory.entity.beer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import server.beerfactory.entity.user.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class BeerReview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BEER_REVIEW_ID")
    private long id;

    @Column(nullable = false)
    private String title;

    @Column
    private String image;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private double score;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BEER_ID")
    private Beer beer;

    @OneToMany(mappedBy = "beer_review", cascade = CascadeType.ALL)
    private final List<BeerVote> beerVotes = new ArrayList<>();

}
