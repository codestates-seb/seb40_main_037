package server.beerfactory.entity.mix;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class MixVote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MIX_VOTE_ID")
    private long id;

    // 추천 여부
    @Column
    private boolean mixVoteLike;

    // 비추천 여부
    @Column
    private boolean mixVoteDislike;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MIX_ID")
    private Mix mix;
}
