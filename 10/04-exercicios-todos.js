let weight;

console.log(typeof weight);


let name = 'Jonas';
let age = 23;
let stars = 33.9;
let isSubscribed = true;

let student = {
    name: 'Jonas',
    age: 23,
    stars: 33.9,
    isSubscribed: true
};

console.log(typeof student);

console.log(`${student.name} de idade ${student.age} pesa ${student.stars}kg.`)

let secondStudent = {
    name: 'Nicolas',
    age: 20,
    stars: 93.9,
    isSubscribed: false
};

let students = [
    student
];

students[1] = secondStudent;

console.log(typeof students + " " + students[1].name);
