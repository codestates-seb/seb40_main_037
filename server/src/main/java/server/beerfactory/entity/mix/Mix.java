package server.beerfactory.entity.mix;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import server.beerfactory.entity.user.User;


import javax.persistence.*;



@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
public class Mix {
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
    private Integer likeCount;

    @Column
    private Integer dislikeCount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;


}
