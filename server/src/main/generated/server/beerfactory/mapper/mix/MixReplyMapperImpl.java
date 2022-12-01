package server.beerfactory.mapper.mix;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import server.beerfactory.dto.mix.MixReplyDto.Patch;
import server.beerfactory.dto.mix.MixReplyDto.Post;
import server.beerfactory.dto.mix.MixReplyDto.Response;
import server.beerfactory.entity.mix.MixReply;
import server.beerfactory.entity.mix.MixReply.MixReplyBuilder;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-30T00:38:26+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.4 (Amazon.com Inc.)"
)
@Component
public class MixReplyMapperImpl implements MixReplyMapper {

    @Override
    public MixReply mixReplyPostDtoToMixReply(Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        MixReplyBuilder mixReply = MixReply.builder();

        mixReply.content( requestBody.getContent() );

        return mixReply.build();
    }

    @Override
    public MixReply mixReplyPatchDtoToMixReply(Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        MixReplyBuilder mixReply = MixReply.builder();

        mixReply.id( requestBody.getId() );
        mixReply.content( requestBody.getContent() );

        return mixReply.build();
    }

    @Override
    public Response mixReplyToMixReplyResponse(MixReply mixReply) {
        if ( mixReply == null ) {
            return null;
        }

        Response response = new Response();

        if ( mixReply.getId() != null ) {
            response.setId( mixReply.getId() );
        }
        response.setContent( mixReply.getContent() );
        response.setCreatedAt( mixReply.getCreatedAt() );
        response.setModifiedAt( mixReply.getModifiedAt() );

        return response;
    }

    @Override
    public List<Response> mixReplyToMixRepliesResponseDto(List<MixReply> mixReplies) {
        if ( mixReplies == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( mixReplies.size() );
        for ( MixReply mixReply : mixReplies ) {
            list.add( mixReplyToMixReplyResponse( mixReply ) );
        }

        return list;
    }
}
