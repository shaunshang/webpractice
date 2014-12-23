$(function(){
	var count = 1;
	var total = $(".question").length;
	var width = $(window).width()+6;
	var width1 = $(window).width()+4;
	var bgcount = 1;
	
	$(".background > div").each(function(){
		var startover;
		
		if(bgcount > 4) {
			bgcount = 1;
			$(this).css("background", "url('images/create"+bgcount+".png') repeat-x");
			$(this).css("background-size", "100% 100%");
		} else {
			$(this).css("background", "url('images/create"+bgcount+".png') repeat-x");
			$(this).css("background-size", "100% 100%");
		}
		
		bgcount++;
	});
	
	
	$("#prev").click(function(){
		if(count > 1) {
			count--;
			$(".question").animate({ "left": "+="+width+"px" }, 500, "swing" );
			setTimeout(function(){
				$(".background > div").animate({ "left": "+="+width1+"px" }, 1200, "swing" );
			}, 200);
		}
	});
	
	$("#next").click(function(){
		if(count < total) {
			count++;
			$(".question").animate({ "left": "-="+width+"px" }, 700, "swing" );
			setTimeout(function(){
				$(".background > div").animate({ "left": "-="+width1+"px" }, 1200, "swing" );
			}, 200);
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