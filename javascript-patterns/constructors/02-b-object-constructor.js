/**
 * Functions should be declared in the prototype
*/

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function () {

}

console.log(Book.prototype)

const hp = new Book('Harry Potter', 'J.K. Rowling', 370, false)
console.log(hp.info())