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
		$(".sidebar").toggle();
		
		if(expand == false) {
			$(".body").css("padding-left", "0");
			expand = true;
		} else {
			$(".body").css("padding-left", "210px");
			expand = false;
		}
	});
});

function resizeWindow() {
	var window = $(Window).height();
	var banner = $(".banner").height();
	var footer = $(".footer").height();
	
	var height = window - banner - footer; 
	
	$(".body-container").css("height", height);
}