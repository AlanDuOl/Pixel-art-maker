// designs for Pixel Art Maker

let width, height, color, submitBtn;
submitBtn = $("#submit-btn");
height = $("#height-value");
width = $("#width-value");

submitBtn.on('click', function(){
      let val = width.val();
      alert(val);
  });
