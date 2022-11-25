//package server.beerfactory.security.auth;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Component;
//import server.beerfactory.entity.user.User;
//import server.beerfactory.exception.BusinessLogicException;
//import server.beerfactory.exception.ExceptionCode;
//import server.beerfactory.repository.User.UserRepository;
//import server.beerfactory.security.utils.BeerfactoryAuthorityUtils;
//
//import java.util.Collection;
//import java.util.Optional;
//
//@RequiredArgsConstructor
//@Component
//public class BeerfactoryUserDetailsService implements UserDetailsService {
//    private final UserRepository userRepository;
//    private final BeerfactoryAuthorityUtils authorityUtils;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Optional<User> optionalUser = userRepository.findByEmail(username);
//        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
//
//        return new BeerfactoryUserDetails(findUser);
//    }
//
//    private final class BeerfactoryUserDetails extends User implements UserDetails {
//        BeerfactoryUserDetails(User user) {
//            setId(user.getId());
//            setEmail(user.getEmail());
//            setPassword(user.getPassword());
//            setNickname(user.getNickname());
//            setRoles(user.getRoles());
//        }
//
//        @Override
//        public Collection<? extends GrantedAuthority> getAuthorities() {
//            return authorityUtils.createAuthorities(this.getRoles());
//        }
//
//        @Override
//        public String getUsername() {
//            return getEmail();
//        }
//
//        @Override
//        public boolean isAccountNonExpired() {
//            return true;
//        }
//
//        @Override
//        public boolean isAccountNonLocked() {
//            return true;
//        }
//
//        @Override
//        public boolean isCredentialsNonExpired() {
//            return true;
//        }
//
//        @Override
//        public boolean isEnabled() {
//            return true;
//        }
//    }
//}
