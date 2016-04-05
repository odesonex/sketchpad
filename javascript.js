
var i=0;
var k=16

$(function(){
  var color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  $("#wrapper").on("mouseenter", ".square", function(){
    $(this).css("background-color", color);
  });
    while(i <= k*k){
    var size=768/k-4;
    $(".square").css({"width": size, "height": size});
    $("<div>").addClass("square").appendTo("#wrapper");
    i++;
    }

});

$(function(){
$("#size_button").on("click", function() {
  $(".square").remove();
  var k = prompt("Please enter the new width (between 10-40)");
  i = 0;
  var color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  $("#wrapper").on("mouseenter", ".square", function(){

    $(this).css("background-color", color);
  });
  while(i <= k*k){
    var size=768/k-4;
  $(".square").css({"width": size, "height": size});
  $("<div>").addClass("square").appendTo("#wrapper");
  i++;
}
});
});
$(function(){
$("#w_button").on("click", function() {
  var color = "white";
  $("#wrapper").on("mouseenter", ".square", function(){

    $(this).css("background-color", color);
  });
});
});
$(function(){
$("#clear").on("click", function() {
  var color = "rgba(0,0,0,0.3)";
  $(".square").css("background-color", color);

});
});
$(function(){
$("#random").on("click", function() {
  var color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  $("#wrapper").on("mouseenter", ".square", function(){
    $(this).css("background-color", color);
  });

});
});
$(function(){
$("#rainbow").on("click", function() {
  var color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  $("#wrapper").on("mouseenter", ".square", function(){
    $(this).css("background-color", getRandomColor());
  });

});
});
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
