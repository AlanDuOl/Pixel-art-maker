//Declare and set the global variables
let tableDataIds = [];
let grid_width, grid_height, color, table;
grid_width = document.getElementById("inputWidth");
grid_height = document.getElementById("inputHeight");
color = document.getElementById("colorPicker");
table = document.getElementById("pixelCanvas");

//Call makeGrid
makeGrid();

//Create the grid with the width and height set
function makeGrid() {
    //Grab the input value for grid width and height
    let width = getParameterByName('width');
    let height = getParameterByName('height');
    //Check if initial value is set. If not set it to default 10x10
    if (width === null || height === null) {
        width = 10;
        height = 10;
    }

    //Set the input field value to the corresponding grid width and height
    grid_width.value = width;
    grid_height.value = height;

    //Create the canvas looping through the lines(height) and columns(width)
    for(let row = 0; row < height; row++){
        let tableRow = table.insertRow(row);
        for(let col = 0; col < width; col++){
          let cell = tableRow.insertCell(col);
          cell.id = "tableData-"+row+"-"+col;
          cell.addEventListener("click",function(){
              cell.style.backgroundColor = color.value;
          });
          tableDataIds.push(cell.id);
        }
    }
}

//Return the submitted values for grid dimentions
//This function has been taken from stackoverflow under the link:https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//Clear the canvas colored cells
function clearCanvas(){
    for(let index = 0; index < tableDataIds.length; index++){
        document.getElementById(tableDataIds[index]).style.backgroundColor = "#ffffff";
    }
}
