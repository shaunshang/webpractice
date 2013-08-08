$(function(){
	/*
	 * start button
	 * 
	 * */
	$("a.btn-inner").click(function(){
		var target = $(this).attr("data-trigger");
		$("."+target).fadeToggle("fast");
	});
	
	
	/*
	 * start up page
	 * 
	 * */
	$.ajax({
		async: false,
		cache: false,
		type: "GET",
		url: "configuration.html",
		error: function(xml){alert("Error request failed");},
		timeout: 1000,
		success: function(e) {
			$(".wrapper-container").empty().append(e);
		}
	});
	
	/*
	 * Tool Tips
	 * 
	 * */
	$(".sidebar ul li > a span").hover(function(){
		var name = $(this).parent().attr("name");
		var left = $(this).parent().parent().offset().left - 4;
		var top = $(this).parent().parent().offset().top - 22;
		$(".sidebar .tooltips").offset({top: top, left: left});
		$(".sidebar .tooltips span").html(name);
		$(".sidebar .tooltips").fadeIn("fast");
		
	});
	
	$(".sidebar ul li > a").mouseout(function(){
		$(".tooltips").offset({top:0, left:0});
    	$(".tooltips").hide();
	});
	
	
	/*
	 * Full Screen
	 * 
	 * */
	var fullscreen = false;
	$(".fullscreen a").click(function(){
		$(".sidebar").toggle( "slide" );
		if(fullscreen == false) {
			fullscreen = true;
			$(".fullscreen a").addClass("hover");
			$(".wrapper-container").css("margin-left", "0");			
		} else {
			fullscreen = false;
			$(".fullscreen a").removeClass("hover");
			$(".wrapper-container").css("margin-left", "90px");
		}
		iframeLoaded();
	});
	
	/*
	 * Tabs Toggle
	 * 
	 * */
	var tabstoggle = false;
	$(".tabstoggle a").click(function(){
		$(".tabs").slideToggle("fast");
		if(tabstoggle == false) {
			tabstoggle = true;
			$(".tabstoggle a").addClass("hover");
			//$(".tab-content").css("margin-top", "50px");
		} else {
			tabstoggle = false;
			$(".tabstoggle a").removeClass("hover");
			//$(".tab-content").css("margin-top", "0px");
		}
	});
	
});


function goto(obj, target) {
//	$(".tabs li").removeClass("current");
//	$("#" + target + "-target").parent().addClass("current");
//	
//	$.ajax({
//		async: false,
//		cache: false,
//		type: "GET",
//		url: target+".html",
//		error: function(xml){alert("Error request failed");},
//		timeout: 1000,
//		success: function(e) {
//			$(".tab-content").empty().append(e);
//		}
//	});
	
	$(".sidebar ul li > a").removeClass("current");
	obj.className = "current";
	
	$.ajax({
		async: false,
		cache: false,
		type: "GET",
		url: target+".html",
		error: function(xml){alert("Error request failed");},
		timeout: 1000,
		success: function(e) {
			$(".wrapper-container").empty().append(e);
		}
	});
}