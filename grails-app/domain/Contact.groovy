class Contact extends BaseEntity {

	String name
	String email
	String mobile

	static constraints = {
		name blank: false, size: 5..25
		email blank: false, unique: true, email: true
		mobile blank: false
	}
}
