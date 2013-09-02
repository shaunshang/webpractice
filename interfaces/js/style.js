$(function(){
	/* window height resize*/
	resizeWindow();
	
	$(window).resize(function(){
		resizeWindow();
	})
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
	
	
	/*
	 * JQuery Date
	 * 
	 * */
	//$('#analog-clock').clock({offset: '+8', type: 'analog'});
	
	
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
});

function resizeWindow() {
	var height = $(window).height() - 50;
	
	$(".body-container").css("height", height+"px");
}