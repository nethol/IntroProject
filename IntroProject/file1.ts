/// <reference path="Scripts/typings/angularjs/angular.d.ts"/>

//class MainCtrl {
//    static inject = ['$scope'];

//    constructor($scope) {
//        $scope.greeting1 = 'hello, world';
//        $scope.greeting2 = 'AngularJS and TypeScript';
//    }
//}

//class Run {
//    static inject = ['$rootScope'];

//    constructor($rootScope) {
//        console.log('Running...');
//        console.log($rootScope);
//    }
//}


//class Config {
//    static inject = ['$routeProvider'];

//    constructor($routeProvider) {
//        $routeProvider
//            .when('/',
//            {
//                templateUrl: 'main.html',
//                controller: 'MainCtrl'
//            }
//            )
//            .otherwise({
//                redirectTo: '/'
//            });
//    }
//}

//angular.module('classProjectApp', ['ngRoute'])
//    .config(Config)
//    .run(Run)
//    .controller("MainCtrl", ["$scope", MainCtrl]);