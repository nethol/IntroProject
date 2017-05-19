/// <reference path="Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="app.ts"/>

module MyProvider {
    var app: ng.IModule = ClassProject.getModule();

    export interface ILogProviderType {
        log(message: string, severity: string);
    }

    export class LogProvider implements ng.IServiceProvider {
        private prefix = "";

        public setPrefix(prefix: string) {
            this.prefix = prefix;
        }

        public $get(): ILogProviderType {
            return {
                log: (message: string, severity: string) => {
                    console.log(this.prefix + ' : [' + severity + '] ' + message);
                }
            }
        }
    }

    app.provider('logProvider', LogProvider);
}