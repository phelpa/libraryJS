let myLibrary = [];

function newBook(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    console.log(title + " by " + author + ", " + pages + " pages, " + read)
  }
    
}

function makeBookObject() {
  bookTitle = document.querySelector("#title").value;
  bookAuthor = document.querySelector("#author").value;
  bookPages = document.querySelector("#pages").value;

if (document.querySelector("#read").checked){
  read = "read";
} else {
  read ="nope";
}

book = new newBook(bookTitle, bookAuthor, bookPages, read);
  
}

function addBookToLibrary(){
  myLibrary.push(book);
  
}

function makeAndAddBookToLibrary (){
    makeBookObject();
    addBookToLibrary();
    clearAllInputs();
    render();
}

function clearAllInputs() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#read").checked = false;
}

function deleteRow () {
    row = this.parentNode.parentNode;
    table = document.querySelector("table");
    table.removeChild(row);
    indexNum = row.id.slice(-1);
    myLibrary.splice(indexNum,indexNum+1);
}

var submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click",makeAndAddBookToLibrary);


function render(){

      myLibrary.forEach(function(book,i){
          
      if (!!document.querySelector("#index"+i) === false){   
        td = document.createElement('td');
        td.classList.add(i);
        td.setAttribute('id','title');
        td.innerHTML = myLibrary[i].title;
                        
        td1 = document.createElement('td');
        td1.classList.add(i);
        td1.setAttribute('id','author');
        td1.innerHTML = myLibrary[i].author;
        
        td2 = document.createElement('td');
        td2.classList.add(i);
        td2.setAttribute('id','pages');
        td2.innerHTML = myLibrary[i].pages;
        
        td3 = document.createElement('td');
        td3.classList.add(i);
        td3.setAttribute('id','read');
        
        a3 = document.createElement('a');
        a3.classList.add("a-read"+i);
        a3.setAttribute('id','read');
        a3.setAttribute('href','#');
        a3.innerHTML =  myLibrary[i].read;
          
        td3.appendChild(a3);
          
        td4 = document.createElement('td');
        td4.classList.add(i);
        td4.setAttribute('id','delete');
          
        a4 = document.createElement('a');
        a4.classList.add("a"+i);  
        a4.setAttribute('id','x');  
        a4.setAttribute('href','#');
        a4.innerHTML = "X";
        
        td4.appendChild(a4);
        
        tr = document.createElement('tr');
        tr.setAttribute('id',"index"+i);
        
        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
      
        table = document.querySelector(".table");
        table.appendChild(tr);
        
          
        xButton = document.querySelector(".a"+ i );
        xButton.addEventListener("click", deleteRow);
          
        readButton = document.querySelector(".a-read" + i );
        readButton.addEventListener("click",changeReadHTML);
        
      }
})
}

function changeReadHTML() {
    tdRead = this;

    if (tdRead.innerHTML === "read"){
        tdRead.innerHTML = "nope";
    } else if (tdRead.innerHTML === "nope") {
        tdRead.innerHTML ="read";
    }
    
    myLibrary[Number(tdRead.className.slice(-1))].changeRead();
}


newBook.prototype.changeRead = function () { 
    if (book.read==="read"){
        book.read="nope"; 
    } else if (book.read==="nope") {
        book.read = "read";
    }
    
}
    




