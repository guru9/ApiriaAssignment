angular.module("emp").controller('empCtrl', function ($scope, $http) {

    $http({
        method: 'GET',
        url: '/allEmployees'
    }).then(function successCallback(response) {
        console.log('sync data---', response.data)
        $scope.employees = response.data;
    }, function errorCallback(response) {
        console.log('sync error---', response)
    });

});