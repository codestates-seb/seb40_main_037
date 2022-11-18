package server.beerfactory.repository.mix;

import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.mix.MixReply;

import java.util.Optional;

public interface MixReplyRepository extends JpaRepository<MixReply, Long> {
    @Override
    Optional<MixReply> findById(Long aLong);
}
