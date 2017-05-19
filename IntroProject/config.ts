/// <reference path="Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="app.ts"/>

module Config {
    var app: ng.IModule = ClassProject.getModule();

    class Config {
        static inject = ['$routeProvider'];

        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when('/newpage', {
                    templateUrl: 'newpage.html',
                    controller: 'NewPageCtrl'
                })
                .when('/', {
                    templateUrl: 'main.html',
                    controller: 'MainCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    }

    app.config(Config);
}