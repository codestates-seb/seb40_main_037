package server.beerfactory.mapper.mix;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import server.beerfactory.dto.mix.MixDto.Patch;
import server.beerfactory.dto.mix.MixDto.Post;
import server.beerfactory.dto.mix.MixDto.Response;
import server.beerfactory.entity.mix.Mix;
import server.beerfactory.entity.mix.Mix.MixBuilder;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-30T00:38:26+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.4 (Amazon.com Inc.)"
)
@Component
public class MixMapperImpl implements MixMapper {

    @Override
    public Mix mixPostDtoToMix(Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        MixBuilder mix = Mix.builder();

        mix.title( requestBody.getTitle() );
        mix.image( requestBody.getImage() );
        mix.content( requestBody.getContent() );

        return mix.build();
    }

    @Override
    public Mix mixPatchDtoToMix(Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        MixBuilder mix = Mix.builder();

        mix.id( requestBody.getId() );
        mix.title( requestBody.getTitle() );
        mix.image( requestBody.getImage() );
        mix.content( requestBody.getContent() );
        mix.likeCount( requestBody.getLikeCount() );

        return mix.build();
    }

    @Override
    public Response mixToMixResponse(Mix mix) {
        if ( mix == null ) {
            return null;
        }

        Response response = new Response();

        if ( mix.getId() != null ) {
            response.setId( mix.getId() );
        }
        response.setTitle( mix.getTitle() );
        response.setContent( mix.getContent() );
        response.setImage( mix.getImage() );
        response.setLikeCount( mix.getLikeCount() );
        response.setCreatedAt( mix.getCreatedAt() );
        response.setModifiedAt( mix.getModifiedAt() );

        return response;
    }

    @Override
    public List<Response> mixesToMixResponseDto(List<Mix> mixes) {
        if ( mixes == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( mixes.size() );
        for ( Mix mix : mixes ) {
            list.add( mixToMixResponse( mix ) );
        }

        return list;
    }
}
