$(function(){
	/*
	 * Dropdown menu
	 * 
	 * */
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
	
	
	/*
	 * Sub menu
	 * 
	 * */
	$("a[data-toggle='submenu']").click(function(){
		$(this).next().slideToggle();
	});
	
	
	/*
	 * Check box
	 * 
	 * */
	$(".input-controls > div label[name='checkbox']").click(function(){
		if($(this).find("input[type='checkbox']").is(":checked")) {
			$(this).find("span").addClass("checked");
		} else {
			$(this).find("span").removeClass("checked");
		}
	});
	
	
	/*
	 * Radio button
	 * 
	 * */
	$(".input-controls > div label[name='radio']").click(function(){
		$(".input-controls > div label[name='radio']").find("span").removeClass("checked");
		if($(this).find("input[type='radio']").is(":checked")) {
			$(this).find("span").addClass("checked");
		} else {
			$(this).find("span").removeClass("checked");
		}
	});
	
	
	/*
	 * Progress bar
	 * 
	 * */
	calculateProgress(false);
	
	$(".horizontal-wizards .wizards-steps > div").click(function(){
		$(".horizontal-wizards .wizards-steps > div").removeClass("active");
		$(this).addClass("active");
		
		calculateProgress(true);
	});
	
	
	/*
	 * Change theme
	 * 
	 * */
	$(".change-theme li a").click(function(){
		if($(this).attr("name") == "default") {
			changestyle('css/style.css');
		} else {
			changestyle('css/style2.css');
		}
	});
	
	
	/*
	 * Window resize
	 * 
	 * */
	resizeWindow();
	
	$(window).resize(function(){
		setTimeout(function(){
			resizeWindow();
		}, 1000);
	});
});

function calculateProgress(bvalue) {
	var currentStep = $(".horizontal-wizards .wizards-steps > div.active span").html();
	var totalStep = $("input[type='hidden']").val();
	var percentage = (currentStep / totalStep).toFixed(2) * 100 + "%";
	
	$(".wizards-progress span[name='count']").html(currentStep);
	$(".wizards-progress span[name='total']").html(totalStep);
	$(".wizards-progress span[name='percentage']").html(percentage);
	
	if(bvalue == false) {
		$(".wizards-progress > div").css("width", percentage);
	} else {
		$(".wizards-progress > div").animate({"width" : percentage}, 1000, "swing");
	}
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

function resizeWindow() {
	var wheight = $(Window).height();
	var wwidth = $(Window).width() - 220;
	var banner = $(".banner").height();
	var footer = $(".footer").height();
	var height = window - banner - footer; 
	//alert(wwidth);
	
	$(".body-container").css("height", height);
	$("#line-chart").attr("width", wwidth);
	$("#pie-chart").attr("width", wwidth / 2);
	$("#bar-chart").attr("width", wwidth / 2);
	
	drawCharts();
}

function drawCharts() {
	drawLine();
	drawPie();
	drawBar();
}