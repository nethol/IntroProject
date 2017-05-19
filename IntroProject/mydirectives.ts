/// <reference path="Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="app.ts"/>

module MyDirectives {
    var app: ng.IModule = ClassProject.getModule();

    class MyName implements ng.IDirective {
        public restrict: string = 'E';
        public scope = {
            name: '@',  // '@' means use the value of the attribute
            age: '='    // '=' means use the value of the scope
        };

        public template: string = '<div>{{ name }} : {{ age }} </div>';

        constructor(private $rootScope: ng.IRootScopeService) {
            console.log("in Myname constructor");
        }

        public link: ng.IDirectiveLinkFn = (scope: ng.IScope, element: ng.IAugmentedJQuery,
            attrs: ng.IAttributes, ngModel: any) => {
            console.log('in MyName link ' + scope.name);
        }
    }

    class MyButton implements ng.IDirective {
        public restrict: string = "A";
        public scope = {
            msg: '@',
            action: "&"     // '&' connects to the scope function
        };

        public template: string = '<button class="btn btn-primary" ng-click="action()">{{ msg }}</button>';

        constructor(private $rootScope: ng.IRootScopeService) {
            console.log("in MyButton constructor");
        }

        public link: ng.IDirectiveLinkFn = (scope: ng.IScope,
            element: ng.IAugmentedJQuery,
            attrs: ng.IAttributes,
            ngModel: any) => {
            console.log("in MyButton link");
        }
    }


    app.directive("myName", ["$rootScope",
            ($rootScope: ng.IRootScopeService) => new MyName($rootScope)])
        .directive("myButton", ["$rootScope",
            ($rootScope: ng.IRootScopeService) => new MyButton($rootScope)]);
}