	
jQuery.fn.scrollTo = function(name,speed) {
	var targetOffset = $('.'+name).offset().top;
	$('html,body').stop().animate({scrollTop: targetOffset}, speed);
	return this;
};



$(function(){
	
	
	$('.rightBar_phone,.rightBar_2dcode').hover(function(){
		$('.rightBar_2dcodeImg').stop().fadeToggle();
	});



	var banner=new Swiper('.in_banner',{
		pagination:'.in_banner .swiper-pagination',
		paginationClickable:true,
		calculateHeight : true,
		autoplay : 2000,
	});
	$('.advantagePop').fadeOut(1);
		$('.advantageXiaoGuo').click(function(){
			$('.advantagePop').fadeIn(300);
		});
		$('.advantagePopFrame .btnClose').click(function(){
			$('.advantagePop').fadeOut(300);
		});
	
	var pop=new Swiper('.advantagePopFrame>.swiper-container',{
		pagination:'.advantagePopFrame .pagination',
		paginationClickable:true,
		calculateHeight : true,
		
	});
				
		$('.advantagePop .btnArrow .left').click(function(){
			pop.swipePrev(); 
		});
		$('.advantagePop .btnArrow .right').click(function(){
			pop.swipeNext(); 		
		});
	
	
	
	
	

	
		


})


