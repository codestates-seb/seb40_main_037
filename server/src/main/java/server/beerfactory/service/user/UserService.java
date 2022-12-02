package server.beerfactory.service.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.beerfactory.entity.user.User;
import server.beerfactory.exception.BusinessLogicException;
import server.beerfactory.exception.ExceptionCode;
import server.beerfactory.repository.user.UserRepository;
import server.beerfactory.auth.utils.CustomAuthorityUtils;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Transactional
@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public User createUser(User user) {
        verifyExistsEmail(user.getEmail());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);

        return userRepository.save(user);
    }

    public User findUser(String email) {
        return findVerifiedUser(email);
    }

    private User findVerifiedUser(String email) {
        Optional<User> optionalUser = userRepository.findByEmail(email);

        return optionalUser.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
    }

//    public User findUser(Long id) {
//        return findVerifiedUser(id);
//    }
//
//    private User findVerifiedUser(Long id) {
//        Optional<User> optionalUser = userRepository.findById(id);
//
//        return optionalUser.orElseThrow(() ->
//                new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
//    }

    private void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }
}
