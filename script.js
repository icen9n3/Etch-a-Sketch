const gridContainer = document.querySelector("#gridContainer");
  const erase = document.getElementById("erase");
//prompt set gridBox size 
gridNumber = prompt("Set the Box legnth - <= 100", "Number Here")
boxSize = 800 / gridNumber + "px"

//
const gridRow = document.createElement('div');
gridRow.setAttribute("id", "gridRow");
const gridBox = document.createElement('div');
gridBox.setAttribute("id", "gridBox");

gridBox.style.height=boxSize
gridBox.style.width=boxSize


// CREATES GRID based on gridNumber
 for (i = 0; i < gridNumber; i++)
 { gridRow.appendChild(gridBox.cloneNode(true))};
 
for ( i = 0; i < gridNumber; i++)
 { gridContainer.appendChild(gridRow.cloneNode(true))
};

/// all boxes nodelist
let boxList = document.querySelectorAll("#gridBox");
let colorValue = colorSelect.value

erase.addEventListener("click", function(){colorSelect.value="#ffffff"});
colorBlack.addEventListener("click", function(){colorSelect.value="#000000"});
randomColor.addEventListener("click", function(){colorSelect.value='#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');})


  // function changeColor(color) { currentBox.style.backgroundColor=color};
// Change background color of specified box
for (i = 0; i < boxList.length; i++)
 {let currentBox = boxList[i]; 




  // boxList[i].addEventListener("mouseover", function() {changeColor(colorSelect.value)});
  
  currentBox.addEventListener("mouseover", function(){ 
     currentBox.style.backgroundColor=colorSelect.value})


     //works but wont shut off
// erase.addEventListener("click", function(){
//   currentBox.addEventListener("mouseover", function(){ 
//      currentBox.style.backgroundColor="white"})})


  const reset = document.getElementById("reset");
  reset.addEventListener("click", function() {currentBox.style.backgroundColor="white"} )



  // erase.addEventListener("click", function(){ 
    }




// Box size:
// NEED TO CALC SIZE *** 













      
 



 

