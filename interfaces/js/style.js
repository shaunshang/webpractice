$(function(){
	/*
	 * start up page
	 * 
	 * */
	$.ajax({
		async: false,
		cache: false,
		type: "GET",
		url: "dashboard.html",
		error: function(xml){alert("Error request failed");},
		timeout: 1000,
		success: function(e) {
			$(".body-container").empty().append(e);
		}
	});
	
	
	/*
	 * Start button
	 * 
	 * */
	var open = false;
	
	$(".start-btn > a").click(function(){
		$(".start-menu").fadeToggle("fast");
		if(open) {
			$(this).removeClass("active");
			open = false;
		} else {
			$(this).addClass("active");
			open = true;
		}
	});
});