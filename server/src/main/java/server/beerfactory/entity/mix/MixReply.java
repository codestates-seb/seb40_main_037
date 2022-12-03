package server.beerfactory.entity.mix;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import server.beerfactory.audit.Auditable;
import server.beerfactory.entity.user.User;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Builder
public class MixReply extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MIX_REPLY_ID")
    private Long id;

    @Column(nullable = false)
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MIX_ID")
    private Mix mix;


}
