//declare and set the global variables
let tableDataIds = [];
let grid_width, grid_height, color, table;
grid_width = document.getElementById("inputWidth");
grid_height = document.getElementById("inputHeight");
color = document.getElementById("colorPicker");
table = document.getElementById("pixelCanvas");

makeGrid();

function makeGrid() {
    //grab the input value for grid width and height
    width = getParameterByName('width');
    height = getParameterByName('height');
    //check if initial value is set
    if (width === null || height === null) {
        width = 10;
        height = 10;
    }

    //set the input field value to the corresponding grid width and height
    grid_width.value = width;
    grid_height.value = height;

    //draw the canvas looping through the lines(height) and columns(width)
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

//return the submitted values for grid dimentions
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function clearCanvas(){
    for(let index = 0; index < tableDataIds.length; index++){
        document.getElementById(tableDataIds[index]).style.backgroundColor = "#ffffff";
    }
}
