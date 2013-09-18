$(function(){
	$(".qtitle").click(function(){
		$(".question-container > div > div + div").hide();
		$(this).siblings().animate({
			
		});
	});
	
	$(".question-container > div:first-child > *").show();
});
