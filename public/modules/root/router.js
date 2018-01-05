angular.module("app").config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/home');

    var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: 'modules/root/view_home.html'
    }

    $stateProvider.state(homeState);
});