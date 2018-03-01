// designs for Pixel Art Maker

let grid_width, grid_height, color, submitForm, table;
submitForm = $("#updateForm");
grid_width = $("#width-value");
grid_height = $("#height-value");
color = $("#picked-color");
table = $("table");

// submitBtn.click($(function(){
//     var width, height;
//
//     $.ajax({ url: "js/designs.js",
//         cache: false,
//         contentType: "application/json; charset=utf-8",
//         dataType: "html",
//         type: "post",
//         data: { "width": width },
//         success: function (result) {
//             alert(result);
//         },
//         error: function (xhr, ajaxOptions, thrownError) {
//             alert("Error: " + thrownError);
//         }
//     });
let width, height;
$(function makeGrid(){
      width = grid_width.val();
      height = grid_height.val();
      submitForm.submit(function(){
          width = grid_width.val();
          height = grid_height.val();

      });

      for(let row = 0; row < width; row++){
        let newRow = $('table').append("<tr>");
        for(let col = 0; col < height; col++){
          newRow.append("<td>");
        }
        table.append("</tr>");
      }
      $('footer').append("<p>" + width + "</p>");
});

// document.getElementById("mySubmit").value = "newSubmitButtonValue";
