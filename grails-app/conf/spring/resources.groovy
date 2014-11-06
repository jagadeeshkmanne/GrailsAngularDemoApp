import org.codehaus.groovy.grails.plugins.springsecurity.SpringSecurityUtils

// Place your Spring DSL code here
beans = {

    // begin spring sec
    def springSecurityConfig = SpringSecurityUtils.securityConfig


    // default 'authenticationEntryPoint'
    authenticationEntryPoint(AppAuthenticationEntryPoint) {
        loginFormUrl = springSecurityConfig.auth.loginFormUrl // '/login/auth'
        forceHttps = springSecurityConfig.auth.forceHttps // 'false'
        useForward = springSecurityConfig.auth.useForward // false
        portMapper = ref('portMapper')
        portResolver = ref('portResolver')
    }
}
