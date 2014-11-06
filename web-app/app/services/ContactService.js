app.factory('ContactService', function ($http,$location) {
   var factory = {};

    factory.list = function() {
       return $http.get('contact/list').then(function (results) {
          return results.data;
       });
	}

    factory.save = function(contact) {
        return $http.post('contact/save', contact).then(function(result) {
            return result.data;
        });
	}

    factory.edit = function(contactId) {
        return $http.get('contact/edit/'+contactId).then(function (results) {
            return results.data;
        });
	}

    factory.delete = function(contactId) {
        return $http.delete('contact/delete/'+contactId).then(function (results) {
            return results.data;
        });
    }

    factory.details = function(contactId) {
        return $http.get('contact/details/'+contactId).then(function (results) {
            return results.data;
        });
	}
    return factory;
})
