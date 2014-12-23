$(function(){
	$(".expand").click(function(){
		$(this).parent().find(".listusers").slideToggle("fast");
	});
	
	$(".trigger").click(function(){
		trigger();
	});
	
	$(".desk").click(function(e){
		$target = $(e.target);
		if(!$target.is(".expand")) {
			$(this).find(".desk-user").html("Registering <i class='loading1'></i>");
		}
	});
	
	$(".launch-curriculum").click(function(){
		$(".notification").fadeIn("slow").delay(2000).fadeOut("slow");
	});
	
	$(".login input[type='button']").click(function(){
		trigger();
	});
});

function trigger() {
	$(".trigger").prev().slideToggle("slow");
}