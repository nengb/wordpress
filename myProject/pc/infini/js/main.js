


// 锚点滑动
jQuery.fn.scrollTo = function(name,speed,offset) {
      var targetOffset = $(name).offset().top;
      $('html,body').stop().animate({scrollTop: targetOffset-offset}, speed);
    };

$(function(){

    // 点击导航栏改变颜色
   var nav=$("#nav ul li");
   nav.on("click",function(){
      var index=$(this).index();
      nav.eq(index).addClass('active').siblings().removeClass('active');
   });


   $(document).scroll(function(){
   
      var scrollTop=$(document).scrollTop();

      if(scrollTop >0 && scrollTop<10){
          $("#nav ul li").eq(0).addClass('active').siblings().removeClass('active');
      }
     if( scrollTop>612 && scrollTop<990){
          $("#nav ul li").eq(1).addClass('active').siblings().removeClass('active');
      }
      if( scrollTop>980){
          $("#nav ul li").eq(2).addClass('active').siblings().removeClass('active');
      }
   })
// banner滑动

   var container=$('.swiper-container');
   var wrapper=$('.swiper-container ul');
   var slide=$('.swiper-container ul li');
   var pagination=$('.swiper-container .pagination span');
   var slideFont=$('.swiper-container .slideFont p');
   var myCenter=$('.center');
   var arrowLeft=$('#arrowLeft');
   var arrowRight=$('#arrowRight');

         // 设置wrapper长度-------slide宽度*数量
          slide.width(myCenter.width());
          wrapper.width(myCenter.width()*slide.length);

          // 缩放浏览器改变wrapper长度
         $(window).resize(function() {

           slide.width(myCenter.width());
           wrapper.width(myCenter.width()*slide.length);
           wrapper.css({"left":-slide.width()*index}) ;  

        })

  var index=1;   
  wrapper.css({"left":-slide.width()*index}) ;  
           wrapper.css({"transition":"0s"}) ;

//点击左边按钮滑动
  arrowLeft.on("click",function(){
        wrapper.css({"transition":"0.5s"}) ; 

       if(index>0){
        index--;
      }
      if(index<1){
        console.log(index);

        wrapper.css({"left":-slide.width()*index});
        var timer=setTimeout(function(){
        wrapper.css({"transition":"0s"}) ;  
       index=6;
       wrapper.css({"left":-slide.width()*index});
       pagination.eq(index-1).addClass('active').siblings().removeClass('active'); 

        },500)
        console.log(index);
      }
      
       wrapper.css({"left":-slide.width()*index}) ;      
      pagination.eq(index-1).addClass('active').siblings().removeClass('active');   
      slideFont.eq(index).addClass('active').siblings().removeClass('active');    
      
  })

//点击右边按钮滑动
  arrowRight.on("click",function(){
      wrapper.css({"transition":"0.5s"}) ; 
      if(index<slide.length-1){
        index++;
      }
      if(index>slide.length-2){

        wrapper.css({"left":-slide.width()*index});

        var timer=setTimeout(function(){
           wrapper.css({"transition":"0s"}) ;  
          index=1;
          wrapper.css({"left":-slide.width()*index});
      pagination.eq(index-1).addClass('active').siblings().removeClass('active');   

      console.log(index+"=+");
        },500)
          
      }

        wrapper.css({"left":-slide.width()*index}) ;    
      pagination.eq(index-1).addClass('active').siblings().removeClass('active');   
      slideFont.eq(index).addClass('active').siblings().removeClass('active');   
  })

pagination.on('click',function(){
        wrapper.css({"transition":"0.5s"}) ; 

       var indexPag=$(this).index();
       index=indexPag+1;
       wrapper.css({"left":-slide.width()*index}) ; 

       pagination.eq(indexPag).addClass('active').siblings().removeClass('active');
      slideFont.eq(indexPag).addClass('active').siblings().removeClass('active');    
})
        
 // 自动滑动
setInterval(function(){

      wrapper.css({"transition":"0.5s"}) ; 
      if(index<slide.length-1){
        index++;
      }
      if(index>slide.length-2){

        wrapper.css({"left":-slide.width()*index});

        var timer=setTimeout(function(){
           wrapper.css({"transition":"0s"}) ;  
          index=1;
          wrapper.css({"left":-slide.width()*index});
      pagination.eq(index-1).addClass('active').siblings().removeClass('active');   

      console.log(index+"=+");
        },500)
          
      }

        wrapper.css({"left":-slide.width()*index}) ;    
      pagination.eq(index-1).addClass('active').siblings().removeClass('active');   
      slideFont.eq(index).addClass('active').siblings().removeClass('active');   

},2000)


})



