//package server.beerfactory.security.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.crypto.factory.PasswordEncoderFactories;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.Arrays;
//
//@Configuration
//public class SecurityConfig {
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http
//                .cors().configurationSource(corsConfigurationSource())
//                .and()
//                .headers().frameOptions().sameOrigin()
//                .and()
//                .csrf().disable()
//                .formLogin()
//                .loginPage("/auths/login-form")
//                .loginProcessingUrl("/process_login")
//                .failureUrl("/auths/login-form?error")
//                .and()
//                .logout()
//                .logoutUrl("/logout")
//                .logoutSuccessUrl("/mainpage")
//                .and()
//                .exceptionHandling().accessDeniedPage("/auths/access-denied")
//                .and()
//                .authorizeHttpRequests(authorize -> authorize
//                        .antMatchers("/users/mypage").hasRole("USER")
//                        .antMatchers("/**").permitAll()
//                );
//
//        return http.build();
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
//    }
//
//    @Bean
//    CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration config = new CorsConfiguration();
//        config.addAllowedOrigin("http://localhost");
//        config.addAllowedHeader("*");
//        config.setAllowedMethods(Arrays.asList("POST","PATCH","GET","DELETE"));
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", config);
//        return source;
//    }
//}
