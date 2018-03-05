// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

//TRY to set property value with document element to make it a loop

let grid_width, grid_height, color, submitForm, table, newRow;
submitForm = document.getElementById("sizePicker");
grid_width = document.getElementById("inputWidth");
grid_height = document.getElementById("inputHeight");
color = document.getElementById("colorPicker");
table = document.getElementById("pixelCanvas");
// td = document.createElement("td");
// trO = document.createElement("tr");
// trC = document.createElement("/tr");

// submitForm.onsubmit = function() {
//     width = getParameterByName('width');
//     height = getParameterByName('height');
//     //alert(width);
// };
makeGrid();

function makeGrid() {

    width = getParameterByName('width');
    height = getParameterByName('height');
    //alert(width+" "+height);
    for(let row = 0; row < height; row++){
      let trO = document.createElement("tr");
      table.appendChild(trO);
      for(let col = 0; col < width; col++){
        let td = document.createElement("td");
        trO.appendChild(td);
      }
      //table.appendChild("</tr>");
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// var foo = getParameterByName('foo');
// var bar = getParameterByName('bar');
// var baz = getParameterByName('baz');
// var qux = getParameterByName('qux');

//submitForm.addEventListener("submit", getGridSize);
