package server.beerfactory.entity.mix;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "mix")
    private final List<MixReply> mixReplies = new ArrayList<>();


}
