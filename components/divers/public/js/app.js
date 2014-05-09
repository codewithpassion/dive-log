'use strict';
var app =
    angular.module('diversModule', ['ngRoute', 'diverService', 'xeditable'])
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

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3';
});