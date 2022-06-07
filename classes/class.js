// class
// - Blueprint for creating objects with  properties and methods
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    //  color2: string = "red"; // initializing the  variable
    function Vehicle(color) {
        this.color = color;
        this.color = color;
    }
    Vehicle.prototype.drive = function () {
        console.log("Driving...");
    };
    Vehicle.prototype.honk = function () {
        console.log("Beep...");
    };
    return Vehicle;
}());
// inheriting
var vehicle = new Vehicle("orange");
vehicle.drive();
// vehicle.honk();
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(name, color) {
        var _this = _super.call(this, color) || this;
        _this.name = name;
        return _this;
    }
    Car.prototype.drive = function () {
        console.log("Driving " + this.name);
        this.honk();
    };
    return Car;
}(Vehicle));
var car1 = new Car("BMW", "red");
console.log(car1.name);
car1.drive();
// Modifiers (public, private, protected)
// public - accessible from outside the class
// private - accessible only from inside the class
// protected - accessible from inside and outside the class
