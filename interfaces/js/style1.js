$(function(){
	$("ul li:last-child").click(function(){
		$(this).before("<li><a href='javascript:;'><span>New Tab</span><span class='close' onclick='removeTab(this)'>x</span></a></li>");
	});
});

function removeTab(obj) {
	obj.parentNode.parentNode.remove();
}