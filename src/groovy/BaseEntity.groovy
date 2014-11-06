
abstract class BaseEntity implements Serializable{
	
	transient springSecurityService
	
    def Long version
    def Date createdOn
    def Date updatedOn
    def Long createdBy
    def Long updatedBy


    static constraints = {
		version display:false
		createdOn display:false
		updatedOn display:false
		createdBy display:false
		updatedBy display:false
    }

    static mapping = {
        id generator: 'identity'
        sort updatedOn:'desc'
    }

    def beforeInsert() {
        initDefaults()
        return true
    }

    def beforeUpdate() {
		def currentUser = springSecurityService.getCurrentUser()
        updatedBy = currentUser ? currentUser.id : 0;
        updatedOn = new Date();
    }

    def beforeValidate() {
        initDefaults()
        return true
    }

    def afterInsert = {
    }
    def afterUpdate = {
    }
    def afterDelete = {
    }

    def onLoad = {
    }
    def afterLoad = {
    }

    protected initDefaults() {
		def currentUser = springSecurityService.getCurrentUser()
        if (createdBy == null) {
            createdBy = currentUser? currentUser.id : 0;
        }
        if (createdOn == null) {
            createdOn = new Date();
        }
        if (updatedBy == null) {
            updatedBy = currentUser? currentUser.id : 0;
        }
        if (updatedOn == null) {
            updatedOn = new Date();
        }
    }
}


