'use strict';
angular.module('diversModule')
    .controller('DiversController', ['$scope', 'Diver', function($scope, Diver) {
        $scope.divers = Diver.query();
    }])
    .controller('DiverDetailController', ['$scope', '$routeParams', 'Diver', function($scope, $routeParams, Diver) {
        $scope.diver = Diver.get({diverId: $routeParams.diverId});
    }]);
