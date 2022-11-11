package server.beerfactory.entity.mix;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class MixTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MIX_TAG_ID")
    private long id;

    @Column
    private String food;

    @Column
    private String movie;

    @OneToMany(mappedBy = "mix_tag", cascade = CascadeType.ALL)
    private final List<MixJoinTag> mixJoinTags = new ArrayList<>();

}
