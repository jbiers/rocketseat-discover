const personFactory = (name, age) => {
    const sayHello = () => console.log('hello')

    return { name, age, sayHello }
}

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.sayHello = () => console.log('hello')