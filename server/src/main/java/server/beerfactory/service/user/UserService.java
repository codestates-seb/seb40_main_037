//package server.beerfactory.service.user;
//
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//import server.beerfactory.entity.user.User;
//import server.beerfactory.exception.BusinessLogicException;
//import server.beerfactory.exception.ExceptionCode;
//import server.beerfactory.repository.user.UserRepository;
//
//import java.util.Optional;
//
///**
// * 임시 작업
// * 시큐리티 적용 전 (회원가입, 로그인 기능 제외)
// * requestBody에 유저 정보를 작성하여 DB에 저장, 조회
// * 시큐리티 구현 후 전체 로직 수정 예정
// */
//@RequiredArgsConstructor
//@Transactional
//@Service
//@Slf4j
//public class UserService {
//    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;
////    private final BeerfactoryAuthorityUtils authorityUtils;
//
//    public User createUser(User user) {
//        verifyExistsEmail(user.getEmail());
//
//        String encryptedPassword = passwordEncoder.encode(user.getPassword());
//        user.setPassword(encryptedPassword);
//
//        user.setRole("ROLE_USER");
//        return userRepository.save(user);
//    }
//
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
//
////    public User findUser(String email) {
////        return findVerifiedUser(email);
////    }
////
////    private User findVerifiedUser(String email) {
////        Optional<User> optionalUser = userRepository.findByEmail(email);
////        User findUser = optionalUser.orElseThrow(() ->
////                new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
////        return findUser;
////    }
//
//    private void verifyExistsEmail(String email) {
//        Optional<User> user = userRepository.findByEmail(email);
//        if (user.isPresent())
//            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
//    }
//}
