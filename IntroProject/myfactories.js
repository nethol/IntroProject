/// <reference path="Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="app.ts"/>
var MyFactories;
(function (MyFactories) {
    var app = ClassProject.getModule();
    var name = 'world';
    function GreetingFactory() {
        console.log('ola k ase');
        return {
            log: function (msg) {
                console.log(msg);
            },
            sayHello: function () {
                return 'hello, ' + name + '!';
            },
            sayGoodbye: function () {
                return 'goodbye, ' + name + '!';
            }
        };
    }
    MyFactories.GreetingFactory = GreetingFactory;
    app.factory('greetingFactory', GreetingFactory);
})(MyFactories || (MyFactories = {}));
//# sourceMappingURL=myfactories.js.map