var diverService = angular.module('diverService', ['ngResource']);

diverService.factory('Diver', ['$resource',
    function($resource){
        return $resource('/api/diver/:diverId', {}, {
            query: {method:'GET', params:{diverId:'list'}, isArray:true}
        });
    }]);