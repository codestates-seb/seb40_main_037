package server.beerfactory.mapper.user;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import server.beerfactory.dto.user.UserDto;
import server.beerfactory.entity.user.User;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {
    UserDto.Response userToUserResponseDto(User user);
}
