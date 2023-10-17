//Variables
let addItem = document.getElementById("newItem")
document.addEventListener("DOMContentLoaded", function () {
    //Grabs the "toDoArea" element and makes a new element for the "toDoItem"s
    const toDoArea = document.getElementById("toDoArea");
    const toDoItem = document.createElement("p");
    toDoItem.innerText = "placehold";
    toDoArea.appendChild(toDoItem);
  });
  addItem.addEventListener("click")

  /*
  function guessCheck(){
    //converts value of numInput to a number
    let userGuess = parseInt(numInput.value)

    //checks the 
    if (userGuess > ranNum){
        correctOrNot.innerText = "Wrong number! Try a smaller number."
        correctOrNot.style.color = ("#ff3d3d")
    } else if(userGuess < ranNum){
        correctOrNot.innerText = "Wrong number! Try a larger number.";
        correctOrNot.style.color = ("#ff3d3d")
    } else if(userGuess === ranNum){
        correctOrNot.innerText = "You got it!";
        correctOrNot.style.color = ("#57d457")
    } else{
        correctOrNot.innerText = "Please input a valid number"
        correctOrNot.style.color = ("#ff3d3d")
    }
}

submitNum.addEventListener("click", guessCheck)
  */