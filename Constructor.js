var Students = /** @class */ (function () {
    function Students(sid, sname, course) {
        this.sid = 0;
        this.sname = "";
        this.course = "";
        this.sid = sid;
        this.sname = sname;
        this.course = course;
    }
    Students.prototype.showDetail = function () {
        var str = "";
        str = "ID: ".concat(this.sid, ", Name: ").concat(this.sname, ", Course:").concat(this.course);
        console.log(str);
    };
    return Students;
}());
var s11 = new Students(3434, "scott", "jquery");
var s2 = new Students(4545, "tc", "angular");
s11.showDetail();
s2.showDetail();
