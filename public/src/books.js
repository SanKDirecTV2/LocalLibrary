function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter((book) => book.borrows[0].returned === false);

  const returned = books.filter((book) => book.borrows[0].returned === true);

  const result = [];
  result.push(borrowed, returned);

  return result;
}

function getBorrowersForBook(book, accounts) {
  {
    return book.borrows
      .map((borrow) => {
        let account = accounts.find((account) => account.id === borrow.id);
        return { ...borrow, ...account };
      })
      .slice(0, 10);
  }
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
