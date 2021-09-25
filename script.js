const gridContainer = document.querySelector("#gridContainer");
const erase = document.getElementById("erase");  
const slider = document.getElementById("slider");
const rainbow = document.getElementById("rainbow")
const sliderAmount = document.getElementById("sliderAmount");
const reset = document.getElementById("reset");
const rainbowOff = document.getElementById("rainbowOff")
let rainbowSwitch = 0;


//   else
//   (rainbowSwitch == 2)
//  {rainbowSwitch = 0 }}}

//   }}
//Slider text
sliderAmount.innerHTML = slider.value+"x"+slider.value;

//slider output to drawGrid
slider.onchange =function(){sliderAmount.innerHTML= slider.value+"x"+slider.value;
drawGrid()};

//prompt set gridBox size 
let drawGrid = function () {

const allRows = document.querySelectorAll("#gridRow")
const gridRow = document.createElement('div');
gridRow.setAttribute("id", "gridRow");
const gridBox = document.createElement('div');
gridBox.setAttribute("id", "gridBox");

//Resets grid when slider changes
for( i = 0; i < allRows.length; i++)
{allRows[i].remove();}

//sets gridNumber to slider value
gridNumber = slider.value;

boxSize = 800 / gridNumber + "px";

gridBox.style.height=boxSize;
gridBox.style.width=boxSize;


// CREATES GRID based on gridNumber
 for (i = 0; i < gridNumber; i++)
 { gridRow.appendChild(gridBox.cloneNode(true))};
 
for ( i = 0; i < gridNumber; i++)
 { gridContainer.appendChild(gridRow.cloneNode(true))
};


/// all boxes in a nodelist
let boxList = document.querySelectorAll("#gridBox");



//button listeners
erase.addEventListener("click", function(){colorSelect.value="#ffffff"});
colorBlack.addEventListener("click", function(){colorSelect.value="#000000"});
randomColor.addEventListener("click", function(){colorSelect.value='#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');})

// function rainbowToggle(rainbowSwitch)
// {
// function add1(rainbowSwitch) {rainbowSwitch =+ 1}

// add1();
//  while(rainbowSwitch == 1)
//   {if(rainbowSwitch == 1)
//   {let randomColo = function () {colorSelect.value='#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');};
  

// rainbow.addEventListener("click", rainbowToggle(rainbowSwitch += 1))
// rainbowOff.addEventListener("click", rainbowToggle("off"))






for (i = 0; i < boxList.length; i++)
 {let currentBox = boxList[i]; 
 
  currentBox.addEventListener("mouseover", function(){ 
     currentBox.style.backgroundColor=colorSelect.value})


     //works but wont shut off
// erase.addEventListener("click", function(){
//   currentBox.addEventListener("mouseover", function(){ 
//      currentBox.style.backgroundColor="white"})})

 function resetPage() {currentBox.style.backgroundColor="white"};
 

  // reset.addEventListener("click", function() {currentBox.style.backgroundColor="white"} )
reset.addEventListener("click", resetPage)



    }};

//calls on load 
drawGrid();










      
 



 

