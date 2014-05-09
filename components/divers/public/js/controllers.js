'use strict';
angular.module('diversModule')
    .controller('DiversController', ['$scope', function($scope) {
        $scope.divers = [
            { name: "John Doe", email: "john.doe@gmail.com" },
            { name: "Dom Fretz", email: "info@divewithpassion.com" }
        ]
    }]);
