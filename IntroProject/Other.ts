/// <reference path="Scripts/typings/angularjs/angular.d.ts"/>

console.log('this is other.ts');

angular.module('classProjectApp', ['ngRoute'])
    .config(function ($routeProvider) {
        console.log('in config()');
    });


//class Person {
//    static planet = "Earth";
//    private _firstName: string;
//    private _lastName: string;
//    private _age: number;

//    constructor(firstName, lastName, age) {
//        this._firstName = firstName;
//        this._lastName = lastName;
//        this._age = age;
//    }

//    display() {
//        console.log("person:", this._firstName, this._lastName, "is", this._age, "years old");
//    }

//    get firstName(): string {
//        return this._firstName;
//    }

//    set firstName(firstName: string) {
//        this._firstName = firstName;
//    }
//}

//var john = new Person("John", "Smith", 29);
//john.display();

//class Shape {
//    private _color: string;

//    constructor(color) {
//        this._color = color;
//    }

//    display() {
//        console.log("color:", this._color);
//    }
//}

//class Rectangle extends Shape {
//    private height: number;
//    private width: number;

//    constructor(color, height, width) {
//        super(color);
//        this.height = height;
//        this.width = width;
//    }

//    display(): void {
//        super.display();
//        console.log("   height:", this.height, "width", this.width);
//    }
//}

//class Greeter {
//    element: HTMLElement;
//    span: HTMLElement;
//    timerToken: number;

//    constructor(element: HTMLElement) {
//        this.element = element;
//        this.element.innerHTML += "The time is: ";
//        this.span = document.createElement('span');
//        this.element.appendChild(this.span);
//        this.span.innerText = new Date().toUTCString();
//    }

//    start() {
//        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
//    }

//    stop() {
//        clearTimeout(this.timerToken);
//    }

//}

//window.onload = () => {
//    var el = document.getElementById('content');
//    var greeter = new Greeter(el);
//    greeter.start();
//};