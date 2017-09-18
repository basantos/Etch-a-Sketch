$(document).ready(function(){;
  var html = "";
  for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
      html += "<div class='pixel'></div>";
      if (j === 15){
        html += "<br>";
      }
    }
  }
  $(".grid").html(html);
});
