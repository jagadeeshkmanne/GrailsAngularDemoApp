class ErrorController extends BaseController {

    def forbidden() {
		render view : "/error",model:[errorMsg : "Forbidden"]
    }

    def notFound() {
		render view : "/error",model:[errorMsg : "Page not found"]
    }

    def serverError() {
		render view : "/error",model:[errorMsg : "Internal Server Error"]
    }
	
	def accessDenied(){
		redirect controller : "login", action : "auth"
	}
    
}
