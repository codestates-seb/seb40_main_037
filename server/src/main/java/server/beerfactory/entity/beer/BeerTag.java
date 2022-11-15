package server.beerfactory.entity.beer;

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
public class BeerTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BEER_TAG_ID")
    private Long id;

    @Column
    private String aroma;

    @Column
    private int sweet;

    @Column
    private int aftertaste;

    @Column
    private int soda;

    @OneToMany(mappedBy = "beerTag", cascade = CascadeType.ALL)
    private final List<BeerJoinTag> beerJoinTags = new ArrayList<>();

}
