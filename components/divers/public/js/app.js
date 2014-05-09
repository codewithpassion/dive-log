'use strict';
angular.module('diversModule', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider) {
        $routeProvider.when('/divers', {templateUrl: 'partial/divers/divers', controller: 'DiversController'});
    }]);