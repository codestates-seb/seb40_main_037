package server.beerfactory.mapper.user;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import server.beerfactory.dto.user.UserDto.Post;
import server.beerfactory.dto.user.UserDto.Response;
import server.beerfactory.dto.user.UserDto.Response.ResponseBuilder;
import server.beerfactory.entity.user.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-30T00:38:26+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.4 (Amazon.com Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userPostToUser(Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        User user = new User();

        user.setEmail( requestBody.getEmail() );
        user.setPassword( requestBody.getPassword() );
        user.setNickname( requestBody.getNickname() );
        user.setBirthday( requestBody.getBirthday() );

        return user;
    }

    @Override
    public Response userToUserResponseDto(User user) {
        if ( user == null ) {
            return null;
        }

        ResponseBuilder response = Response.builder();

        response.id( user.getId() );
        response.email( user.getEmail() );
        response.nickname( user.getNickname() );
        response.birthday( user.getBirthday() );

        return response.build();
    }
}
