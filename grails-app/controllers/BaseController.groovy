
class BaseController {
    def springSecurityService
    def messageSource

    protected getLoggedInUserId() {
        springSecurityService.getCurrentUser().id;
    }
	
	protected getLoggedInUser() {
		springSecurityService.getCurrentUser();
	}
}
