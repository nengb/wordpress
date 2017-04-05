	
jQuery.fn.scrollTo = function(name,speed) {
	var targetOffset = $('.'+name).offset().top;
	$('html,body').stop().animate({scrollTop: targetOffset}, speed);
	return this;
};



$(function(){
	
	Tabs(".in_newsCon",".in_newsTop ul li","current");
	//Tabs切换
	function Tabs(showObj,togglesObj,className){
		var togglesObject = $(togglesObj);
		togglesObject.hover(function(){
			var index = $(this).index();
			var thisId = $(this).parent().parent().attr("id");
			$(this).addClass(className).siblings().removeClass(className);
			$("#"+thisId+"_con").find(showObj).removeClass(className).hide().eq(index).addClass(className).show();
		})
	};
	
	



	var banner=new Swiper('.in_banner',{
		pagination:'.in_banner .pagination',
		paginationClickable:true,
		calculateHeight : true,
		autoplay : 2000,
		loop : true,
	});
	
	var honor=new Swiper('.honor',{
		calculateHeight : true,
		autoplay : 2000,
	});
	$('.honor_x .arrowBtnLeft').click(function(){
		honor.swipePrev();
	})
	$('.honor_x .arrowBtnRight').click(function(){
		honor.swipeNext();
	})
	
	
	$('.honorTitle ul li').each(function(index){
		$(this).click(function(){
			honor.swipeTo(index,1000,false);
		})
	})
	
	
	var team=new Swiper('.in_teamCon',{
		progress:true,
		calculateHeight : true,
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
	});
	var teamLi=$('.in_teamList>ul>li');
		teamLi.each(function(index){
			teamLi.eq(index).mouseover(function(){
				team.swipeTo(index,1000,false);
				
			})
		})
	
	
	


   var speed=0.5;
   demo2.innerHTML=demo1.innerHTML;

    
   function Marquee(){
    
   if(demo2.offsetHeight-demo.scrollTop<=0)
   demo.scrollTop-=demo1.offsetHeight;
   
    
   else{
   demo.scrollTop++;
   }
   }
   var MyMar=setInterval(Marquee,speed);
   demo.onmouseover=function() {clearInterval(MyMar)};
   demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)};

		


})


