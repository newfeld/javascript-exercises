const getTheTitles = function(books) {
    let res = [];
    books.forEach((book) => res.push(book.title));
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
