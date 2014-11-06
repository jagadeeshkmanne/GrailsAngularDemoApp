import javax.servlet.ServletException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import org.springframework.http.HttpStatus
import org.springframework.security.core.AuthenticationException
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint

class AppAuthenticationEntryPoint extends LoginUrlAuthenticationEntryPoint {
    def defaultUrl
    def requestCache

    @Override
    protected String determineUrlToUseForThisRequest(final HttpServletRequest request,
                                                     final HttpServletResponse response, final AuthenticationException e) {
        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        if(requestCache) {
            def savedUrl = requestCache.getRequest(request, response)?.redirectUrl
            if (defaultUrl && !savedUrl) {
                return defaultUrl;
            }
        }
        return getLoginFormUrl();
    }

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException)
            throws IOException, ServletException {
        response.setStatus(HttpStatus.UNAUTHORIZED.value());
    }

}