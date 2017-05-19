/// <reference path="Scripts/typings/angularjs/angular.d.ts"/>

module ClassProject {
    'use strict';

    angular.module('classProjectApp', ['ngRoute']);

    export var getModule: () => ng.IModule = () => {
        return angular.module('classProjectApp');
    }
}