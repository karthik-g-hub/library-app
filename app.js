const myLibrary = [
  {
    title: "Dark Matter One",
    author: "Blake Crouch",
    pages: 383,
    readStatus: "Read",
  },
  {
    title: "Dark Matter Two",
    author: "Blake Crouch",
    pages: 383,
    readStatus: "Read",
  },
  {
    title: "Dark Matter Three",
    author: "Blake Crouch",
    pages: 383,
    readStatus: "Read",
  },
];
// Setting variables for DOM Elements
const columns = document.querySelector(".columns");
const form = document.querySelector(".form");
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");
const bookPages = document.querySelector("#bookPages");
const bookReadStatus = document.querySelector("#bookRead");

//Book Object Constructor
function Book(title, author, pages, readStatus) {
  this.title = title.value;
  this.author = author.value;
  this.pages = parseInt(pages.value);
  this.readStatus = readStatus.value;
}

//Add User input book to library array
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookReadStatus);
  myLibrary.push(newBook);
  console.log(myLibrary);
});

displayLibrary(); //Creates a new div with new book details

const removeBtn = document.querySelectorAll(".removeBtn");

//RemoveBtn functionality
for (let i = 0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener("click", function () {
    myLibrary.splice(i, 1);
    console.log(myLibrary);
  });
}

function displayLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    const newCard = document.createElement("div");
    newCard.classList.add("column");
    newCard.innerHTML = `<div class = 'card'><header class = 'card-header'><p class = 'card-header-title'>${myLibrary[i].title}</p></header><div class = 'card-content'><p>Author: <span>${myLibrary[i].author}</span></p><p>Pages: <span>${myLibrary[i].pages}</span></p><p>Status: <span>${myLibrary[i].readStatus}</span></p><button class = 'button is-danger removeBtn'>Remove</button></div></div>`;
    columns.append(newCard);
  }
}
