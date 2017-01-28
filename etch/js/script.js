$(document).ready(function(){
	var user = prompt("Please enter resolution of grid");

	if (user > 64){
		user = 64
	}
	var squareSize = 600 / user;
	var grid = user * user;
	
	for (var i = 0; i < grid; i++) {
		$('.wrapper').append("<div></div>");
	};
	$('.wrapper div').addClass("gridSquare");
	$('.gridSquare').width(squareSize+"px");
	$('.gridSquare').height(squareSize+"px");

	$('.gridSquare').hover(function(){
		$(this).css("background-color","#000");
	});
	$('button#reset').click(function(){
		$('.gridSquare').css("background-color", "#fff");
		$('.gridSquare').hover(function(){
		$(this).css("background-color","#000");
	});
	})
	$('button#colour').click(function(){
	$('.gridSquare').hover(function(){
		$(this).css("background-color",'#' + Math.floor(Math.random()*16777215).toString(16));
	});
	});
});
