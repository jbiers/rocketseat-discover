/*
// Object Literal
const circle = {
    // properties
    radius: 1,
    location: {
        x: 1,
        y: 1
    },

    // method
    draw: function () {
        console.log('draw');
    }
};

circle.draw();
**/

/*
// Object constructor/factory function
// This is like a Class for other languages

// "this" points to the global object
function Circle(radius) {
    this.radius = radius;

    this.draw = function () {
        console.log('draw');
    };
};

const circle = new Circle(2);
console.log(circle.radius)

// Every ob ject has a constructor property
// to reference the function that created it
circle.constructor;
**/

/*
// values and reference types
let x = 10;
let y = x;

x = 20;
// x is 20, y is 10

let g = { value: 10 };
let f = g;

g.value = 19;
// g is 19, f is 19
// when storing an object in a variable, we are actually saving a reference to it in memory
**/

/*
// Changing and removing object properties
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
};

const circle = new Circle(10);
circle.location = { x: 1, y: 1 };

delete circle.radius;
**/

/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
};

const circle = new Circle(10);

for (let key in circle) {
    if (typeof circle[key] !== 'function') {
        console.log(key, circle[key]);
    };
};

if ('radius' in circle) {
    console.log('yes')
}
**/