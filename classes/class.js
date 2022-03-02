/*class MyClass {

    constructor() { }

    method() { }
}

class Ball {
    constructor(position, velocity, radius) {
        this.position = position;
        this.velocity = velocity;
        this.radius = radius;
        this.mass = radius * 2;
    }

    getPosition() {
        console.log(`x: ${this.position[0]}, y: ${this.position[1]}`)
    }
}

let redBall = new Ball([3, 5], [1, 1], 10);
redBall.getPosition();
redBall.position();

*/

class User {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    get name() {
        return `${this._name}`;
    }

    get lastName() {
        return `${this._lastName}`
    }

    set name(value) {
        if (value.length < 4) {
            console.log('Name is too short.');
            return;
        }

        this._name = value;
    }
}

let user = new User('John');
user.name = 'Rose';
