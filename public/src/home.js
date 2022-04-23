function getTotalBooksCount(books) {
  return books.reduce((book) => {
    return books.length
  }, 0)
}

function getTotalAccountsCount(accounts) {
    return accounts.reduce((account) => {
      return accounts.length
  }, 0)
}

function getBooksBorrowedCount(books) {
  return books.reduce((account, book) => (account + (!book.borrows[0].returned)), 0)
}

function getMostCommonGenres (books) {
	let genres = books.reduce((account, book) => {
		account[book.genre] != null ? account[book.genre].count++ : account[book.genre] = {name: book.genre, count: 1}
		return account;
	}, {})
	return Object.keys(genres).map(genre => genres[genre]).sort((a,b) => b.count - a.count).slice(0,5)
};

function getMostPopularBooks(books) {
  return books.map((book) => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  }).sort((bookA, bookB) => bookB.count - bookA.count).splice(0,5)
}

function getMostPopularAuthors (books, authors) {
  return authors.reduce((account, author) => {
    const thisAuthor = {name: `${author.name.first} ${author.name.last}`,count: 0
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        thisAuthor.count += book.borrows.length
      }
    });
    account.push(thisAuthor);
    return account;
  }, []).sort((a,b) => b.count - a.count).slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
