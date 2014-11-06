'use strict';
var app = angular.module('app', ['ngRoute','ngAnimate','ngCookies']);

app.run(function($rootScope, $location, SecurityService) {
    $rootScope.goto = function (hash) {
        $location.path(hash);
    }
})

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                redirectTo: '/user/login'
            })

            .when('/user/signup', {
                templateUrl: 'static/app/views/signup.html',
                controller: 'UserController',
            })
            .when('/user/login', {
                templateUrl: 'static/app/views/login.html',
                controller: 'UserController',
            })
            .when('/contact/list', {
                templateUrl: 'static/app/views/list.html',
                controller: 'ContactController',
                resolve: {
                    action: function(){return 'list';}
                }
            })
            .when('/contact/add', {
                templateUrl: 'static/app/views/contact.html',
                controller: 'ContactController',
                resolve: {
                    action: function(){return 'add';}
                }
            })
            .when('/contact/edit/:contactId', {
                templateUrl: 'static/app/views/contact.html',
                controller: 'ContactController',
                resolve: {
                    action: function(){return 'edit';}
                }
            })
            .when('/contact/delete/:contactId', {
                templateUrl: 'static/app/views/list.html',
                controller: 'ContactController',
                resolve: {
                    action: function(){return 'delete';}
                }
            })
            .when('/contact/details/:contactId', {
                templateUrl: 'static/app/views/details.html',
                controller: 'ContactController',
                resolve: {
                    action: function(){return 'details';}
                }
            })
 }]);

 app.config(function($httpProvider,$provide) {
     $provide.factory('authHttpInterceptor', function($q,$location,$rootScope) {
         return {
             // optional method
             'request': function(config) {
                 // do something on success
                 return config;
             },

             // optional method
             'requestError': function(rejection) {
                 return $q.reject(rejection);
             },

             // optional method
             'response': function(response) {
                 return response;
             },

             // optional method
             'responseError': function(response) {
                 if (response.status === 401) {
                     var deferred = $q.defer();
                     $rootScope.message = "Please login to access"
                     $location.path("/")
                     return deferred.promise;
                 }
                 // otherwise
                 return $q.reject(response);
             }
         };
     });

     $httpProvider.interceptors.push('authHttpInterceptor');
});