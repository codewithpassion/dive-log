'use strict';
angular.module('diversModule', ['ngRoute', 'diverService'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider) {
        $routeProvider
            .when('/divers', {
                templateUrl: '/partial/divers/divers',
                controller: 'DiversController'
            })
            .when('/divers/:diverId', {
                templateUrl: '/partial/divers/diverDetail',
                controller: 'DiverDetailController'
            })
            .otherwise({ redirectTo: '/divers' })
    }]);