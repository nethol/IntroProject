/// <reference path="Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="app.ts"/>

module MyFactories {
    var app = ClassProject.getModule();
    var name: string = 'world';

    export interface GreetingFactoryType {
        log(msg): void;
        sayHello(): string;
        sayGoodbye(): string;
    }

    export function GreetingFactory(): GreetingFactoryType {
        console.log('ola k ase');

        return {

            log(msg): void {
                console.log(msg);
            },

            sayHello(): string {
                return 'hello, ' + name + '!';
            },

            sayGoodbye(): string {
                return 'goodbye, ' + name + '!';
            }
        }
    }

    app.factory('greetingFactory', GreetingFactory);

}