$(function(){
	var cv = document.getElementById("canvasId");
	var ctx = cv.getContext("2d");
	var graph = new BarGraph(cv, ctx);
	var xAxisLabel = ["Used", "Active", "Freed", "Available"];
	var xAxisValue = [3, 2, 1, 7];
	graph.drawRect(xAxisValue);
	graph.drawXLabel(xAxisLabel);
	graph.drawYLabel(xAxisValue);
});

function BarGraph(cv, ctx) {
	var margin = 20;
	var marginX = 15;
	var marginY = 27;
	
	this.drawRect = function(newArr) {
		for(var i=0; i<newArr.length; i++) {
			var curHeight = newArr[i] * 10;
			
			ctx.fillStyle = "#EF705B";
			ctx.fillRect(margin, cv.height - curHeight - 14, 20, curHeight);
			
			margin += 40;
		}
	}
	
	this.drawXLabel = function(newArr) {
		for(var i=0; i<newArr.length; i++) {
			var label = newArr[i];
			
			ctx.font = "11px arial";
			ctx.textAlign = "left";
			ctx.fillStyle = "#000";
			ctx.fillText(label, marginX, cv.height);
			
			marginX += 39;
		}
	}
	
	this.drawYLabel = function(newArr){
		for(var i=0; i<newArr.length; i++) {
			var label = newArr[i];
			
			ctx.font = "11px arial";
			ctx.textAlign = "left";
			ctx.fillStyle = "#000";
			ctx.fillText(label, marginY, cv.height-label*10-20);
			
			marginY += 40;
		}
	}
}
