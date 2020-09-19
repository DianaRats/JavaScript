function arrangesBooks(arr) {
    const bookNames = arr[0].split('&');
   
    for (let i = 1; i < arr.length; i++) {
        const command = arr[i].split(' | ');
       
        if (command[0] === 'Done') {
            break;
        }
 
        if (command[0] === 'Add Book') {
            if (bookNames.includes(command[1])) {
                continue;
            }
 
            bookNames.unshift(command[1]);
        } else if (command[0] === 'Take Book') {
            if (bookNames.includes(command[1])) {
                let indexOfBook = bookNames.indexOf(command[1]);
                bookNames.splice(indexOfBook, 1);
            }
 
        } else if (command[0] === 'Swap Books') {
            let firstBook = command[1];
            let secondBook = command[2];
 
            if (bookNames.includes(firstBook) && bookNames.includes(secondBook)) {
                let firstIndex = bookNames.indexOf(firstBook);
                let secondIndex = bookNames.indexOf(secondBook);
 
                bookNames[firstIndex] = secondBook;
                bookNames[secondIndex] = firstBook;
            }
 
        } else if (command[0] === 'Insert Book') {
 
            bookNames.push(command[1]);
 
        } else if (command[0] === 'Check Book') {
            let index = Number(command[1]);
 
            if (bookNames[index]) {
                console.log(bookNames[index]);
            }
        }
    }
 
    console.log(bookNames.join(', '));
}
arrangesBooks(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
    'Add Book | The Odyssey',
    'Take Book | Don Quixote',
    'Insert Book | Alice s Adventures in Wonderland',
    'Check Book | 3',
    'Done'])