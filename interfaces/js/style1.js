$(function(){
	$("ul li:last-child").click(function(){
		$(this).before("<li><a href='javascript:;'><span>New Tab</span><span class='close' onclick='removeTab(this)'>x</span></a></li>");
	});
	
	$("#tabs").sortable({
		items: "li:not(.add)"
	});
	$("#tabs").disableSelection();
});

function removeTab(obj) {
	var count = $("ul li:not(.add)").length;
	
	if(count != 1) {
		obj.parentNode.parentNode.remove();
	}
}