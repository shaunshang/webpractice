$(function(){
	resizeWindow();
	
	$(window).resize(function(){
		resizeWindow();
	})
	
	$("a[data-toggle='dropdown']").click(function(){
		$(this).next().toggle();
	});
	
	var expand = false;
	
	$(".expand a").click(function(){
		$(".banner-title").toggle();
	});
});

function resizeWindow() {
	var window = $(Window).height();
	var banner = $(".banner").height();
	var footer = $(".footer").height();
	
	var height = window - banner - footer; 
	
	$(".body-container").css("height", height);
}