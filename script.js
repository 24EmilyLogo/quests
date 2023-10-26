//Variables
document.addEventListener("DOMContentLoaded", function () {
    //Grabs the "toDoArea" element and makes a new element for the "toDoItem"s
    const addItem = document.getElementById("newItem");
    const toDoArea = document.getElementById("toDoArea");

    addItem.addEventListener("click", function () {
      const toDoItemText = document.getElementById('toDoItem').value;

      if (toDoItemText.trim()!==""){
        const toDoItem = document.createElement("p");
        toDoItem.innerHTML = toDoItemText;
        toDoArea.appendChild(toDoItem);
        document.getElementById('toDoItem').value = "";

        //Adds The item to the top of the to do area
        const firstItem = toDoArea.firstChild;
        toDoArea.insertBefore(toDoItem, firstItem)
        //Start with making the button
        //Make button appear on all of the items
        document.createElement("button")
      }
    // toDoItem.innerText = "meep";
  });
});
/* ASK MOM AND DAD about making it so I can remove the items too */