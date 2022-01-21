function Student(name, grade) {
    this.name = name;
    this.grade = grade;
};

Student.prototype.sayName = function () {
    console.log(this.name);
};

Student.prototype.goToProm = function () {
    console.log('Eh.. go to prom?');
};