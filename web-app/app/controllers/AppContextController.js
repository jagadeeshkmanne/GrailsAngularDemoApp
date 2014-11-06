app.controller('AppContextController', function ($controller,$scope,$location,SecurityService) {

    $.extend(this, $controller('BaseController', {$scope: $scope}));

    $scope.getLoggedInUser = function() {
        return SecurityService.getLoggedInUser()
    }

    $scope.isLoggedIn = function() {
        return SecurityService.isLoggedIn()
    }
})
