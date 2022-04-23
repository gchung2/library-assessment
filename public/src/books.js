function findAuthorById(authors, id) {
  let found = authors.find((books) => id === books.id) 
  return found
}

function findBookById(books, id) {
  let found = books.find((authors) => authors.id === id) 
  return found
}

function partitionBooksByBorrowedStatus(books) {
    let result1 = books.filter(book => book.borrows[0].returned === false);
    let result2 = books.filter(book => book.borrows[0].returned === true);
    return [result1, result2]  
  }

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id)
    return { ...borrow, ...account}
  }).slice(0, 10)
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
