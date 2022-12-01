//package server.beerfactory.security.auth;
//
//import lombok.Builder;
//import lombok.Getter;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Component;
//import org.springframework.stereotype.Service;
//import server.beerfactory.entity.user.User;
//import server.beerfactory.exception.BusinessLogicException;
//import server.beerfactory.exception.ExceptionCode;
//import server.beerfactory.repository.user.UserRepository;
//
//import java.util.ArrayList;
//import java.util.Collection;
//import java.util.Optional;
//
//@RequiredArgsConstructor
//@Service
//public class BeerfactoryUserDetailsService implements UserDetailsService {
//
//    private final UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Optional<User> optionalUser = userRepository.findByEmail(username);
//        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
//
//        return new BeerfactoryUserDetails(findUser);
//    }
//
//    @RequiredArgsConstructor
//    @Getter
//    @Builder
//    private static final class BeerfactoryUserDetails extends User implements UserDetails {
//
//        private static final long serialVersionUID = 1L;
//
//        private User user;
//
//        public BeerfactoryUserDetails(User user){
//            this.user = user;
//        }
//
//        @Override
//        public Collection<? extends GrantedAuthority> getAuthorities() {
//            Collection<GrantedAuthority> collector = new ArrayList<>();
//            collector.add(() -> user.getRole());
//            return collector;
//        }
//
//        @Override
//        public String getPassword(){
//            return user.getPassword();
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
