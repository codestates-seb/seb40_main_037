package server.beerfactory.entity.mix;

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
public class Mix {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MIX_ID")
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column
    private String image;

    @Column(nullable = false)
    private String content;

    @Column
    private int likeCount;

    @Column
    private int dislikeCount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "mix", cascade = CascadeType.ALL)
    private final List<MixReply> mixReplies = new ArrayList<>();

    @OneToMany(mappedBy = "mix", cascade = CascadeType.ALL)
    private final List<MixJoinTag> mixJoinTags = new ArrayList<>();

    @OneToMany(mappedBy = "mix", cascade = CascadeType.ALL)
    private final List<MixVote> mixVotes = new ArrayList<>();

}
