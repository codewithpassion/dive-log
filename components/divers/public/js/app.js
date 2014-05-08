'use strict';
angular.module('diversModule', ['ngRoute'])
    .controller('DiverController', ['$scope', function($scope) {
        $scope.greeting = 'World!';
    }])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.when('/divers', {templateUrl: 'partial/divers/diver', controller: 'DiverController'});
    }]);