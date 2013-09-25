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
	
	$("textarea").keyup(function(){
		var count = $(this).val().replace(/ /g,'').length;
		
		if(count > 40) {
			$(this).addClass("toolong");
			
			$(".letter-count").css("color", "red");
			$(".letter-count span").show();
		} else {
			$(this).removeClass("toolong");
			$(".letter-count").css("color", "rgba(66,68,70,1)");
			$(".letter-count span").hide();
		}
	})
});