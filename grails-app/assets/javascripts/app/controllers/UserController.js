app.controller('UserController', function($controller,$rootScope,$scope,$location, UserService) {

        $.extend(this, $controller('BaseController', {$scope: $scope}));

        $scope.signup = function() {
            $scope.submitted = true;
            $scope.errors = {};
            if($scope.userForm.$invalid) {
                console.log('User Form is Invalid');
                return;
            }
            UserService.signup($scope.user).then(function(data) {
                if(data.status == 'success'){
                    $rootScope.message = data.message;
                    $location.path("/user/login");
                } else {
                    $scope.showErrors(data.errors, $scope.userForm);
                }
            }, function(response) {
                $scope.showErrors(response.data, $scope.userForm);
            });

        }

});