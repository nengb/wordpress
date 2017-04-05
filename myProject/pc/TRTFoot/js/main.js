





$(function(){
	
	$(document).scroll(function(){
		if($(document).scrollTop() > 10){
			
			$(".logo").addClass("logoScroll");
			$(".menuIcon").fadeIn(500);
			$(".nav").fadeOut(500);
			
			
		
		}else{
			$(".logo").removeClass("logoScroll");
			$(".menuIcon").hide();
			$(".menuIconNav").fadeOut(500);
			$(".nav").fadeIn(500);
			
			
		}
	});
	
        	$(".menuIcon").on("click",function(){
				$(".menuIconNav").fadeToggle();
			});
        
	var banner=new Swiper('.in_banner',{
		pagination:'.in_banner .swiper-pagination',
		paginationClickable:true,
	});
	$('.arrow-left').click(function(){
		banner.swipePrev()
	})
	$('.arrow-right').click(function(){
		banner.swipeNext();
		
	})
				
				
	var newsList=new Swiper('.in-news-list',{
			simulateTouch : false,
   	});
   	

		$('.in-news-title ul li').click(function(){
				var index = $(this).index();
				newsList.swipeTo(index,500,false);
				$('.in-news-title ul li').filter('.current').removeClass('current');
				$(this).addClass('current');
		});
	
		
		
		var hours=new Date().getHours();
		var minutes=new Date().getMinutes();
		if(hours>=0&&hours<10){
			$('#hours').text("0"+hours);
		}else{
			$('#hours').text(hours);

		}
		if(minutes>=0&&minutes<10){
			$('#minutes').text("0"+minutes);
		}else{
			$('#minutes').text(minutes);
			
		}
		
		switch(hours){
			case 0:$('.time-right-cn').text("子时");$('#timeImg').attr("src","img/time/time_1.png");break;
			case 1:$('.time-right-cn').text("丑时");$('#timeImg').attr("src","img/time/time_2.png");break;
			case 2:$('.time-right-cn').text("丑时");$('#timeImg').attr("src","img/time/time_2.png");break;
			case 3:$('.time-right-cn').text("寅时");$('#timeImg').attr("src","img/time/time_3.png");break;
			case 4:$('.time-right-cn').text("寅时");$('#timeImg').attr("src","img/time/time_3.png");break;
			case 5:$('.time-right-cn').text("卯时");$('#timeImg').attr("src","img/time/time_4.png");break;
			case 6:$('.time-right-cn').text("卯时");$('#timeImg').attr("src","img/time/time_4.png");break;
			case 7:$('.time-right-cn').text("辰时");$('#timeImg').attr("src","img/time/time_5.png");break;
			case 8:$('.time-right-cn').text("辰时");$('#timeImg').attr("src","img/time/time_5.png");break;
			case 9:$('.time-right-cn').text("巳时");$('#timeImg').attr("src","img/time/time_6.png");break;
			case 10:$('.time-right-cn').text("巳时");$('#timeImg').attr("src","img/time/time_6.png");break;
			case 11:$('.time-right-cn').text("午时");$('#timeImg').attr("src","img/time/time_7.png");break;
			case 12:$('.time-right-cn').text("午时");$('#timeImg').attr("src","img/time/time_7.png");break;
			case 13:$('.time-right-cn').text("未时");$('#timeImg').attr("src","img/time/time_8.png");break;
			case 14:$('.time-right-cn').text("未时");$('#timeImg').attr("src","img/time/time_8.png");break;
			case 15:$('.time-right-cn').text("申时");$('#timeImg').attr("src","img/time/time_9.png");break;
			case 16:$('.time-right-cn').text("申时");$('#timeImg').attr("src","img/time/time_9.png");break;
			case 17:$('.time-right-cn').text("酉时");$('#timeImg').attr("src","img/time/time_10.png");break;
			case 18:$('.time-right-cn').text("酉时");$('#timeImg').attr("src","img/time/time_10.png");break;
			case 19:$('.time-right-cn').text("戌时");$('#timeImg').attr("src","img/time/time_11.png");break;
			case 20:$('.time-right-cn').text("戌时");$('#timeImg').attr("src","img/time/time_11.png");break;
			case 21:$('.time-right-cn').text("亥时");$('#timeImg').attr("src","img/time/time_12.png");break;
			case 22:$('.time-right-cn').text("亥时");$('#timeImg').attr("src","img/time/time_12.png");break;
			case 23:$('.time-right-cn').text("子时");$('#timeImg').attr("src","img/time/time_1.png");break;
		}
			
		
		
				
	
	
	
	

	
	
	Tabs(".produceBriefCon",".produceBriefTitle span");
	//Tabs切换
	function Tabs(showObj,togglesObj){
		var togglesObject = $(togglesObj);
		togglesObject.hover(function(){
			var index = $(this).index();
			var thisId = $(this).parent().attr("id");
			var thisClass=$(this).attr("class");
			if(index==0){
				$(".produceBriefTitle span").eq(0).removeClass("produceBriefTitleTwo").addClass("produceBriefTitleTwoH");
				$(".produceBriefTitle span").eq(1).removeClass("produceBriefTitleSixH").addClass("produceBriefTitleSix");
			}else{
				$(".produceBriefTitle span").eq(0).removeClass("produceBriefTitleTwoH").addClass("produceBriefTitleTwo");
				$(".produceBriefTitle span").eq(1).removeClass("produceBriefTitleSix").addClass("produceBriefTitleSixH");
			}
			$("#"+thisId+"_con").find(showObj).hide().eq(index).show();
			
		})
	};
	
	
	
	
	

	
		


})


