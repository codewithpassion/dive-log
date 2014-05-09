'use strict';
angular.module('diversModule')
    .controller('DiversController', ['$scope', '$http', function($scope, $http) {
        $http.get('/api/diver/list').success(function(data) {
            $scope.divers = data;
        });
    }]);
