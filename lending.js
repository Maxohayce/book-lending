// Using the module pattern
var Library = (function () {

    var books = [];

    return {

        addBook: function( {book, author} ) {
            books.push({book, author});
        },

        getBookCount: function() {
           return books.length; 
        },

        lendBook: function() {
           for(var i = 0; i <= books.length-1; i++) {
                if (books[i] ===  2) {
                    books.splice(index, 1);
                }
                return books.length;
           }
        }
        
    };
})();

Library.addBook({
    book: "The Alchemist",
    author: "Paulo coelho"
});

Library.addBook({
    book: "The art of war",
    author: "Shun Tsu"
});

Library.addBook({
    book: "To kill a mockingbird",
    author: "Harper Lee"
});

Library.addBook({
    book: "A Tale of two cities",
    author: "Charles"
});

Library.addBook({
    book: "There was a country",
    author: "Chinua Achebe"
});

Library.addBook({
    book: "1984",
    author: "George Orwell"
});

Library.addBook({
    book: "Pride and Prejudice",
    author: "Jane Austin"
});
console.log( Library.getBookCount() );

console.log( Library.lendBook() );



// Using the prototype
function Library(books) {
    this.books = books;
}

Library.prototype = {
    getBooks: function () {
        console.log("The name of the bo")
    }
};

const book = new Library("Pride and Prejudice");
book.getBooks();





var library = (function(){
    var books = [];

    function lendbook () {
        var newBook = 
        var  getBooks = function () {
            if( !books ) {
                books = init();
            }

            return books;
        }

        



    return {
        addBook: function () {
            newBook
        }

        
    }
})

var book1 = Library.getBooks();
var book2 = Library.getBooks();

console.log(book1.getBooks());
console.log(book2.getBooks());



// Using the observer pattern
function Library(){
    this.library = [];
}

Library.prototype.add = function( book ){
    return this.library.push( book );
};

Library.prototype.count = function() {
    return this.library.length();
};

Library.prototype.get = function( index ){
    if( index > -1 && index < this.library.length ){
        return this.library[ index ];
    }
};

Library.prototype.indexOf = function( book, startIndex ){
    var i = startIndex;

    while( i < this.library.length ){
        if( this.library[i] === book ){
        return i;
        }
        i++;
    }

  return -1;
};

Library.prototype.removeAt = function ( index ){
    this.library.splice( index, 1);
};

function Subject(){
    this.book = new Library();
}

subject.prototype.addBook = function( book ) {
    this.book.add( book )
}
