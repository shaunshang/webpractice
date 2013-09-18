$(function(){
	$(".tab-container > div").click(function(){
		var target = $(this).data("toggle");
		
		$(".question").fadeOut();
		$("div[name='"+target+"']").fadeIn();
	});
});