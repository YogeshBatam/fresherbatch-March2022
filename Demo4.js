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
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = "";
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    return Person1;
}());
var Student3 = /** @class */ (function (_super) {
    __extends(Student3, _super);
    function Student3(sid, email, name, age) {
        var _this = _super.call(this, name, age) || this;
        //props
        _this.sid = 0;
        _this.email = "";
        _this.sid = sid;
        _this.email = email;
        return _this;
    }
    Student3.prototype.showDetails = function () {
        console.log("Id: ".concat(this.sid, ",Name:").concat(this.name, ",Age:").concat(this.age, ",Email:").concat(this.email));
    };
    return Student3;
}(Person1));
var s3 = new Student3(1000, "john@gmail.com", "John", 20);
s3.showDetails();
