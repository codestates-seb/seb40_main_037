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
    private long id;

    @Column(nullable = false)
    private String mixname;

    @Column
    private String image;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "mix", cascade = CascadeType.ALL)
    private final List<MixReply> mixReplies = new ArrayList<>();

    @OneToMany(mappedBy = "mix", cascade = CascadeType.ALL)
    private final List<MixJoinTag> mixJoinTags = new ArrayList<>();

}
