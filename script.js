const gridContainer = document.querySelector("#gridContainer");
gridNumber = prompt("How many box")
boxSize = 800/gridNumber + "px"





const gridRow = document.createElement('div');
gridRow.setAttribute("id", "gridRow");
const gridBox = document.createElement('div');
gridBox.setAttribute("id", "gridBox");

gridBox.style.height=boxSize
gridBox.style.width=boxSize


// GRID SIZE
 for (i = 0; i < gridNumber; i++)
 { gridRow.appendChild(gridBox.cloneNode(true))};
 
for ( i = 0; i < gridNumber; i++)
 { gridContainer.appendChild(gridRow.cloneNode(true))
};

/// all boxes nodelist
let boxList = document.querySelectorAll("#gridBox");

//Change background color of specified box
for (i = 0; i < boxList.length; i++)
 {let currentBox = boxList[i]; boxList[i].addEventListener("mouseover", function(){ 
     currentBox.style.backgroundColor="black";})
  }







// Box size:
// NEED TO CALC SIZE *** 













      
 



 

