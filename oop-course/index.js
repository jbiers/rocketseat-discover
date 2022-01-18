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

/*
// Limit access to certain object properties
// Abstraction: hide the details and show only the essential

// Instead of property, declare as local variable
function Circle(radius) {
    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0 };

    this.computeOptimumLocation = function () {
        // ...
    }

    this.draw = function () {
        this.computeOptimumLocation();

        console.log('draw');
    };
};

// Now, defaultLocation and computeOptimumLocation are private members of the circle object
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function () {
        // ...
    }

    this.draw = function () {
        computeOptimumLocation();

        console.log('draw');
    };
};
**/

// What if we need to show a private member to the user?
// We could have a function that returns it
// But shouldn't we be able to access it like a normal property, with read-only access?
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function () {
        // ...
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },

        set: function (value) {
            if (!value.x || !value.y) {
                throw new Error('Invalid location');
            };

            defaultLocation = value;
        }
    })

    this.draw = function () {
        computeOptimumLocation();

        console.log('draw');
    };
};