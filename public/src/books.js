function findAuthorById(authors, id) {return authors.find((author) => author.id === id);}

function findBookById(books, id) {return books.find((book) => book.id === id);}

function partitionBooksByBorrowedStatus(books) {let available = [];
let unavailable = [];
const bookStatuses = [];
books.forEach((book) => {
  const isBookReturned = book.borrows[0].returned;

  if (isBookReturned) {
    // if book is not returned
    unavailable.push(book);
  } else {
    // if book is returned
    available.push(book);
  }
});
bookStatuses.push(available);
bookStatuses.push(unavailable);
return bookStatuses;}

function getBorrowersForBook(book, accounts) { {
  return book.borrows
    .map((borrow) => {
      let account = accounts.find((account) => account.id === borrow.id);
      return { ...borrow, ...account };
    })
    .slice(0, 10);
}}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
