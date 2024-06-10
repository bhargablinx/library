const addBookBtn = document.querySelector("#addBookBtn");
const dialogBox = document.querySelector(".dialog-box");
const container = document.querySelector(".container");
let titleRef = document.querySelector(".book-title");
let authorRef = document.querySelector(".author");
let pagesRef = document.querySelector(".pages");
let statusRef = document.querySelector(".status");


let myLibrary = [];

function Book(title, author, page, status) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.status = status
}

function addBookToLibrary(title, author, page, status) {
    let book = new Book(title, author, page, status);
    myLibrary.push(book);
}

addBookBtn.addEventListener('click', () => {
    let name = titleRef.value;
    let writer = authorRef.value;
    let pageCount = pagesRef.value;
    let status = statusRef.value
    addBookToLibrary(name, writer, pageCount, status);
    let bookCard = document.createElement("div");
    container.appendChild(bookCard);
    bookCard.classList.add("card");

    let div1 = document.createElement("div");
    bookCard.appendChild(div1);
    div1.classList.add("title");
    div1.textContent = `Title: ${name}`;
    let div2 = document.createElement("div");
    bookCard.appendChild(div2);
    div2.classList.add("author");
    div2.textContent = `Author: ${writer}`;
    let div3 = document.createElement("div");
    bookCard.appendChild(div3);
    div3.classList.add("pages");
    div3.textContent = `No. of pages: ${pageCount}`;
    let div4 = document.createElement("div");
    bookCard.appendChild(div4);
    div4.classList.add("reading-status");
    div4.textContent = `Have you read: ${status}`;
    let updBtn = document.createElement("button");
    updBtn.textContent = "Update";
    bookCard.appendChild(updBtn);
});

// let got = new Book("Songs of ice and fire", "RR Martin", 5532, "no")
// myLibrary.push(got);