// designs for Pixel Art Maker

let grid_width, grid_height, color, submitBtn, table;
submitBtn = $("#submit-btn");
grid_width = $("#width-value");
grid_height = $("#height-value");
color = $("#picked-color");
table = $("table");
let width = grid_width.val();
let height = grid_height.val();

submitBtn.click($(function(){
      width = grid_width.val();
      height = grid_height.val();

      $("footer").append("<p>"+width+"</p>");

      for(let row = 0; row < width; row++){
        let newRow = table.append("<tr>");
        for(let col = 0; col < height; col++){
          newRow.append("<td>");
        }
        table.append("</tr>");
      }
  }));
