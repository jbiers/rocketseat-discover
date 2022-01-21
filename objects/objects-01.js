function Player(name, marker) {
    this.name = name;
    this.marker = marker;

    this.sayName = function () {
        console.log(name);
    };
};

const playerOne = new Player('Steve', 'X')
playerOne.sayName();

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        if (!this.read) {
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`;
        };

        return `${this.title} by ${this.author}, ${this.pages} pages, has been read.`;
    };
};

const harryPotter = new Book('Harry Potter', 'J.K. Rowling', 356, false);
console.log(harryPotter.info());