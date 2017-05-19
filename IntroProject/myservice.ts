/// <reference path="Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="app.ts"/>

module MyService {
    var app = ClassProject.getModule();
    var name: string = 'world';

    export interface IGreetingServiceType {
        log(msg): void;
        sayHello(): string;
        sayGoodbye(): string;
    }

    export class GreetingService implements IGreetingServiceType {
        constructor() {
            console.log('in GreetingService constructor!!!');
        }

        log(msg): void {
            console.log(msg);
        }

        sayHello(): string {
            return 'hello, ' + name + '!';
        }

        sayGoodbye(): string {
            return 'goodbye, ' + name + '!';
        }
    }

    app.service('greetingService', GreetingService);
}