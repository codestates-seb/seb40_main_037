package server.beerfactory.mapper.User;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import server.beerfactory.dto.user.UserDto;
import server.beerfactory.entity.user.User;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {
    User userPostToUser(UserDto.Post requestBody);
    UserDto.Response userToUserResponseDto(User user);
}
