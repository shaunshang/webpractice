$(function(){
	/*
	 * window height resize
	 * 
	 * */
	resizeWindow();
	
	$(window).resize(function(){
		
		setTimeout(function(){
			resizeWindow();
		},400);
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
		gotoPage($(this).find("a").attr("name"));
	});
});

function resizeWindow() {
	var height = $(window).height() - 50;
	
	$(".body-container").css("height", height+"px");
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
}

function closeWindow(obj) {
	var target = obj.parentNode.parentNode;
	target.style.display = "none";
}