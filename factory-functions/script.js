const personFactory = (name, age) => {
    const sayHello = () => {
        console.log('hello');
    }

    return { name: name, age: age, sayHello: sayHello };
}

const jeff = personFactory('jeff', 27);


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    console.log("hello");
}
