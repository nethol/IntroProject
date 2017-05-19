/// <reference path="Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="app.ts"/>
var Config;
(function (Config_1) {
    var app = ClassProject.getModule();
    var Config = (function () {
        function Config($routeProvider) {
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
        return Config;
    }());
    Config.inject = ['$routeProvider'];
    app.config(Config);
})(Config || (Config = {}));
//# sourceMappingURL=config.js.map