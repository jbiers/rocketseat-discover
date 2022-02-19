let user = {
    name: 'John',
    surname: 'Smith',

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`
    }
}

let admin = {
    __proto__: user,
    isAdmin: true
}

console.log(admin.fullName)
admin.fullName = "Julia Bier"
console.log(admin.fullName)
console.log(user.fullName)

/**
 * THIS is always the object before the dot
 */