function Book(title, author, pages, read = false) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    console.log(
      `${title} by ${author}, ${pages} pages, ${
        read ? "I've readed it" : 'not read yet'
      }`
    );
  };
}

const theHobbit = new Book('The Hobbit', 'Tolkien', 401);

theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
