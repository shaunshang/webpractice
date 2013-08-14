$(function(){
	$(".detail-tabs li a").click(function(){
		var target = $(this).attr("class");
		
		$(".detail-tabs li").removeClass("current");
		$(this).parent().addClass("current");
		
		$("tbody").hide();
		$("tbody."+target).show();
	})
});