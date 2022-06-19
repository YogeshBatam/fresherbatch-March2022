var Student = /** @class */ (function () {
    function Student() {
        this.sid = 101;
        this.name = "scott";
        this.course = "angular";
    }
    Student.prototype.showDetails = function () {
        console.log(this.sid + " " + this.name + " " + this.course);
    };
    return Student;
}());
var s1 = new Student();
s1.showDetails();
