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
let removeBtn;

//Book Object Constructor
function Book(title, author, pages, readStatus) {
  return {
    title: title.value,
    author: author.value,
    pages: parseInt(pages.value),
    readStatus: readStatus.value,
  };
  /* this.title = title.value;
  this.author = author.value;
  this.pages = parseInt(pages.value);
  this.readStatus = readStatus.value; */
}

//Add User input book to library array
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookReadStatus);
  myLibrary.push(newBook);
  displayLibrary();
  console.log(myLibrary);
});

//RemoveBtn functionality
function removeBtnFunc() {
  removeBtn = document.querySelectorAll(".removeBtn");
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", function () {
      myLibrary.splice(i, 1);
      console.log(myLibrary);
      displayLibrary();
    });
  }
}

function displayLibrary() {
  columns.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const newCard = createBookCard(i);
    columns.append(newCard);
  }
  removeBtnFunc();
}

function createBookCard(i) {
  const newCard = document.createElement("div");
  newCard.classList.add("column");
  newCard.innerHTML = `<div class = 'card'><header class = 'card-header'><p class = 'card-header-title'>${myLibrary[i].title}</p></header><div class = 'card-content'><p>Author: <span>${myLibrary[i].author}</span></p><p>Pages: <span>${myLibrary[i].pages}</span></p><p>Status: <span>${myLibrary[i].readStatus}</span></p><button class = 'button is-danger removeBtn'>Remove</button></div></div>`;
  return newCard;
}

function main() {
  displayLibrary();
}

main();
