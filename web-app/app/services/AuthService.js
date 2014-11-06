app.factory('AuthService', function ($http,$location, SecurityService) {
    var factory = {};

    factory.login = function(user) {
        var payload = $.param({j_username: user.username, j_password: user.password});
        var config = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        };
       return $http.post('j_spring_security_check', payload, config).success(function(data) {

       });
	}

    factory.logout = function() {
        return $http.put('j_spring_security_logout', {}).success(function() {
        });
	}

    return factory;
})