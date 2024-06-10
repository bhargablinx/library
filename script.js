const addBookBtn = document.querySelector("#addBookBtn");
const dialogBox = document.querySelector(".dialog-box");
let titleRef = document.querySelector(".book-title")
let authorRef = document.querySelector(".author")
let pagesRef = document.querySelector(".pages")
let statusRef = document.querySelector(".status")


let myLibrary = [];

function Book(title, author, page, status) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.status = status
}

let got = new Book("Songs of ice and fire", "RR Martin", 5532, "no")
myLibrary.push(got);

function addBookToLibrary(title, author, page, status) {
    let book = new Book(title, author, page, status);
    myLibrary.push(book);
}

addBookBtn.addEventListener('click', () => {
    let name = titleRef.value;
    let writer = authorRef.value;
    let pageCount = pagesRef.value;
    let status = statusRef.value
    addBookToLibrary(name, writer, pageCount, status)
});