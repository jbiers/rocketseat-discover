let peopleArray = ['Mike', 'Eleven', 'Jake'];

const people = document.querySelector('.people');
const addBtn = document.querySelector('.adder-button');
const addInpt = document.querySelector('.adder-input');

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