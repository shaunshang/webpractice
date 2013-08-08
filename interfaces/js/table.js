$(function(){
	/*
	 * table checkbox - check or uncheck all
	 * 
	 * */
	$(".table-checkbox thead input[type='checkbox']").click(function(){
		if($(this).is(":checked")) {
			$(".table-checkbox tbody input[type='checkbox']").prop("checked", this.checked);
			$(".table-checkbox tbody tr").attr("class", "selected");
			$(".checkbox-container").addClass("checked");
		} else {
			$(".table-checkbox tbody input[type='checkbox']").removeAttr("checked");
			$(".table-checkbox tbody tr").removeAttr("class");
			$(".checkbox-container").removeClass("checked");
		};
	});
	
	/*
	 * table checkbox - single check or uncheck
	 * 
	 * */
	$(".table-checkbox tbody input[type='checkbox']").click(function(){
		if($(this).is(":checked")) {
			$(this).closest('tr').addClass("selected");
			$(this).parent().addClass("checked");
		} else {
			$(this).closest('tr').removeClass("selected");
			$(this).parent().removeClass("checked");
		};
	});
	
	/*
	 * Title: Mouse right click
	 * Step 1: disable the default right click menu
	 * Step 2: define the actions for right click on the table
	 * */
	//Step 1
	//$(document)[0].oncontextmenu = function() {return false;}
	
	//Step 2:
	/*
	$('body').mousedown(function(e) {
		switch (e.which) {
			case 1://left click
				if($(e.target).is(".rightclick-menu a")) {
	              //alert("You clicked on the menu");
	            } else {
	              $(".rightclick-menu").offset({top:0, left:0});
	              $(".rightclick-menu").hide();
	            }
				break;
			default:
		}
	});
	  
	$('.table-checkbox tbody tr, .table-status tbody tr').mousedown(function(e) {
		switch (e.which) {
			case 3://right click
				$(".rightclick-menu").offset({top:e.pageY, left:e.pageX});
				$(".rightclick-menu").fadeIn("fast");
				break;
			default:
		}
	});
	*/
})