const addBookBtn = document.querySelector("#addBookBtn");
const dialogBox = document.querySelector(".dialog-box");

let myLibrary = [];

function Book(title, author, page, status) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.status = status
}

let got = new Book("Songs of ice and fire", "RR Martin", 5532, "no")
console.log(got)
myLibrary.push(got);

function addBookToLibrary(title, author, page, status) {
    let book = new Book(title, author, page, status);
    myLibrary.push(book);
}

addBookBtn.addEventListener('click', () => {
    dialogBox.classList.remove("popup-hidden");    
});