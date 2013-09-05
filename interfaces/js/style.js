$(function(){
	$("a[data-toggle='dropdown']").click(function(){
		$(this).next().toggle();
	});
});