const gridContainer = document.querySelector("#gridContainer");


const gridRow = document.createElement('div');
gridRow.setAttribute("id", "gridRow");
const gridBox = document.createElement('div');
gridBox.setAttribute("id", "gridBox");

// function changeColor(i) {boxList[i].style.backgroundColor="black";
//  console.log(i)}




// GRID SIZE
 for (i = 0; i < 64; i++)
 { gridRow.appendChild(gridBox.cloneNode(true))};
 
for ( i = 0; i < 64; i++)
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
gridBox.style.height="12.5px"
gridBox.style.width="12.5px"














      
 



 

