// objects have a hidden property, [[Prototype]].
// It can be null or reference another object, called "a prototype"

let animal = {
    eats: true,

    walk() {
        console.log(rabbit.name + ' walks');
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal,
    name: 'jonas'
};

let longEarRabbit = {
    earSize: 10,
    __proto__: rabbit,
}

rabbit.walk();