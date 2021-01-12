
// No object

let bookTitle = "Röda rummet";
let bookAuthor = "August Strindberg";
let bookPublisher = "Seligmann";
let bookWrittenYear = 1879;
let bookFormat = ['paper', 'ebook'];

let book2Title = "Gökboet";
let book2Author = "Ken Kesey";
let book2Publisher = "Norstedts";
let book2WrittenYear = 1962;
let book2Format = ['paper'];


let myObject = {}

// With object

let book = {
    title: "Röda rummet",
    author: {
        firstName: "August",
        lastName: "Strindberg",
    },
    publisher: "Seligmann",
    writtenYear: 1879,
    format: ['paper', 'ebook']
};

console.log(book.author.lastName);   // "Strindberg"
console.log(book.writtenYear)
console.log(book.format)
console.log(book.format.length);  // 2

// An array of objects

let x = []

let library = [
    {
        book: "Röda rummet",
        published: 1879
    },
    {
        book: "Brott och straff",
        published: 1863
    }
];

let nyBok = {
    book: "Tärningsspelaren",
    published: 1975
};

library.push(nyBok);

console.log(library[0].published);

