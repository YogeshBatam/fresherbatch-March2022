var Employee = /** @class */ (function () {
    function Employee() {
        this.empid = 8787;
        this.fname = "rama";
        this.lname = "krishna";
        this.age = 99;
    }
    Employee.prototype.printData = function () {
        console.log("Empid:".concat(this.empid, ",fname:").concat(this.fname, ",lname:").concat(this.lname, ",age:").concat(this.age));
    };
    return Employee;
}());
var emp = new Employee();
emp.printData();
