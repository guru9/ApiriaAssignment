angular.module("emp").config(function ($stateProvider) {

    var fileUpload = {
        name: 'fileUpload',
        url: '/fileUpload',
        templateUrl: 'modules/emp/view_fileUpload.html',
        controller: 'empCtrl'
    }

    var viewEmployee = {
        name: 'viewEmployee',
        url: '/viewEmployee',
        templateUrl: 'modules/emp/view_viewEmployee.html',
        controller: 'empCtrl'
    }

    $stateProvider.state(fileUpload);
    $stateProvider.state(viewEmployee);
});