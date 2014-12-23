$(function(){
	$(".tab-container > div").click(function(){
		var target = $(this).data("toggle");
		
		$(".tab-container > div").removeClass("active");
		$(this).addClass("active");
		$(".question").fadeOut();
		$("div[name='"+target+"']").fadeIn();
	});
});