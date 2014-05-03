'use strict';


// Declare app level module which depends on filters, and services
angular.module('diveLogApp', ['diveLogApp.filters', 'diveLogApp.services', 'diveLogApp.directives','ngRoute']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.when('/view1', {templateUrl: 'partial/1', controller: MyCtrl1});
        $routeProvider.when('/view2', {templateUrl: 'partial/2', controller: MyCtrl2});
        $routeProvider.otherwise({redirectTo: '/view1'});
        $locationProvider.html5Mode(true);
    }]);