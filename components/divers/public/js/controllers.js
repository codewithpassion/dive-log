'use strict';
angular.module('diversModule')
    .controller('DiversController', ['$scope', 'Diver', function($scope, Diver) {
        $scope.divers = Diver.query();
    }])
    .controller('DiverDetailController', ['$scope', '$routeParams', 'Diver', function($scope, $routeParams, Diver) {
        $scope.diver = Diver.get({diverId: $routeParams.diverId});

        $scope.save = function() {
            Diver.save($scope.diver);
            // $scope.user already updated!
/*            return $http.post('/saveUser', $scope.user).error(function (err) {
                if (err.field && err.msg) {
                    // err like {field: "name", msg: "Server-side error for this username!"}
                    $scope.editableForm.$setError(err.field, err.msg);
                } else {
                    // unknown error
                    $scope.editableForm.$setError('name', 'Unknown error!');
                }
            });*/

        };
    }]);
