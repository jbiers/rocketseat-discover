/*
let peopleArray = ['Mike', 'Eleven', 'Jake'];

const people = document.querySelector('.people');
const addBtn = document.querySelector('.adder-button');
const addInpt = document.querySelector('.adder-input');
const template = document.querySelector('.template');

function addPerson() {
    let name = addInpt.value;
    addInpt.value = '';

    peopleArray.push(name);

    renderPeople();
}

function deletePerson(name) {
    let index;

    index = peopleArray.indexOf(name);
    peopleArray.splice(index, 1);

    renderPeople();
}

function createPerson(name) {
    let personDiv = document.createElement('div');
    personDiv.classList.add('person', 'card');

    personDiv.innerHTML = `<span class="name">${name}</span>
    <div class="delete">x</div>`;

    return personDiv;
}

function renderPeople() {
    while (people.firstChild) {
        people.removeChild(people.firstChild);
    }

    for (let i = 0; i < peopleArray.length; i++) {
        let person = createPerson(peopleArray[i]);
        person.addEventListener('click', () => {
            deletePerson(peopleArray[i]);
        });

        people.appendChild(person);
    }
}

addBtn.addEventListener('click', addPerson);

renderPeople();

*/

// OBJECT LITERAL PATTERN

(function () {
    let people = {
        peopleArray: ['Jake', 'Mike', 'Sam'],

        init: function () {
            this.cacheDom();
            this.bindEvents();
            this.render();
        },

        cacheDom: function () {
            // Only one document search!!
            this.module = document.querySelector('.adder-container');
            this.people = this.module.querySelector('.people');
            this.addBtn = this.module.querySelector('.adder-button');
            this.addInpt = this.module.querySelector('.adder-input');
        },

        render: function () {
            while (this.people.firstChild) {
                this.people.removeChild(this.people.firstChild);
            }

            for (let i = 0; i < this.peopleArray.length; i++) {
                this.person = this.createPerson(this.peopleArray[i]);
                this.person.addEventListener('click', () => {
                    this.deletePerson(this.peopleArray[i]);
                });

                this.people.appendChild(this.person);
            }

        },

        bindEvents: function () {
            this.addBtn.addEventListener('click', this.addPerson.bind(this));

            for (let i = 0; i < this.peopleArray; i++) {
                this.deleteItem = this.people[i].querySelector('.delete');
                this.deleteName = this.people[i].querySelector('.name').innerHTML;
                this.deleteItem.addEventListener('click', (deleteName) => {
                    this.deletePerson.bind(this);
                });
            }
        },

        addPerson: function () {
            this.name = this.addInpt.value;
            this.addInpt.value = '';

            this.peopleArray.push(this.name);

            this.render();
        },

        deletePerson: function (name) {
            this.index = this.peopleArray.indexOf(name);
            this.peopleArray.splice(this.index, 1);

            this.render();
        },

        createPerson: function (name) {
            this.personDiv = document.createElement('div');
            this.personDiv.classList.add('person', 'card');

            this.personDiv.innerHTML = `<span class="name">${name}</span>
            <div class="delete">x</div>`;

            return this.personDiv;
        }
    }

    people.init();
})();
