// two ways of declaring an object
// property is a key + value pair
let user = {
    name: 'John',
    age: 57,

    // multiword property names are just SO ugly
    "is human": false,
};

user.isAdmin = true;

let item = new Object();

console.log(user.name);
console.log(user.isAdmin);
console.log(user["is human"]);
console.log(item);

delete user.isAdmin;