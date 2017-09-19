$(document).ready(function(){

function createGrid(size){
    var html = "";
    for(let i=0; i<size; i++){
      for(let j=0; j<size; j++){
        html += "<div class='pixel'></div>";
        if (j === size-1){
          html += "<br>";
        }
      }
    }
    $(".grid").html(html);
    $(".pixel").css("width", 400/size);
    $(".pixel").css("height", 400/size);
  }

  // Creates initial 16x16 grid
  createGrid(16);

  // Colors pixel when cursor hovers over it
  $(".grid").on("mouseenter", ".pixel", function(){
    //var inkColor = $("input").value;
    $(this).css("background-color", "black");
  });

  // Clears grid when clear-button clicked
  $("#clear-button").click(function(){
    $(".pixel").css("background-color","white");
  });

  // Change grid size
  $("#resize-button").click(function(){
    var newSize = prompt("Enter a number up to 25:");
    createGrid(newSize);
  });

  // Changes "ink" color
  /*$("input").change(function(){
    var newInkColor = $("input").value;
    $(".pixel").css("background-color", newInkColor);
  });*/

});
