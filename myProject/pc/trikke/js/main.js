	


$(function(){
	

	var banner=new Swiper('.in_banner',{
		pagination:'.in_banner .pagination',
		paginationClickable:true,
		calculateHeight : true,
		autoplay : 5000,
		loop : true,
	});
	
	$('.in_banner .arrowLeft').on("click",function(){
		banner.swipePrev();
	})
	$('.in_banner .arrowRight').on("click",function(){
		banner.swipeNext();
	})
	
	
var proSwiper=new Swiper('.pro-swiper',{
		pagination:'.pro .pagination',
		paginationClickable:true,
		calculateHeight : true,
		autoplay : 5000,
		
	});
	
		$('.pro-swiper_x .arrow-l').on("click",function(){
		proSwiper.swipePrev();
		})
		$('.pro-swiper_x .arrow-r').on("click",function(){
			proSwiper.swipeNext();
		})

var proHotList=new Swiper('.pro-hot-list',{
		
	});

	$('.pro-hot .arrow-l').on("click",function(){
		proHotList.swipePrev();
		})
		$('.pro-hot .arrow-r').on("click",function(){
			proHotList.swipeNext();
		})

//var newsListSwiper=new Swiper('.newsListSwiper',{
//	
//		
//	});
//
//
//	$('.newsListTop li').on("click",function(){
//		 var index=$(this).index();
//		 newsListSwiper.swipeTo(index,500);
//		 $('.newsListTop li').eq(index).addClass("active").siblings().removeClass("active");
//	
//	})


})


