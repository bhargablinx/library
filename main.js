const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = () => {
        console.log(this);
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

// const b1 = new createBook("A Song of ice and fire", "Gorge RR Martin", 1996);
// const b2 = new createBook("Dance of dragons", "Gorge RR Martin", 2000);
// const b3 = new createBook("Atomic Habit", "James Clear", 2015);
// const b4 = new createBook("Power of Habit", "Unknown", 1986);

const b1 = new Book('A Song of ice and fire', 'Gorge RR Martin', 5500, true);
const b2 = new Book("Dance of dragons", "Gorge RR Martin", 2000, false);