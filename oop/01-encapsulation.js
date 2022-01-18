// Procedural
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
};

// Object Oriented
// Functions with fewer parameters
let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,

    getWage: function () {
        return baseSalary + (overtime * rate);
    }
};

function Employee(baseSalary, overtime, rate) {
    this.baseSalary = baseSalary;
    this.overtime = overtime;
    this.rate = rate;

    this.getWage = function () {
        return baseSalary + (overtime * rate);
    };
};

const employeeOne = new Employee(50_000, 30, 100);

console.log(employeeOne.getWage())

console.log(employee.getWage())