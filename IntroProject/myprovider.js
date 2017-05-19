/// <reference path="Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="app.ts"/>
var MyProvider;
(function (MyProvider) {
    var app = ClassProject.getModule();
    var LogProvider = (function () {
        function LogProvider() {
            this.prefix = "";
        }
        LogProvider.prototype.setPrefix = function (prefix) {
            this.prefix = prefix;
        };
        LogProvider.prototype.$get = function () {
            var _this = this;
            return {
                log: function (message, severity) {
                    console.log(_this.prefix + ' : [' + severity + '] ' + message);
                }
            };
        };
        return LogProvider;
    }());
    MyProvider.LogProvider = LogProvider;
    app.provider('logProvider', LogProvider);
})(MyProvider || (MyProvider = {}));
//# sourceMappingURL=myprovider.js.map