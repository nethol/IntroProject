/// <reference path="Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="app.ts"/>
var NewPage;
(function (NewPage) {
    'use strict';
    var app = ClassProject.getModule();
    var NewPageCtrl = (function () {
        function NewPageCtrl($scope) {
            $scope.title = "This is a newpage.html";
            $scope.myAction = function () {
                alert("this is my action");
            };
        }
        return NewPageCtrl;
    }());
    NewPageCtrl.inject = ["$scope"];
    app.controller("NewPageCtrl", ["$scope", NewPageCtrl]);
})(NewPage || (NewPage = {}));
//# sourceMappingURL=newpage.js.map