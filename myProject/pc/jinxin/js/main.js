$(function(){
		
	var in_banner=new Swiper('.in_banner',{
		pagination : '.in_banner_x .pagination',
		paginationClickable :true,
		autoplay : 2000,
		calculateHeight : true,
		loop : true,
	})

	var in_honor=new Swiper('.in_aboutHonor',{
		autoplay : 2000,
		calculateHeight : true,
		loop : true,
		onInit: function(swiper){
    		swiper.swipeNext()
   		 }
	})
	
	$('.in_aboutHonorLeft').click(function(){
		in_honor.swipePrev(); 
	})
	$('.in_aboutHonorRight').click(function(){
		in_honor.swipeNext(); 
	})
	
	var in_team=new Swiper('.in_teamSwiper',{
		progress:true,
		simulateTouch : false,
		onProgressChange:function(swiper){
			for(var i=0;i<swiper.slides.length;i++){
				var slide=swiper.slides[i];
				var progress=slide.progress;
				var translate=progress*swiper.width;
				var opacity=1-Math.min(Math.abs(progress),1);
				slide.style.opacity=opacity;
				swiper.setTransform(slide,'translate3d('+translate+'px,0,0)');
			}
		},
		onTouchStart:function(swiper){
			for (var i = 0; i < swiper.slides.length; i++){    
	         swiper.setTransition(swiper.slides[i], 0);    
	       }    
	     },    
	     onSetWrapperTransition: function(swiper, speed) {    
	       for (var i = 0; i < swiper.slides.length; i++){    
	         swiper.setTransition(swiper.slides[i], speed);    
	       }    
    	 },  
	})
	
		var teamLi=$('.in_teamList>ul>li');
		teamLi.each(function(index){
			teamLi.eq(index).mouseover(function(){
				in_team.swipeTo(index,1000,false);
				$(this).children('a').css('background-position-y',0);
				$(this).children('a').children('i').css('display','block');
				teamLi.not($(this)).children('a').css('background-position-y',-90);
				teamLi.not($(this)).children('a').children('i').css('display','none');
				
			})
		})
	
	
		


})


