//Variables
let addItem = document.getElementById("newItem")
document.addEventListener("DOMContentLoaded", function () {
    //Grabs the "toDoArea" element and makes a new element for the "toDoItem"s
    const toDoArea = document.getElementById("toDoArea");
    const toDoItem = document.createElement("p");
    toDoItem.innerHTML = document.getElementById('toDoItem').value
    // toDoItem.innerText = "meep";
    toDoArea.appendChild(toDoItem);
  });
  addItem.addEventListener("click")

  /*
  Go to Github and Look it up to 
  see what you need to make this work
  Also talk to Mom and Dad, they don't know JS 
  but they can probably figure out
  what you need to find. :D
  */