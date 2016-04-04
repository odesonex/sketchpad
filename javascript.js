var color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
var i=0;
var k=prompt("How many squares per side?:)");
var z=768/k-4;

$(function(){
    while (i < k*k){
    $("<div>").addClass("square").appendTo("#wrapper");
    i++;
    }
});



$(document).ready(function(){
  $(".square").css({"width": z, "height": z});
  $("#wrapper").on("mouseenter", ".square", function(){
    $(this).css("background-color", color);
  });
});
