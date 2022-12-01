package server.beerfactory.repository.mix;

import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.beer.BeerReview;
import server.beerfactory.entity.beer.BeerReviewVote;
import server.beerfactory.entity.mix.Mix;
import server.beerfactory.entity.mix.MixVote;
import server.beerfactory.entity.user.User;


import java.util.Optional;

public interface MixVoteRepository extends JpaRepository<MixVote, Long> {
    Optional<MixVote> findByUserAndMix(User user, Mix mix);

    int countByMixAndGood(Mix mix, boolean good);

    int countByMixAndBad(Mix mix, boolean bad);
}
