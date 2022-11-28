package server.beerfactory.repository.mix;

import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.mix.Mix;
import server.beerfactory.entity.mix.MixVote;
import server.beerfactory.entity.user.User;


import java.util.Optional;

public interface MixVoteRepository extends JpaRepository<MixVote, Long> {
    int countByMixAndVote(Mix mix, boolean vote);
    Optional<MixVote> findByUserAndMix(User user, Mix mix);
}
