// Creates grid
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

// Colors pixel when cursor hovers over it
$(".pixel").mouseenter(function(){
  var inkColor = $("input").value;
  $(this).css("background-color","black");
});

// Clears grid when clear-button clicked
$("#clear-button").click(function(){
  $(".pixel").css("background-color","white");
});

// Changes "ink" color
/*$("input").change(function(){
  var newInkColor = $("input").value;
  $(".pixel").css("background-color", newInkColor);
});*/
