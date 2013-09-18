$(function(){
	$(".qtitle").click(function(){
		$(".question-container > div > div + div").slideUp();
		$(this).siblings().slideDown();
	});
	
	$(".question-container > div:first-child > *").show();
});
