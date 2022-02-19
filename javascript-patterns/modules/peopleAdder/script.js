let peopleArray = ['Mike', 'Eleven'];

const people = document.querySelector('.people');
const addBtn = document.querySelector('.adder-button');
const addInpt = document.querySelector('.adder-input');

function addPerson() {
    let name = addInpt.value;
    peopleArray.push(name);

    renderPeople();
}

function deletePerson(name) {
    peopleArray.filter(person => person != name);

    renderPeople();
}

function renderPeople() {
    console.log(people);
}

addBtn.addEventListener('click', addPerson());

renderPeople();