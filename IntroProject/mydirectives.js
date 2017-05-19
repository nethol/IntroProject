/// <reference path="Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="app.ts"/>
var MyDirectives;
(function (MyDirectives) {
    var app = ClassProject.getModule();
    var MyName = (function () {
        function MyName($rootScope) {
            this.$rootScope = $rootScope;
            this.restrict = 'E';
            this.scope = {
                name: '@',
                age: '=' // '=' means use the value of the scope
            };
            this.template = '<div>{{ name }} : {{ age }} </div>';
            this.link = function (scope, element, attrs, ngModel) {
                console.log('in MyName link ' + scope.name);
            };
            console.log("in Myname constructor");
        }
        return MyName;
    }());
    var MyButton = (function () {
        function MyButton($rootScope) {
            this.$rootScope = $rootScope;
            this.restrict = "A";
            this.scope = {
                msg: '@',
                action: "&" // '&' connects to the scope function
            };
            this.template = '<button class="btn btn-primary" ng-click="action()">{{ msg }}</button>';
            this.link = function (scope, element, attrs, ngModel) {
                console.log("in MyButton link");
            };
            console.log("in MyButton constructor");
        }
        return MyButton;
    }());
    app.directive("myName", ["$rootScope",
        function ($rootScope) { return new MyName($rootScope); }])
        .directive("myButton", ["$rootScope",
        function ($rootScope) { return new MyButton($rootScope); }]);
})(MyDirectives || (MyDirectives = {}));
//# sourceMappingURL=mydirectives.js.map