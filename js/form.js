	//alert();
	/*
	 * form options
	 * 
	 * */
	$(".form-options").click(function(){
		var target = $(this).attr("data-trigger");
		$("."+target).fadeToggle("fast");
	});
	
	
	/*
	 * Add Tag
	 * 
	 * */
	$("input[name='add-tag']").focusout(function(){
		if($(this).val() == "" || $(this).val() == " ") {
			//doing nothing
		} else {
			$(this).before("<span class='tag'><span>" + $(this).val() + "</span><a href='javascript:;' class='remove-tag' onclick='removeTag(this)'>x</a></span>");
		}
		
		$(this).val("");
	});
	
	
	/*
	 * Tooltips on textfield
	 * 
	 * */
	$(".form-body input[name='tooltips']").focus(function(){
		$(this).prev().offset({top: -20, left: 0});
		$(this).prev().fadeIn("fast");
	});
	
	$(".form-body input[name='tooltips']").focusout(function(){
		$(this).prev().offset({top: 20, left: 0});
		$(this).prev().hide();
	});
	
	
	/*
	 * Close Error Message
	 * 
	 * */
	$(".remove-error").click(function(){
		var obj = $(this);
		
		$(this).parent().fadeOut("fast");
		
		setTimeout(function(){
			obj.parent().remove();
		}, 300);
		
		setTimeout(function(){
			checkempty();
		}, 300)
	});
	
	/*
	 * Sortable
	 * 
	 * */
	$( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    
    
    /*
     * 
     * Checkbox
     * 
     * */
    $(".checkbox-container input[type='checkbox']").click(function(){
		if($(this).is(":checked")) {
			$(this).closest('tr').addClass("selected");
			$(this).parent().addClass("checked");
		} else {
			$(this).closest('tr').removeClass("selected");
			$(this).parent().removeClass("checked");
		};
	});
    
    $(".tabs li a").click(function(){
        var target = $(this).attr("id");
        
        $(".tabs li").removeClass("current");
        $(this).parent().addClass("current");
        $(".tab-content").hide();
        $("div[name='" + target + "']").show();
      });
    
function removeTag(obj) {
	$(obj).parent().fadeOut("fast");
	
	setTimeout(function(){
		$(obj).parent().remove();
	}, 1000)
}

function checkempty() {
	var isempty = $(".form-body thead td").find(".error-message").html();
	if(isempty == null) {
		$(".form-body thead td").slideUp();
	}
}
