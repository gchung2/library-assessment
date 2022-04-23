function findAccountById(accounts, id) {
  let find = accounts.find ((account) => account.id === id);
  return find
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) => nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1:-1);
}

function getTotalNumberOfBorrows (account, books) {
  return books.reduce((total, book) => {
    const idCount = book.borrows.filter(borrow => borrow.id === account.id).length
    return total + idCount
  }, 0)
}

function getBooksPossessedByAccount(account, books, authors) {
  const { id } = account
  let filteredBooks = books.filter(book => {
    return book.borrows.some(borrow => borrow.id === id && !borrow.returned)
  })

  return filteredBooks.map(book => {
    book.author = authors.find(author => author.id === book.authorId)
    return book
  })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
