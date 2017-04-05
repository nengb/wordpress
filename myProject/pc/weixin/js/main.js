	
jQuery.fn.scrollTo = function(name,speed) {
	var targetOffset = $('.'+name).offset().top;
	$('html,body').stop().animate({scrollTop: targetOffset}, speed);
	return this;
};







$(function(){
	var trueIn=1;
	$(document).scroll(function(){
	
		 if($(document).scrollTop() > 500){
			$(".rightBar>ul>li.current").fadeIn();
		}else{
			$(".rightBar>ul>li.current").fadeOut();
		}
	
		

		if($(document).scrollTop()>=500){
			
			var inServiceAniLi=$('.in_service>ul>li');
			
			inServiceAniLi.each(function(index){
				var inSeAniLi_time=setTimeout(function(){
				inServiceAniLi.eq(index).addClass('animated fadeInUp');
			},(index+1)*200);
					
				})
		}
		
		if($(document).scrollTop()>=800){
			
			var inSolutionTopCn=$('.in_solution .in_solutionTop .in_solutionTopCn');
			var inSolutionTopEn=$('.in_solution .in_solutionTop .in_solutionTopEn');
			var inSolutionTopSpan=$('.in_solution .in_solutionTop span');
			inSolutionTopCn.addClass('animated fadeInLeft');
			inSolutionTopEn.addClass('animated fadeInRight');
			inSolutionTopSpan.addClass('animated flipInY');
		}
		
		if($(document).scrollTop()>=1100){
			
			var inSolutionLeft=$('.in_solutionLeft');
			var inSolutionRight=$('.in_solutionRight');
			inSolutionLeft.addClass('animated fadeInLeft');
			inSolutionRight.addClass('animated fadeInRight');
		}
		
		if($(document).scrollTop()>=1300){
			
			var inCaseTopCn=$('.in_caseTopCn');
			var inCaseTopEn=$('.in_caseTopEn');
			var inCaseTopSpan=$('.in_caseTop span');
			inCaseTopCn.addClass('animated fadeInLeft');
			inCaseTopEn.addClass('animated fadeInRight');
			inCaseTopSpan.addClass('animated flipInY');
		}
		
		if($(document).scrollTop()>=1600){
				
				$('.in_caseTab_con>ul>li').children().children('dd').each(function(index){
					var inCaseTab_time=setTimeout(function(){
						$('.in_caseTab_con>ul>li').children().children('dd').eq(index).addClass('inCaseAnimated zoomIn');
					},(index+1)*100);
				})
		}
		
		if($(document).scrollTop()>=2300){
				
			var inInforSolutionTopCn=$('.in_information .in_solutionTop .in_solutionTopCn');
			var inInforSolutionTopEn=$('.in_information .in_solutionTop .in_solutionTopEn');
			var inInforSolutionTopSpan=$('.in_information .in_solutionTop span');
			inInforSolutionTopCn.addClass('animated fadeInLeft');
			inInforSolutionTopEn.addClass('animated fadeInRight');
			inInforSolutionTopSpan.addClass('animated flipInY');
		}
		
		if($(document).scrollTop()>=3100&&trueIn){
			
				
			var advanLeftH=$('.in_advantageLeft_h');
			var advanLeftLi=$('.in_advantageLeftList>ul>li');
			var advanRight=$('.in_advantageRight');
			var advanRightLi=$('.in_advantageRightList>ul>li');
			
		
			advanLeftH.addClass('animated fadeInLeft');
			advanLeftLi.each(function(index){
				var advanLeftLi_time=setTimeout(function(){
				advanLeftLi.eq(index).addClass('animated fadeInLeft');
				},(index+1)*300);
			});
			advanRight.addClass('animated fadeInRight');
			advanRightLi.each(function(index){
					var advanRightLi_time=setTimeout(function(){
						advanRightLi.eq(index).addClass('animated fadeInRight');
					},(index+1)*200);
					var advanRightLi_time_1=setTimeout(function(){
						advanRightLi.eq(0).children('a').addClass('in_advantageRightList_h_hover').children('i').css({transform:'rotate(-90deg)'});
						advanRightLi.not(advanRightLi.eq(0)).children('a').removeClass('in_advantageRightList_h_hover').children('i').css({transform:'rotate(0deg)'});
					},600);
					var advanRightLi_time_2=setTimeout(function(){
						advanRightLi.not(advanRightLi.eq(0)).children('.in_advantageRightList_con').slideUp(1000);
						advanRightLi.eq(0).children('.in_advantageRightList_con').slideDown(1000);
					},600);
				
				advanRightLi.eq(index).children('a').on('click',function(){
					advanRightLi.not(advanRightLi.eq(index)).children('.in_advantageRightList_con').slideUp();
					advanRightLi.not(advanRightLi.eq(index)).children('a').removeClass('in_advantageRightList_h_hover').children('i').css({transform:'rotate(0deg)'});
					$(this).addClass('in_advantageRightList_h_hover').children('i').css({transform:'rotate(-90deg)'});
					advanRightLi.eq(index).children('.in_advantageRightList_con').slideDown();
				});
				
			});
			
			trueIn=0;   //让该函数只执行一次
		}
		
		if($(document).scrollTop()>=3400){
				
			var inCusSolutionTopCn=$('.in_customer .in_solutionTop .in_solutionTopCn');
			var inCusSolutionTopEn=$('.in_customer .in_solutionTop .in_solutionTopEn');
			var inCusSolutionTopSpan=$('.in_customer .in_solutionTop span');
			inCusSolutionTopCn.addClass('animated fadeInLeft');
			inCusSolutionTopEn.addClass('animated fadeInRight');
			inCusSolutionTopSpan.addClass('animated flipInY');
		}
		
		if($(document).scrollTop()>=3500){
				
				$('.in_customerList>ul>li').each(function(index){
					var incustomer_time=setTimeout(function(){
						$('.in_customerList>ul>li').eq(index).addClass('inCaseAnimated zoomIn');
					},(index+1)*120);
				})
		}
	
	});
	
	
	
	
	$('.rightBar_phone,.rightBar_2dcode').hover(function(){
		$('.rightBar_2dcodeImg').stop().fadeToggle();
	});



	var banner=new Swiper('.in_banner',{
		pagination:'.in_banner .swiper-pagination',
		paginationClickable:true,
		mode:'vertical',
		
		onFirstInit:function(swiper){//Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper);//隐藏动画元素 
			swiperAnimate(swiper);//初始化完成开始动画
			for(var i=1;i<=5;i++){
				$(".in_bannerIcon_"+i).addClass("banner_"+i);
				};
		},
		
		onSlideChangeEnd:function(swiper){
			swiperAnimate(swiper);//每个slide切换结束时也运行当前slide动画
			if(banner.activeIndex==0){
				for(var i=1;i<=5;i++){
				$(".in_bannerIcon_"+i).addClass("banner_"+i);
				}
				
			}else{
				for(var i=1;i<=5;i++){
				$(".in_bannerIcon_"+i).removeClass("banner_"+i);
				}
			}
		},
	});
	
				
				
	var caseSwiper=new Swiper('.in_caseTab_con',{
		
		onSlideChangeStart: function(swiper){
    		caseTabLi.removeClass('active');
			caseTabLi.eq(caseSwiper.activeIndex).addClass('active');
			var H=$('.in_caseTab_con .swiper-slide-active').height();
			$(".in_caseTab_con").animate({height: H + 'px'});
   		},
		
		
	});
	var caseTabLi=$('.in_caseTab>ul>li');
	caseTabLi.each(function(index){
		$(this).on("click",function(){
			caseTabLi.removeClass('active');
			caseTabLi.eq(index).addClass('active');
			caseSwiper.swipeTo(index,500);
		})
	});
	

	
	
	
	
	var informationSwiper=new Swiper('.in_informationTab_con',{
		onSlideChangeStart: function(swiper){
    	  informationLi.removeClass('active');
			informationLi.eq(informationSwiper.activeIndex).addClass('active');
			
   		},
   		spaceBetween:16,
   		

		
	});
	
	
	var informationLi=$('.in_informationTab>ul>li');
	informationLi.each(function(index){
		$(this).on("click",function(){
			informationLi.removeClass('active');
			informationLi.eq(index).addClass('active');
			informationSwiper.swipeTo(index,500);
		})
	});
	

	
	
	Tabs(".so_tab",".in_solutionLeftList li","in_so_active");
	//Tabs切换
	function Tabs(showObj,togglesObj,className){
		var togglesObject = $(togglesObj);
		togglesObject.on("click",function(){
			var index = $(this).index();
			var thisId = $(this).parent().parent().attr("id");
			$(this).addClass(className).siblings().removeClass(className);
			$("#"+thisId+"_con").find(showObj).removeClass(className).hide().eq(index).addClass(className).show();
		})
	};
	
	

	
		


})


