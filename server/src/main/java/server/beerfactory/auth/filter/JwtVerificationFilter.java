package server.beerfactory.auth.filter;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import server.beerfactory.auth.jwt.JwtTokenizer;
import server.beerfactory.auth.utils.CustomAuthorityUtils;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
public class JwtVerificationFilter extends OncePerRequestFilter {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        try {
            Map<String, Object> claims = verifyJws(request);
            setAuthenticationToContext(claims);
        } catch (SignatureException se) {
            request.setAttribute("exception", se);
        } catch (ExpiredJwtException ee) {
            request.setAttribute("exception", ee);
        } catch (Exception e) {
            request.setAttribute("exception", e);
        }
        // exception을 throw하지 않고 단순히 HttpServletRequest의 attribute에 추가한다.
        // SecurityContext에 클라이언트의 인증 정보(Authentication 객체)가 저장되지 않은 상태로 다음 Filter로 넘어간다.
        // 다음 Filter에서 결국 AuthenticationException 발생

        filterChain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String authorization = request.getHeader("Authorization");

        // 헤더에 JWT가 없다면, JWT 자격증명이 필요없는 리소스 요청이라 판단하여 다음 Filter로 건너뛴다.
        // 만약 JWT 자격증명이 필요한 리소스 요청이었다면, 다른 Filter를 거치면서 결국 Exception을 던진다.
        return authorization == null || !authorization.startsWith("Bearer");
    }

    // JWT 검증 (jws: json web token signed)
    private Map<String, Object> verifyJws(HttpServletRequest request) {
        String jws = request.getHeader("Authorization").replace("Bearer ", "");
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        // claims(토큰에 포함된 사용자 정보)를 파싱할 수 있다는 의미 = signature(서명) 검증에 성공했다는 의미
        return jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();
    }

    // Authentication 객체를 SecurityContext에 저장
    private void setAuthenticationToContext(Map<String, Object> claims) {
        String username = (String) claims.get("username");
        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((List)claims.get("roles"));
        Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
