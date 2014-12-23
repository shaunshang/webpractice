$(function(){
	$(".detail-tabs li a").click(function(){
		var target = $(this).attr("class");
		
		$(".detail-tabs li").removeClass("current");
		$(this).parent().addClass("current");
		
		$("tbody").hide();
		$("tbody."+target).show();
	});
	
	/*
	 * table checkbox - single check or uncheck
	 * 
	 * */
	$(".checkbox-container input[type='checkbox']").click(function(){
		if($(this).is(":checked")) {
			$(this).parent().addClass("checked");
		} else {
			$(this).parent().removeClass("checked");
		};
	});
});