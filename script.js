const gridContainer = document.querySelector("#gridContainer");
gridContainer.style.display="flex".flexDirection="row";

const gridBox = document.createElement('div');
let gridRow = document.createElement('div');
gridRow.setAttribute("id", "gridRow");
gridBox.setAttribute("id", "gridBox");


// gridBox.style.backgroundColor = "blue";
gridBox.style.height = "auto".width="45px";


gridContainer.appendChild(gridRow);

// gridRow.style.height = "10px".width="10px"
// gridRow.style.backgroundColor = "red"


 for (i = 0; i < 15; i++)
 { gridRow.appendChild(gridBox.cloneNode(true))};
 
for ( i = 0; i < 15; i++)
 { gridContainer.appendChild(gridRow.cloneNode(true)) }

 

// let gridRow = rpw()for( i = 0; i < 16; i++)
// { gridRow.appendChild(gridBox)};






