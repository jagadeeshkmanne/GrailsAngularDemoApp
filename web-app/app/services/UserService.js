app.service('UserService', function ($http) {
    var factory = {};

    factory.signup = function(user) {
        return $http.post('user/signup', user).then(function(result) {
            return result.data;
        });
	}
    return factory;

})
