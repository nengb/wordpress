


$(function(){
	
		$(document).scroll(function(){
			
			
			 if($(document).scrollTop() > 20){
				 var a=$(".conImg a");
				 var i=$(".conImg>i");
				 i.addClass("animation_2");
				 a.each(function(index){
				         var time=setTimeout(function(){
						 a.eq(index).children("i").addClass("animation");
				 	},(index+1)*140);
				 })	
			 }
				
			
		})
	
	
		


})


