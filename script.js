const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read = false) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "Tolkien", 401);
addBookToLibrary("Games Of Thrones", "George R. R. Martin", 603);

myLibrary.forEach((book) => console.log(book));

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + .btn-open");
const closeButton = document.querySelector(".btn-close");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
