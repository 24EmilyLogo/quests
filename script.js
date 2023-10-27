//Variables
document.addEventListener("DOMContentLoaded", function () {
    //Grabs the "toDoArea" element and makes a new element for the "toDoItem"s
    const addItem = document.getElementById("newItem");
    const toDoArea = document.getElementById("toDoArea");

    addItem.addEventListener("click", function () {
      const toDoItemText = document.getElementById('toDoItem').value;

      if (toDoItemText.trim()!==""){
        //makes the element for the to do item, changes the text to what the user inputted
        const toDoItem = document.createElement("p");
        toDoItem.innerHTML = toDoItemText;
        toDoArea.appendChild(toDoItem);
        document.getElementById('toDoItem').value = "";

        //Adds The item to the top of the to do area
        const firstItem = toDoArea.firstChild;
        toDoArea.insertBefore(toDoItem, firstItem)
        //Finished button
        const markOffItem = document.createElement("button");
        markOffItem.innerText = "Finished"
        toDoItem.appendChild(markOffItem);
        markOffItem.addEventListener('click',()=>{
          toDoItem.classList.toggle("strikethrough")
        })

        //Remove Item button
        const removeItem = document.createElement("button");
        removeItem.innerText = "Remove"
        toDoItem.appendChild(removeItem);
        removeItem.addEventListener('click',()=>{
          toDoItem.parentNode.removeChild(toDoItem);
        })
      }
  });
});