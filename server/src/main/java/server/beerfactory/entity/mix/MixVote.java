package server.beerfactory.entity.mix;

import lombok.*;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.entity.user.User;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Builder
public class MixVote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Mix_VOTE_ID")
    private Long id;


    @Column
    private boolean good;


    @Column
    private boolean bad;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MIX_ID")
    private Mix mix;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

}
