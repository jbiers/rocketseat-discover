const person = {
    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const personOne = {
    firstName: 'Mary',
    lastName: 'Doe'
}

person.fullName.apply(personOne);