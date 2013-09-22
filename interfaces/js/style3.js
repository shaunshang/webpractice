$(function(){
	var count = 1;
	var total = $(".question").length;
	
	$("#prev").click(function(){
		if(count > 1) {
			count--;
			$(".question").animate({ "left": "+=100%" }, 500, "swing" );
		}
	});
	
	$("#next").click(function(){
		if(count < total) {
			count++;
			$(".question").animate({ "left": "-=100%" }, 500, "swing" );
		}
	});
});