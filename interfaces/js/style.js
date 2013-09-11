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
	
	
	/*
	 * Line chart
	 * 
	 * */
	var data = {
			labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			datasets : [
	      {
	      	fillColor : "rgba(220,220,220,0.5)",
	  			strokeColor : "rgba(220,220,220,1)",
	  			pointColor : "rgba(220,220,220,1)",
	  			pointStrokeColor : "#fff",
	  			data : [65,59,90,81,56,55,40,50,90,70,22,40]
	      },
	      {
	      	fillColor : "rgba(151,187,205,0.5)",
	  			strokeColor : "rgba(151,187,205,1)",
	  			pointColor : "rgba(151,187,205,1)",
	  			pointStrokeColor : "#fff",
	  			data : [28,48,40,19,96,27,100,80,70,40,55,60]
	      }
			]
	}
	var lc = document.getElementById("line-chart").getContext("2d");
	var myNewChart = new Chart(lc).Line(data, {animation : false});
	
	/*
	 * Pie chart
	 * 
	 * */
	var data = [
		{
			value: 30,
			color: "#F38630"
		},
		{
			value : 50,
			color : "rgba(220,220,220,1)"
		},
		{
			value : 100,
			color : "rgba(151,187,205,1)"
		}			
	]
	var pc = document.getElementById("pie-chart").getContext("2d");
	var myNewChart = new Chart(pc).Pie(data, {animation : false});
	
	
	/*
	 * Bar chart
	 * 
	 * */
	var data = {
		labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				data : [65,59,90,81,56,55,40]
			},
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				data : [28,48,40,19,96,27,100]
			}
		]
	}
	var bc = document.getElementById("bar-chart").getContext("2d");
	var myNewChart = new Chart(bc).Bar(data, {animation : false});
});

function resizeWindow() {
	var window = $(Window).height();
	var banner = $(".banner").height();
	var footer = $(".footer").height();
	
	var height = window - banner - footer; 
	
	$(".body-container").css("height", height);
}