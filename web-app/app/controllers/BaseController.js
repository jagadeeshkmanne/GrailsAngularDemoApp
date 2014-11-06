app.controller('BaseController', function($scope) {

        $scope.getErrors = function(form, field) {

            if(form[field].$error && form[field].$error.required) {
                return field.substr(0, 1).toUpperCase() + field.substr(1) + " is Required.";
            }
            if($scope.errors && $scope.errors[field]) {
                return $scope.errors[field];
            }
        };

        $scope.clearError = function(form, field){
            form[field].$setValidity('server', true);
        }

        $scope.hasErrors = function(form, field) {
            return form[field].$invalid && (form[field].$dirty || $scope.submitted);
        };

        $scope.showErrors = function(errors, form) {
            $scope.errors = {}; // clean up server errors
            angular.forEach(errors, function(error) {
                console.log(error)
                var field = error.field;
                // tell the form that field is invalid
                form[field].$setValidity('server', false);
                // keep the error messages from the server
                $scope.errors[field] = error.message;
            });
        };

});