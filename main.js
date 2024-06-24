const bookShelf = document.querySelector(".book-shelf");
const addForm = document.querySelector(".book-form");
const header = document.querySelector("header");

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = () => {
        console.log(this);
    }
    addBookToDOM(this);
}

const b1 = new Book('A Song of ice and fire', 'Gorge RR Martin', 5500, true);
const b2 = new Book("Dance of dragons", "Gorge RR Martin", 2000, false);
const b3 = new Book("Atomic Habit", "James Clear", 302, true);
const b4 = new Book("Power of Habit", "Unknown", 402, false);
const b5 = new Book("Power of Now", "Unknown", 402, false);

document.querySelector('.add-book').addEventListener('click', () => {
    addForm.style.display = 'block';
})

document.querySelector('#cross').addEventListener('click', () => {
    addForm.style.display = 'none';
})

document.querySelector(".add").addEventListener('click', (e) => {
    const title = document.querySelector("#b-name");
    const author = document.querySelector("#b-author");
    const page = document.querySelector("#b-page");
    new Book(title.value, author.value, page.value);
    updateOption();
    updateDtlBtn();
    e.preventDefault();
})

function addBookToDOM(book) {
    const card = document.createElement("div");
    card.className = 'card';
    const title = document.createElement("p");
    title.className = 'title';
    title.textContent = book.title;
    card.appendChild(title);
    const author = document.createElement("p");
    author.className = 'author';
    author.textContent = book.author;
    card.appendChild(author);
    const page = document.createElement("p");
    page.textContent = `Page Count: ${book.pages}`;
    card.appendChild(page);
    const select = document.createElement("select");
    const optD = document.createElement("option");
    optD.selected = true;  // Set the option as selected
    optD.disabled = true;  // Disable the option to make it a placeholder
    optD.textContent = 'Status';  // Add display text for the option
    select.appendChild(optD);
    const opt1 = document.createElement("option");
    opt1.textContent = 'Not Yet Read';
    select.appendChild(opt1);
    const opt2 = document.createElement("option");
    opt2.textContent = 'Reading';
    select.appendChild(opt2);
    const opt3 = document.createElement("option");
    opt3.textContent = 'Finish Reading'
    select.appendChild(opt3);
    card.appendChild(select);
    const btn = document.createElement("button");
    btn.className = 'delete'
    btn.textContent = 'delete'
    card.appendChild(btn)
    bookShelf.appendChild(card);
}

function updateDtlBtn() {
    const deleteBtn = document.querySelectorAll(".delete");
    deleteBtn.forEach((element) => {
        element.addEventListener('click', (e) => {
            let card = e.target.parentNode;
            console.log(card.remove());
        });
    })
}

function updateOption() {
    const options = document.querySelectorAll("option");
    options.forEach((element) => {
        element.addEventListener('click', (e) => {
            let status = e.target.value;
            let card = e.target.parentNode.parentNode;
            if (status === 'Reading') {
                card.classList.remove('read');
                card.classList.add('reading')
            } else if (status === 'Finish Reading') {
                card.classList.remove('reading');
                card.classList.add('read')
            } else {
                card.classList.remove('reading', 'read');
            }
        })
    })
}