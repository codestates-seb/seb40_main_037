package server.beerfactory.repository.mix;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import server.beerfactory.entity.mix.MixReply;

import java.util.Optional;

public interface MixReplyRepository extends JpaRepository<MixReply, Long> {
    @Override
    Optional<MixReply> findById(Long aLong);

    //외래키로 찾을때는 find + By + {기본키 엔티티(첫글자는 대문자로)} + {외래키 필드명(첫글자는 대문자로)}
    public Page<MixReply> findByMix_MixId(long mixId, Pageable pageable);
}
