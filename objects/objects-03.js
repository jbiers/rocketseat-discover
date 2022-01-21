// to access properties from a prototype from
// an object which prototipically inherits from it,
// you must have a setter function

let user = {
    name: 'John',
    surname: 'Smith',

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

admin.fullName = 'Julia Bier';
console.log(admin.fullName);
console.log(user.fullName);
