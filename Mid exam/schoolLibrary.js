function schoolLibrary(input) {
    let library = input.shift();
    let bookList = library.split('&');// тук са книгите
    let currentLine = input.shift();// команда / книга

    while (currentLine != 'Done') {
        let [command, book] = currentLine.split(' | ');
        if (command === 'Add Book') {
            if (!bookList.includes(book)) {
                bookList.unshift(book);
            }
        } else if (command === 'Take Book') {
            if (bookList.includes(book)) {
                let bookIndex = bookList.indexOf(book);
                bookList.splice(bookIndex, 1);
            }
        } else if (command === 'Swap Books') {
            let firstBook = [command, book][1];
            let secondBook = [command, book][2];
            if (bookList.includes(firstBook) && bookList.includes(secondBook)) {
                let firstIndex = bookList.indexOf(firstBook);
                let secondIndex = bookList.indexOf(secondBook);
                let swap = bookList[firstIndex];
                bookList[firstIndex] = bookList[secondIndex];
                bookList[secondIndex] = swap;
            }
        } else if (command === 'Insert Book') {
            if (!bookList.includes(book)) {
                bookList.push(book);
            }
        } else if (command === 'Check Book') {
            if (bookList.includes(book)) {
                let indexBook = bookList.indexOf(book);
                indexBook = book.indexOf;
                
            }
        }
        currentLine = input.shift();
    }
    console.log(bookList.join(', '));
}
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulisses", "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"])