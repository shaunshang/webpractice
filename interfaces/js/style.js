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
	
	
	/*
	 * JQuery Date
	 * 
	 * */
	//$('#analog-clock').clock({offset: '+8', type: 'analog'});
	
	
	/*
	 * Display Date
	 * 
	 * */
	/*
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth();
	var date = d.getDate();
	var today = d.getDay();
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var months = ['Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun', "Jul", "Aug", 'Sep', 'Oct', 'Nov', 'Dec'];
	$(".day").html(days[today]);
	$(".date").html(date + "th " + months[month] + " " + year);
	*/
	
	
	/*
	 * Pie Chart for account status
	 * 
	 * */
	var data = [19, 1, 1, 3, 5, 9];
	var label = ["50%", "2%", "2%", "7%", "13%", "23%"];
	var color = ["#51AE7C", "#F3EDE7", "#E16041", "#E9C765", "#6190AD", "#766B5F"];
	var canvas = $("#peichart");
	var context = canvas.getContext("2d");
	//alert();
	drawSegment(canvas, context, i);
});

function drawSegment(canvas, context, i) {
	//alert();
}

