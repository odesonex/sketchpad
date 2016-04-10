
var i=0;
var k=16;

function applyColor(){
	var color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	$("#content").on("mouseenter", ".square", function(){
    	$(this).css("background-color", color);	
	});
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function spawnSquares(){
	while(i <= k*k){
	var size=480/k-4;
    $(".square").css({"width": size, "height": size});
    $("<div>").addClass("square").appendTo("#content");
    i++;
	}
}

$(function(){
  	applyColor();
    spawnSquares();  
});

$(function(){
 $("#resize").on("click", function() {
  	$(".square").remove();
  	i = 0;
	applyColor();
	var k = prompt("Please enter a new width:)");
	while(i <= k*k){
		var size=480/k-4;
    	$(".square").css({"width": size, "height": size});
    	$("<div>").addClass("square").appendTo("#content");
   	 	i++;
		}
	});
});

$(function(){
	$("#w_button").on("click", function() {
  		var color = "white";
  		$("#content").on("mouseenter", ".square", function(){
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
  	applyColor();
  	});
});

$(function(){
	$("#rainbow").on("click", function() {
  		$("#content").on("mouseenter", ".square", function(){
   		 $(this).css("background-color", getRandomColor());
 		 });
	});
});
