package server.beerfactory.auth.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
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

@RequiredArgsConstructor
@Configuration
public class SecurityConfig {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors().configurationSource(corsConfigurationSource())
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .logout()
                .logoutUrl("/auth/logout")
                .logoutSuccessUrl("/mainpage")
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(new UserAuthenticationEntryPoint())
                .accessDeniedHandler(new UserAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers("/users/mypage").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/bookmark/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/bookmark").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/users/**").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/beers").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PATCH, "/beers/**").hasRole("ADMIN")
                        .antMatchers(HttpMethod.DELETE, "/beers/**").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/beer/reviews").hasAnyRole("ADMIN", "USER")
                        .antMatchers(HttpMethod.PATCH, "/beer/reviews/**").hasAnyRole("ADMIN", "USER")
                        .antMatchers(HttpMethod.DELETE, "/beer/reviews/**").hasAnyRole("ADMIN", "USER")
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

    // CORS ?????? ??????
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedHeader("*");
        config.addExposedHeader("Authorization");
        config.addExposedHeader("Refresh");
        config.addAllowedOriginPattern("*");
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
