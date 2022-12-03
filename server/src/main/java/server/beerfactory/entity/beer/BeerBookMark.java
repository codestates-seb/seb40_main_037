package server.beerfactory.entity.beer;

import lombok.*;
import server.beerfactory.audit.Auditable;
import server.beerfactory.entity.user.User;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Builder
public class BeerBookMark extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BEER_BOOKMARK_ID")
    private Long id;

    // 추천 여부
    @Column
    private boolean isOk;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BEER_ID")
    private Beer beer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;
}
