$(function(){
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
	 * start up page
	 * 
	 * */
	$.ajax({
		async: false,
		cache: false,
		type: "GET",
		url: "admin-home.html",
		error: function(xml){alert("Error request failed");},
		timeout: 1000,
		success: function(e) {
			$(".wrapper-container").empty().append(e);
		}
	});
});

var isfullscreen = false;

function fullscreen() {
	$(".sidebar").toggle( "slide" );
	if(isfullscreen == false) {
		isfullscreen = true;
		$(".fullscreen a").addClass("hover");
		$(".wrapper-container").css("margin-left", "0");			
	} else {
		isfullscreen = false;
		$(".fullscreen a").removeClass("hover");
		$(".wrapper-container").css("margin-left", "90px");
	}
}

var istabstoggle = false;

function tabtoggle() {
	$(".tabs").slideToggle("fast");
	if(istabstoggle == false) {
		istabstoggle = true;
		$(".tabstoggle a").addClass("hover");
	} else {
		istabstoggle = false;
		$(".tabstoggle a").removeClass("hover");
	}
}

function dropdown(obj) {
	var target = obj.getAttribute("data-trigger");
	
	$("."+target).fadeToggle("fast");
}

var cookie_name = "style";
var cookie_duration = 30;

function changestyle(css_title) {
	$("#theme").attr("href", css_title);
	
	setCookie(cookie_name, css_title, cookie_duration);
}

function setCookie(cName, cTitle, cDuration, cDomain) {
	document.cookie = cName + "=" + encodeURIComponent(cTitle) + "; max-age=" + 60 * 60 * 24 * cDuration;	
}

function getCookie(cName) {
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + cName + "=");
	
	if(c_start == -1) {
		c_start = c_value.indexOf(cName + "=");
	}
	
	if(c_start == -1) {
		c_value = null;
	} else {
		c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if(c_end == -1) {
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start, c_end));
	}
	
	return c_value;
}

function setStyleFromCookie() {
	var c_title = getCookie(cookie_name);
	if(c_title.length) {
		changestyle(c_title);
	}
}

function gotopage(obj, target) {
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

