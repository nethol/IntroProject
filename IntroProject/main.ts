/// <reference path="Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="app.ts"/>

module Main {
    'use strict';

    var app = ClassProject.getModule();

    interface IMainScope extends ng.IScope {
        greeting1: string;
        greeting2: string;
        setGreeting1(s): void;
        setGreeting2(s): void;
        age: number;
        myAction: () => void;

    }

    // Factory:
    //class MainCtrl {
    //    static inject = ['$scope', 'greetingFactory'];

    //    constructor($scope: IMainScope, greetingFactory: MyFactories.GreetingFactoryType) {
    //        $scope.greeting1 = greetingFactory.sayHello();
    //        $scope.greeting2 = greetingFactory.sayGoodbye();

    //        $scope.setGreeting1 = (s) => {
    //            $scope.greeting1 = s;
    //        }

    //        $scope.setGreeting2 = (s) => {
    //            $scope.greeting2 = s;
    //        }

    //        greetingFactory.log('logging this message...');
    //    }
    //}

    // app.controller('MainCtrl', ['$scope', 'greetingFactory', MainCtrl]);

    // Service:
    //class MainCtrl {
    //    static inject = ['$scope', 'greetingService'];

    //    constructor($scope: IMainScope, greetingService: MyService.IGreetingServiceType) {
    //        $scope.greeting1 = greetingService.sayHello();
    //        $scope.greeting2 = greetingService.sayGoodbye();

    //        $scope.setGreeting1 = (s) => {
    //            $scope.greeting1 = s;
    //        }

    //        $scope.setGreeting2 = (s) => {
    //            $scope.greeting2 = s;
    //        }

    //        greetingService.log('logging this message...');
    //    }
    //}

    //app.controller('MainCtrl', ['$scope', 'greetingService', MainCtrl]);

    // Provider
    //class MainCtrl {
    //    static inject = ['$scope', 'logProvider'];

    //    constructor($scope: IMainScope, logProvider: MyProvider.ILogProviderType) {
    //        $scope.greeting1 = 'hi';
    //        $scope.greeting2 = 'bye';

    //        $scope.setGreeting1 = (s) => {
    //            $scope.greeting1 = s;
    //            logProvider.log('changed greeting1 to '+ s, 'warn');
    //        }

    //        $scope.setGreeting2 = (s) => {
    //            $scope.greeting2 = s;
    //            logProvider.log('changed greeting2 to ' + s, 'warn');
    //        }

    //        logProvider.log('hello, world', 'warn');
    //    }
    //}

    //app
    //    // must use suffix 'Provider'
    //    .config((logProviderProvider: MyProvider.LogProvider) => {
    //        logProviderProvider.setPrefix('in main.ts');
    //    })
    //    .controller('MainCtrl', ['$scope', 'logProvider', MainCtrl]);

    // Provider and service
    class MainCtrl {
        static inject = ['$scope', 'logProvider', 'greetingService'];

        constructor($scope: IMainScope, logProvider: MyProvider.ILogProviderType, greetingService: MyService.IGreetingServiceType) {
            $scope.age = 29;
            $scope.myAction = () => {
                alert("My action!");
            };
            $scope.greeting1 = greetingService.sayHello();
            $scope.greeting2 = greetingService.sayGoodbye();

            $scope.setGreeting1 = (s) => {
                $scope.greeting1 = s;
                logProvider.log('changed greeting1 to ' + s, 'warn');
            }

            $scope.setGreeting2 = (s) => {
                $scope.greeting2 = s;
                logProvider.log('changed greeting2 to ' + s, 'warn');
            }

            logProvider.log('hello, world', 'warn');
            logProvider.log('goodbye, world', 'error');
        }
    }

    app
        // must use suffix 'Provider'
        .config((logProviderProvider: MyProvider.LogProvider) => {
            logProviderProvider.setPrefix('in main.ts');
        })
        .controller('MainCtrl', ['$scope', 'logProvider', 'greetingService', MainCtrl]);

    // Directives

    //interface IMainScope extends ng.IScope {
    //    age: number;
    //    myAction: () => void;
    //}

    //class MainCtrl {
    //    static inject = ["$scope"];

    //    constructor($scope: IMainScope) {
    //        $scope.age = 29;
    //        $scope.myAction = () => {
    //            alert("My action!");
    //        };
    //    }
    //}

    //app.controller('MainCtrl', ['$scope', MainCtrl]);    
}

