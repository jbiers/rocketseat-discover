let animal = {
    eats: true,
    walk: function () {
        console.log('animal walks');
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};;

console.log(rabbit.eats);
longEar.walk();

// animal is the prototype of rabbit
// rabbit prototipically inherits animal

// prototype is used only for reading properties.