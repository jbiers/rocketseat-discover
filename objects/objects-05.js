function Student() {

};

Student.prototype.sayName = function () {
    console.log(this.name);
};

function EighthGrader(name) {
    this.name = name;
    this.grade = 8;
};

EighthGrader.prototype = Object.create(Student.prototype);