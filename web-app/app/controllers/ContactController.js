app.controller('ContactController', function ($controller,$rootScope, $scope,$location,$routeParams,ContactService, action) {

    $.extend(this, $controller('BaseController', {$scope: $scope}));

    $scope.contacts = [];

    $scope.list = function(){
        ContactService.list().then(function(contacts){
            $scope.contacts = contacts;
        });
    }

    $scope.save = function() {
        $scope.submitted = true;
        $scope.errors = {};
        if($scope.contactForm.$invalid) {
            console.log('Contact Form is Invalid');
            return;
        }
        ContactService.save($scope.contact).then(function(data) {
            if(data.status == 'success'){
                $scope.message = data.message;
                $location.path("/contact/list");
            } else {
                $scope.showErrors(data.errors, $scope.contactForm);
            }
        }, function(response) {
            $scope.showErrors(response.data, $scope.contactForm);
        });

    }

    $scope.edit = function(contactId) {
        ContactService.edit(contactId).then(function(contact){
            $scope.contact = contact;
        });
    }

    $scope.delete = function(contactId) {
        ContactService.delete(contactId).then(function(data){
            $scope.message = data.message;
            $location.path("/contact/list");
        });
    }

    $scope.details = function(contactId) {
        ContactService.details(contactId).then(function(contact){
            $scope.contact = contact;
        });
    }

    if(action == 'list') {
        $scope.list()
    }

    if(action == 'edit') {
        $scope.edit($routeParams.contactId)
    }

    if(action == 'delete') {
        $scope.delete($routeParams.contactId)
    }

    if(action == 'details') {
        $scope.details($routeParams.contactId)
    }
})
