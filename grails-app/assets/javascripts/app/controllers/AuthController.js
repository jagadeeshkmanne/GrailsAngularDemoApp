app.controller('AuthController', function ($controller,$rootScope,$scope,$location,$routeParams,AuthService,SecurityService) {

    $.extend(this, $controller('BaseController', {$scope: $scope}));

    $scope.login = function() {
        $scope.submitted = true;
        $scope.errors = {};
        if($scope.userLoginForm.$invalid) {
            console.log('User Login Form is Invalid');
            return;
        }
        AuthService.login($scope.user).then(function(res) {
            if(res.data.error){
                $rootScope.message = res.data.error
                $location.path("/");
                SecurityService.setLoggedInUser(null);
            } else {
                $rootScope.message = res.message;
                $location.path("/contact/list");
                SecurityService.setLoggedInUser($scope.user);
                console.log(SecurityService.getLoggedInUser());
            }
        }, function(response) {
            SecurityService.setLoggedInUser(null);
        });

    }

    $scope.logout = function() {
        AuthService.logout().then(function(data) {
            SecurityService.setLoggedInUser(null);
            $location.path("/");

        }, function(response) {

        });

    }
})