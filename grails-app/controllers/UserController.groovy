import grails.converters.JSON
import org.codehaus.groovy.grails.plugins.web.taglib.ValidationTagLib

class UserController {

	def userService;
	
    def signup() {
        def user = new User(request.JSON)
        def res = [:]
		if(!user.validate()) {
            def errors = renderErrors(user.errors)
            res.status = "error"
            res.errors = errors
            render res as JSON
            return
		}
		userService.save(user)
        res.status = "success"
        res.message = "Account Created Successfully"
        render res as JSON
    }

    private static def renderErrors(allErrors) {
        def g = new ValidationTagLib()
        def errors = []
        allErrors.fieldErrors.each { error ->
            println "=== $error"
            errors.add([
                    'field' : error.field,
                    'rejected_value' : error.rejectedValue,
                    'message' : g.message(error: error)
            ])
        }
        return errors
    }
}
