"use strict";
var dependencies = window.getNgModules();
dependencies.push('ngRoute');

angular.module('diveLogApp', dependencies)
    .controller('MainController', ['$scope', function($scope) {
        $scope.greeting = 'World!';
    }])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {templateUrl: 'partial/index', controller: 'MainController'});

        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);
    }]);;
