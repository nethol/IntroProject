/// <reference path="Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="app.ts"/>

module NewPage {
    'use strict';

    var app: ng.IModule = ClassProject.getModule();

    interface INewPageScope extends ng.IScope {
        title: string;
        myAction: () => void;
    }

    class NewPageCtrl {
        static inject = ["$scope"];

        constructor($scope: INewPageScope) {
            $scope.title = "This is a newpage.html";

            $scope.myAction = () => {
                alert("this is my action");
            };
        }
    }

    app.controller("NewPageCtrl", ["$scope", NewPageCtrl]);
}