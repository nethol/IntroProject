/// <reference path="Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="app.ts"/>
var MyService;
(function (MyService) {
    var app = ClassProject.getModule();
    var name = 'world';
    var GreetingService = (function () {
        function GreetingService() {
            console.log('in GreetingService constructor!!!');
        }
        GreetingService.prototype.log = function (msg) {
            console.log(msg);
        };
        GreetingService.prototype.sayHello = function () {
            return 'hello, ' + name + '!';
        };
        GreetingService.prototype.sayGoodbye = function () {
            return 'goodbye, ' + name + '!';
        };
        return GreetingService;
    }());
    MyService.GreetingService = GreetingService;
    app.service('greetingService', GreetingService);
})(MyService || (MyService = {}));
//# sourceMappingURL=myservice.js.map