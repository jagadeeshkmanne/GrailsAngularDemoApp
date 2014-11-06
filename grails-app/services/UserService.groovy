
class UserService  extends BaseService{
	
	def save(User user){
		user.save(flush: true);
		log.info "User ${user.id} registered"
	}

}
