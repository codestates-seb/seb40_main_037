package server.beerfactory.entity.mix;



import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import server.beerfactory.audit.Auditable;
import server.beerfactory.entity.user.User;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Builder
public class Mix extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MIX_ID")
    private Long id;

    @Column(length = 25, nullable = false)
    private String title;

    @Column
    private String image;

    @Column(columnDefinition = "TEXT",nullable = false)
    private String content;

    @Column
    private int likeCount;

    @Column
    private int disLikeCount;

    public void setVoteCount(int likeCount) {
        this.likeCount = likeCount;
    }


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

/*    @JsonIgnore
    @OneToMany(mappedBy = "mix", cascade = CascadeType.ALL)
    private final List<MixReply> mixReplies = new ArrayList<>();*/

    @JsonIgnore
    @OneToMany(mappedBy = "mix", cascade = CascadeType.ALL)
    private final List<MixVote> mixVotes = new ArrayList<>();


}
