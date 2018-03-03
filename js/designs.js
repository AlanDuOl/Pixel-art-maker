// designs for Pixel Art Maker

let grid_width, grid_height, color, submitForm, table;
submitForm = $("#submitForm");
grid_width = $("#width-value");
grid_height = $("#height-value");
color = $("#picked-color");
table = $("table");

//TRY to set property value with document element to make it a loop
let grid = {"width":10,"height":10};

onSubmit();

function onSubmit(){
    // grid_width.val(16);
    // grid_height.val(15);
    grid['width'] = grid_width.val();
    grid['height'] = grid_height.val();
    color.val('rgb(255, 12,25)');
    // $.post("index.html", function(data){
    //     let val = data.serialize();
    // alert(grid['width']);
    // })
}

$(function makeGrid(){
    width = grid['width'];
    height = grid['height'];
    // //width = submitForm.submit().$("#width-value").val();
    // submitForm.submit($(function(){
    //     width = grid_width.val();
    //     height = grid_height.val();
        //document.cookie = `width=;${grid_width.val()}`;
        //$('footer').append("<p>" + val + "</p>");
    for(let row = 0; row < height; row++){
      let newRow = $('table').append("<tr>");
      for(let col = 0; col < width; col++){
        newRow.append("<td>");
      }
      table.append("</tr>");
    }
    $('footer').append("<p>" + width + "</p>");
});
