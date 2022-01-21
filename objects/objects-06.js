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

function NinethGrader(name) {
    this.name = name;
    this.grade = 9;
};

NinethGrader.prototype = Object.create(Student.prototype);

NinethGrader.prototype.sayName = function () { console.log("hahahahhaha") };

const carl = new EighthGrader('Carl');
carl.sayName()