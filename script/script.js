//Adding Books By Clicking add Btn
const addBook = document.querySelector(".add-book");
addBook.addEventListener("click", addingBookInfo
);
//Function for adding Book Info
function addingBookInfo() {
    let bookName = document.querySelector(".book-input");
    let bookDescription = document.querySelector(".description-input");
    let authorName = document.querySelector(".author-name");
    if(bookName.value !== '' && bookDescription.value !== "" && authorName.value !== "") {
        //Creating A new Element to contain book information.
        let newBookInfo = document.createElement("tr");
        newBookInfo.innerHTML = `<td class='book-name'> ${bookName.value} </td> 
                                <td> ${bookDescription.value} </td>
                                <td> ${authorName.value} </td> 
                                <td><a href='#' class='remove-btn'>X</a></td>`;
        //Append The Element into the Table Body.
        const tableBody = document.querySelector(".books-list");
        tableBody.appendChild(newBookInfo);
        //Remove Book Information when remove btn is clicked.
        const removeBookInfo = document.querySelectorAll(".remove-btn");
        for(let i = 0; i< removeBookInfo.length; i++) {
            let singleRemoveBtn = removeBookInfo[i];
            singleRemoveBtn.addEventListener("click", removeInfo);
        }
        // removeBookInfo.addEventListener("click", removeInfo);
        function removeInfo(e) {
            const tr = e.target.parentElement.parentElement;
            tr.remove();
        }
        bookName.value = '';
        bookDescription.value = '';
        authorName.value = "";
    }
    else{
        alert("You Must be Write Something Into All The Fields.")
    }
}
const bookList = document.querySelector(".books-list");
//Filter all book so that we can search our specific book...
const filterInput = document.querySelector(".filter-input")
filterInput.addEventListener("keyup", filterBooks);
function filterBooks() {
    //Getting value from filter section...
    let filterBooksName = filterInput.value;
    filterBooksName = filterBooksName.toLowerCase();
    //Getting book name value from books name
    const booksName = document.querySelectorAll(".book-name");
    let books = document.querySelector(".books");
    books.innerText = '';
    if(filterInput.value === '') {
        books.style.display = "none";
    }
    else{
        books.style.display = "block";
        for(let i = 0; i<booksName.length; i++ ) {
            const singleBook = booksName[i];
            allBooksName = singleBook.innerText.toLowerCase();
            // console.log(allBooksName);
            const filteringBookList = document.querySelector(".filtering-book-list");
            if(allBooksName.indexOf(filterBooksName) !== -1){
                let li = document.createElement('li');
                li.innerText = allBooksName;
                li.style.textTransform = "Capitalize"
                let value = li.innerText;
                books.appendChild(li);
                
            } 
        }
    }
}
//Clear All Books Information
const allClearBook = document.querySelector(".clear-books");
allClearBook.addEventListener("click", clearAllBookInfo);
//Function for clearing all books..
function clearAllBookInfo() {
    while(bookList) {
        bookList.firstChild.remove(bookList.firstChild);
    }
}

