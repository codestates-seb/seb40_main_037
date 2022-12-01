package server.beerfactory.auth.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import server.beerfactory.auth.filter.JwtAuthenticationFilter;
import server.beerfactory.auth.filter.JwtVerificationFilter;
import server.beerfactory.auth.handler.UserAccessDeniedHandler;
import server.beerfactory.auth.handler.UserAuthenticationEntryPoint;
import server.beerfactory.auth.handler.UserAuthenticationFailureHandler;
import server.beerfactory.auth.handler.UserAuthenticationSuccessHandler;
import server.beerfactory.auth.jwt.JwtTokenizer;
import server.beerfactory.auth.utils.CustomAuthorityUtils;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@RequiredArgsConstructor
@Configuration
public class SecurityConfig {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
//                .cors().configurationSource(corsConfigurationSource())
                .cors(withDefaults()) // corsConfigurationSource Bean을 이용함
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new UserAuthenticationEntryPoint())
                .accessDeniedHandler(new UserAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .logout()
                .logoutUrl("/auth/logout")
                .logoutSuccessUrl("/mainpage")
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers("/users/mypage").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/users/**").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/beers").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PATCH, "/beers/**").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/beers/**").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/beerReviews").hasAnyRole("ADMIN", "USER")
                        .antMatchers(HttpMethod.PATCH, "/beerReviews/**").hasAnyRole("ADMIN", "USER")
                        .antMatchers(HttpMethod.DELETE, "/beerReviews/**").hasAnyRole("ADMIN", "USER")
                        .antMatchers(HttpMethod.POST, "/api/**").hasAnyRole("ADMIN", "USER")
                        .antMatchers(HttpMethod.POST, "/mixes").hasAnyRole("ADMIN", "USER")
                        .antMatchers(HttpMethod.PATCH, "/mixes/**").hasAnyRole("ADMIN", "USER")
                        .antMatchers(HttpMethod.DELETE, "/mixes/**").hasAnyRole("ADMIN", "USER")
                        .anyRequest().permitAll()
                );
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    // CORS 정책 설정
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(Arrays.asList("*"));
        config.setAllowedMethods(Arrays.asList("POST", "PATCH", "GET", "DELETE"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/auth/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}
