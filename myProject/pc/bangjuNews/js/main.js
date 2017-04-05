


$(function(){

	

	
	
	Tabs(".proField_con>ul>li",".proField_list>ul>li","active");
	//Tabs切换
	function Tabs(showObj,togglesObj,className){
		var togglesObject = $(togglesObj);
		togglesObject.hover(function(){
			var index = $(this).index();
			var thisId = $(this).parent().parent().attr("id");
			$(this).addClass(className).siblings().removeClass(className);
			$("#"+thisId+"_con").children("ul").children("li").removeClass(className).hide().eq(index).addClass(className).show();
		})
	};
	
	
	
	
//	about页
 var aboutWorkEn=new Swiper('.aboutWorkEnList',{
 	calculateHeight : true,
 	pagination : '.pagination',
	paginationClickable :true,
 })

	
		
})
