package server.beerfactory.mapper.auth;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import server.beerfactory.dto.auth.AuthDto;
import server.beerfactory.entity.user.User;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AuthMapper {
    User authSignupToUser(AuthDto.Signup requestBody);
    AuthDto.Response userToAuthResponseDto(User user);
}
