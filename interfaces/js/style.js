$(function(){
	/*
	 * window height resize
	 * 
	 * */
	resizeWindow();
	
	$(window).resize(function(){
		
		setTimeout(function(){
			resizeWindow();
		},200);
	});
	
	
	/*
	 * start up page
	 * 
	 * */
	$.ajax({
		async: false,
		cache: false,
		type: "GET",
		url: "dashboard.html",
		error: function(xml){
			alert("Error request failed");
		},
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
	
	/*
	 * submenu
	 * 
	 * */
	$(".start-menu li").hover(function(){
		$(this).find(".sub-menu").show();
	}, function(){
		$(this).find(".sub-menu").hide();
	});
	
	/*
	 * JQuery Date
	 * 
	 * */
	$('#analog-clock').clock({offset: '+8', type: 'analog'});
	$('#digital-clock').clock({offset: '+8', type: 'digital'});
	
	
	/*
	 * Display Date
	 * 
	 * */
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth();
	var date = d.getDate();
	var today = d.getDay();
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var months = ['Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun', "Jul", "Aug", 'Sep', 'Oct', 'Nov', 'Dec'];
	$(".day").html(days[today]);
	$(".month").html(months[month] + " / " + year);
	$(".date").html(date);
	
	
	/*
	 * Calendar
	 * 
	 * */
	$("#calendar").calendarWidget({
	});
	
	
	/*
	 * Doughnut Chart for account status
	 * 
	 * */
	var data = [
	  {
	  	value: 19,
	  	color: "#51AE7C"
	  },
	  {
	  	value: 1,
	  	color: "#BDA6CF"
	  },
	  {
	  	value: 1,
	  	color: "#E16041"
	  },
	  {
	  	value: 3,
	  	color: "#E9C765"
	  },
	  {
	  	value: 5,
	  	color: "#6190AD"
	  },
	  {
	  	value: 9,
	  	color: "#766B5F"
	  }
	];
	
	var ctx = document.getElementById("myChart").getContext("2d");
	var myNewChart = new Chart(ctx).Doughnut(
			data,
			{
				animation: false
			}
	);
	
	/*
	 * Main nav click
	 * 
	 * */
	$(".nav-item").click(function(){
		if($(this).find("a").attr("name") == "admin-home") {
			gotoPage($(this).find("a").attr("name"));
		}
	});
	
	/*
	 * Change theme
	 * 
	 * */
	$(".sub-menu li a").click(function(){
		if($(this).attr("name") == "default") {
			//$("link#themefile").attr("href", "css/style.css");
			changestyle('style');
		} else {
			//$("link#themefile").attr("href", "css/style2.css");
			changestyle('style2');
		}
	});
});

function resetPageHeight() {
	$(".tab-content").css("height", "");
}

function resizeWindow() {
	var bodyHeight = $(window).height() - 50;
	$(".body-container").css("height", bodyHeight+"px");
	
	var pageHeight = $(window).height() - 100;
	var tabcontent = $(".tab-content").height() + 42;
	var height = tabcontent - 42;
	
	if(pageHeight <= tabcontent) {
		$(".tab-content").css("height", (pageHeight-40)+"px");
		$(".page-container").css("height", pageHeight+"px");
	} else {
		$(".tab-content").css("height", "");
		$(".page-container").css("height", tabcontent+"px");
	}
}

function gotoPage(target) {
	$(".page-container").show();
	
	$.ajax({
		async: false,
		cache: false,
		type: "GET",
		url: target + ".html",
		error: function(xml){
			alert("Error request failed");
		},
		timeout: 1000,
		success: function(e) {
			$(".page-container").empty().append(e);
		}
	});
	
	resetPageHeight();
	resizeWindow();
	
	$( "#resizable" ).resizable({handles: 'e, w'});
	$( "#resizable" ).draggable();
}

function gotoTab(target) {
	$(".tab-item").removeClass("current");
	$(".tab-item[name='" + target + "']").addClass("current");
	
	$.ajax({
		async: false,
		cache: false,
		type: "GET",
		url: target + ".html",
		error: function(xml){
			alert("Error request failed");
		},
		timeout: 1000,
		success: function(e) {
			$(".tab-content").empty().append(e);
		}
	});
	
	resetPageHeight();
	resizeWindow();
}

function closeWindow(obj) {
	$('#resizable').resizable('destroy');
	$('#resizable').draggable('destroy');
	
	var target = obj.parentNode.parentNode;
	target.style.display = "none";
}


var cookie_name = "style";
var cookie_duration = 30;

function changestyle(css_title) {
	$("#themefile").attr("href", css_title);
	
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