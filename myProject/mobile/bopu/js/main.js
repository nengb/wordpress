$(function(){
   	//控制面板
    $(".j-panel").on("click",function(){
        var panel = $(".panel"),
            panelBg = $(".panelBg");
        panel.addClass("panelActive");
        panelBg.show();
        panelBg.on("click",function(){
            panelBg.hide();
            panel.removeClass("panelActive");
        })
        $('html,body').scrollTop(0);
    })
    Tabs(".J-tab",".tabClick>li","active");
    //Tabs切换
    function Tabs(showObj,togglesObj,className){
        var togglesObject = $(togglesObj);
        togglesObject.on("click",function(){
            var index = $(this).index();
            var thisId = $(this).parent().attr("id");
            $(this).addClass(className).siblings().removeClass(className);
            $("#"+thisId+"_con").find(showObj).removeClass(className).hide().eq(index).addClass(className).show();
        })
    }
  

}) 


