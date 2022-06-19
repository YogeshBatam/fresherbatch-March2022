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
//parent class
var Person = /** @class */ (function () {
    function Person() {
        this.name = "john";
        this.age = 89;
    }
    return Person;
}());
//child class
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //props
        _this.sid = 78687;
        _this.email = "john@gmail.com";
        return _this;
    }
    //method
    Student1.prototype.showDetails = function () {
        console.log("Id: ".concat(this.sid, ",Name:").concat(this.name, ",Age:").concat(this.age, ",Email:").concat(this.email));
    };
    return Student1;
}(Person));
var s12 = new Student1();
s12.showDetails();
