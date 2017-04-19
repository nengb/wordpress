'use strict';


window.onload=function(){
<<<<<<< HEAD
    // 原生js
=======
>>>>>>> c2e99c47d536ebb8d60e8b1cb5c5818fdec48881
    var nativeJs = (function(){
        //公共函数区 --------------start--------------
        //解决IE8之类不支持getElementsByClassName
        if (!document.getElementsByClassName) {
            document.getElementsByClassName = function (className, element) {
                var children = (element || document).getElementsByTagName('*');
                var elements = new Array();
                for (var i = 0; i < children.length; i++) {
                    var child = children[i];
                    var classNames = child.className.split(' ');
                    for (var j = 0; j < classNames.length; j++) {
                        if (classNames[j] == className) {
                            elements.push(child);
                            break;
                        }
                    }
                }
                return elements;
            };
        }
        //获取id
        function $(object){
            return document.getElementById(object);
        }
        //获取鼠标位置
        function getMousePos(event,obj) { 
            var obj = obj || null;
<<<<<<< HEAD
            var e = event || window.event; 
            var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft; 
            var scrollY = document.documentElement.scrollTop || document.body.scrollTop; 
            var x = e.pageX || e.clientX + scrollX; 
            var y = e.pageY || e.clientY + scrollY; 
=======
                var e = event || window.event; 
                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft; 
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop; 
                var x = e.pageX || e.clientX + scrollX; 
                var y = e.pageY || e.clientY + scrollY; 
>>>>>>> c2e99c47d536ebb8d60e8b1cb5c5818fdec48881
            if(obj!=null && obj!="document"){
                //获取元素离页面顶部距离
                var objX = obj.getBoundingClientRect().left+scrollX;
                var objY = obj.getBoundingClientRect().top+scrollY;
                x = x - objX;
                y = y - objY;
            }

          //alert('x: ' + x + '\ny: ' + y); 
          return { 'x': x, 'y': y }; 
        } 
        // 事件绑定兼容写法
        function addEvent(obj,event,fun,bool){
            if(obj.addEventListener){                   //非ie
                obj.addEventListener(event,fun,bool||false);
            }else{                                      //ie(6,7,8)
                obj.attachEvent("on"+event,fun);
            }
        }
        // 移除事件绑定
        function removeEvent(obj,event,fun,bool){
            if(obj.removeEventListener){                   //非ie
                obj.removeEventListener(event,fun,bool||false);
            }else{                                      //ie(6,7,8)
                obj.detachEvent("on"+event,fun);
            }
        }
        //阻止事件传播
        function stopEvent(event){
            if(event.stopPropagation){
            event.stopPropagation();
            }else{
                event.cancelBubble=true;
            }
        }
        //阻止默认事件
        function preventEvent(event){
            if(event.preventDefault){
                event.preventDefault();
            }else event.returnValue = false;
        }
        // // 页面加载事件
            // function onloadEvent(obj){
            //     //非IE
            //     if()
            //     document.addEventListener("DOMContentLoaded",function(){
            //         console.log("页面加载完执行,不含图片");  //比load快
            //     },false);

            //     // IE(6,7,8)
            //     document.attachEvent("onreadystatechange",function(){
            //         //onreadystatechange用于检测DOM事件是否加载完毕的整个过程
            //         //判断readyState 属性值是否为完成“完成”
            //         if(document.readtState == "complete"){
            //             console.log("页面加载完执行");
            //         }
            //         // uninitialized (为初始化)：对象存在但尚未初始化。
            //         // loading (正在加载)：对象正在加载数据。
            //         // loaded (加载完毕)：对象加载数据完成。
            //         // interactive (交互)：可以操作对象了，但还没有完全加载。
            //         // complete (完成)：对象已经加载完毕。

            //     },false);
            // }

        //16进制加减16进制
        function addSub16(num1,num2,addSub){
            var x;
            var y;
            var z;
            if(addSub == "add"){
                //先转10进制
                 x = parseInt(num1,16);
                 y = parseInt(num2,16);
                 z = (x+y).toString(16);
                // 相加再转16进制
            }else if(addSub == "sub"){
                 x = parseInt(num1,16);
                 y = parseInt(num2,16);
                 z = (x-y).toString(16);
            }
            
            return z;
        }
        //rgb转16进制
        function rgbChange16(rbg){
            var arr =rbg.split("(");
            arr.shift();
            arr = arr.join('').split(')').join('').split(/[\,\s]+/);
            for(var i in arr){
                arr[i]=parseInt(arr[i]).toString(16);
            }
            arr = arr.join('');
            return arr;
        }
        //滑轮兼容执行函数
        function wheelEvent(event,top,bottom){
            if(event.wheelDelta){       //非火狐
                if(event.wheelDelta >0 ){
                    top();              //上滑
                } 
                if(event.wheelDelta <0 ){
                    bottom();           //下滑
                }
            }else{              //火狐
                if(event.detail < 0){
                    top();              //上滑
                }
                if(event.detail > 0){
                    bottom();           //下滑
                }
            }
        }
        //随机函数  区间[num1,num2);
        function randomNum(num1,num2){
            return Math.random()*(num2-num1)+num1;
        }
        //判断数组中是否包含所需的数
        function arrContain(arr,value){
            for(var i = 0; i<arr.length;i++){
                if(arr[i]==value){
                    return {bool:true,index:i};
                }
            }
            return false;
        }

<<<<<<< HEAD
=======

>>>>>>> c2e99c47d536ebb8d60e8b1cb5c5818fdec48881
        //公共函数区 -----------end------------------

        //页面js代码 --------------------------------
        // 菜单左侧栏和菜单按钮
        var leftBar = (function(){
            var body=document.getElementsByTagName("body")[0];
            var header=$("header");
            var day=$("day");
            // 获取日志的所有日期  
            var dayTitles=day.getElementsByTagName("h2");
            var leftBar=$("leftBar");
            var leftBarWidth=leftBar.offsetWidth;
            var leftBarCons=leftBar.getElementsByTagName("a");
            //侧栏弹出过渡时间（可修改）
            var transitionTime=0.2;
            //设置过渡时间
            leftBar.style.transition=transitionTime+"s";
            day.style.transition=transitionTime+"s";
            
         
            // 存储日志的所有日期
            var dayTitleDate="";
       

            for(var i=0;i<dayTitles.length;i++){
                dayTitleDate+="<a href='###'>"+dayTitles[i].innerText+"</a>";
            }
            //生成左侧栏的日期目录
            leftBar.innerHTML=dayTitleDate;

            // 菜单滑出的反应
            function leftBarTrue(){
                leftBar.style.left=0;
                day.style.paddingLeft=leftBarWidth+"px";
                day.style.background="rgba(217,217,217,0.6)";
                header.style.display="none";
                body.style.overflowY="hidden";
            }
            // 菜单缩回的反应
            function leftBarFalse(){
                leftBar.style.left=-leftBarWidth+"px";
                day.style.paddingLeft=0;
                day.style.background="#fff";
                setTimeout(function(){
                    body.style.overflowY="auto";
                    header.style.display="block";
                }, transitionTime*1000);
            }

            //单击菜单按钮可拖动按钮
            header.onmousedown=function(){
                body.style.userSelect="none";
                body.onmousemove=function(e){
                        header.style.left=getMousePos(e).x-body.scrollLeft-30+"px";
                        header.style.top=getMousePos(e).y-body.scrollTop-30+"px";
                }
                body.onmouseup=function(){
                    body.style.userSelect="auto";
                    body.onmousemove=null;
                }
            }

            // 双击菜单按钮弹出菜单
            header.ondblclick=function(){
               leftBarTrue();
            }
            // 点击内容收缩出菜单
            day.onclick=function(){
               leftBarFalse();
            }
              //点击菜单的日期内容滑倒相应的日期
            for(var i=0;i<dayTitles.length;i++){
                leftBarCons[i].index=i;
                leftBarCons[i].onclick=function(){
                    window.scrollTo(0,dayTitles[this.index].offsetTop-10);
                }
            }
        })();
        //animate动画和3D变换
        var day_17_02_13 = (function(){
            var carrousel=document.getElementById("carrousel");
            var Imgs=carrousel.getElementsByTagName("li");
            for(var i=0;i<12;i++){
                Imgs[i].style.transform="rotateY("+i*30+"deg) translateZ(400px)";
            }
        })();
        //无缝滚动和多栏布局
        var day_17_02_14 = (function(){ 
            var banner=document.getElementById("banner");
            var bannerStart=document.getElementById("bannerStart");
            var bannerStop=document.getElementById("bannerStop");
            bannerStart.onclick=function(){
                banner.style.animationPlayState="running";
            }
            bannerStop.onclick=function(){
                banner.style.animationPlayState="paused";
            }
        })();
        //滤镜和animate动画
        var day_17_02_16 = (function(){
            var day_17_02_16_maskAnimate=document.getElementById("day_17_02_16_maskAnimate");
            var day_17_02_16_maskAnimateBtn=document.getElementById("day_17_02_16_maskAnimateBtn");
            day_17_02_16_maskAnimateBtn.onclick=function(){
                if(day_17_02_16_maskAnimate.className=="img pr"){
                   day_17_02_16_maskAnimate.className="img pr maskAppleAnimate"; 
               }else{
                 day_17_02_16_maskAnimate.className="img pr"; 
                 setInterval(function(){
                    day_17_02_16_maskAnimate.className="img pr maskAppleAnimate"; 
                }, 1);
               }
            }
        })();
        //js隐藏显示和登陆框
        var day_17_02_20 = (function(){
            var day_17_02_20_outer=document.getElementById('day_17_02_20_outer');
            var day_17_02_20_btn=document.getElementById('displayBtn');
            day_17_02_20_btn.onclick=function(){
                if(day_17_02_20_outer.style.visibility=="visible"){
                    day_17_02_20_outer.style.visibility="hidden";
                    day_17_02_20_btn.innerText="显示";
                }
                else{
                     day_17_02_20_outer.style.visibility="visible";
                    day_17_02_20_btn.innerText="隐藏";
                }
            }

            var loginBtn=document.getElementById('loginBtn');
            var login=document.getElementById('login')
            var submit=document.getElementById('submit');
            loginBtn.onclick=function(){
                login.style.display="block";
            }
            submit.onclick=function(){
                login.style.display="none";
            }
        })();
        //tab左右滑动切换
        var day_17_02_21 = (function(){
            console.log("-------day_17_02_21------");
            var day_17_02_21_onfocus=document.getElementById('day_17_02_21_onfocus');
              /*获取焦点*/
            day_17_02_21_onfocus.onfocus=function(){
                if(day_17_02_21_onfocus.placeholder=="请输入手机号"){
                        day_17_02_21_onfocus.placeholder="";
                }
            }
            /*失去焦点*/
            day_17_02_21_onfocus.onblur=function(){
                if(day_17_02_21_onfocus.placeholder==""){
                    day_17_02_21_onfocus.placeholder="请输入手机号";
                }
            }

            // 类型转换
            // Number类型
            console.log(Number(true));  //1
            console.log(Number(false)); //0
            console.log(Number(50));    //50
            console.log(Number(null));  //0
            console.log(Number(undefined));//NaN ==not a NUmber 非数值

            // parseInt转化为整形
            console.log(parseInt("150px")); //150
            /*parseInt浮点型字符串，第一个小数点前是有效数值*/
            console.log(parseInt("666.888"));//666
            console.log(parseInt("abc1321sad"));//NaN

            console.log(parseFloat("456.123")); //456.123
            /*（字符串转换成浮点数）第一个小数点是有效值，第二个小数点开始将被看作无效的，方法于parseInt类似*/
            console.log(parseFloat("456.123.541"));//456.123
            console.log(parseFloat("456px")) //456

            //isNaN,是数值，返回false；不是数值，返回true(一般用于parseInt和parsefloat方法的输入值进行一个提前检测)
            console.log(isNaN('456789')); //false
            console.log(isNaN('bbt')); //true
            console.log(isNaN('465sf')); //true

            /*--------------------*/
            //string()字符串
            var a=10;
            var b="10";
            //字符串的拼接
            console.log(b+String(a));   //1010
            console.log(b+a.toString());//1010
            /*--------------------*/
            var i1=15;
            var i2="10";
            var i3=30;
            console.log(i2+i1+i3);  //101530
            console.log(i1+i3+i2); //4510
            console.log(i1+i2+i3); //151030

            // 参数调用
            function funs2(a,b,c){
                console.log(a+b+c);//not a number
            };
            funs2(2,3); //5

            // 匿名函数调用
            (function (){
                console.log("我是匿名函数");
            })();

            function funs(){
                return '我被调用了';
            }
            console.log(funs());

            function funs3(a,b){
                return '我是函数';
                console.log('没有执行');
            }
            console.log(funs3(1,2));


            function funs4(){
                return arguments;
            }
            console.log(funs4(1,2,3,4,5)); //5
            // arguments指函数参数对象，是一个数组
            function sum(){
                var sum=0;
                if(arguments.length==0){
                    return sum;
                }
                for(var i = 0; i < arguments.length; i++){
                    sum = sum + arguments[i];
                }
                return sum;
            }
            console.log(sum());  //0
            console.log(sum(1,2,3,4,5));//15

            // 双引号和单引号区别
            // \禁止解析""为字符串，单纯用于双引号符号
             var str="ab\"123\"c";
            console.log(str);

            // tab切换

            (function tab(tab){
                var tabTitle=$(tab).getElementsByClassName("tabTitle")[0]
                var tabTitleLis=tabTitle.getElementsByTagName("li");
                var tabConUl=$(tab).getElementsByClassName("tabCon")[0].getElementsByTagName("ul")[0];
                var tabConLis=tabConUl.getElementsByTagName('li');
                var tabConLisWidth=tabConLis[0].offsetWidth;

                tabConUl.style.width=tabConLis.length*tabConLisWidth+"px";
                for(var i=0;i<tabTitleLis.length;i++){
                    tabTitleLis[i].style.width=tabTitle.clientWidth/tabTitleLis.length+"px";
                    tabTitleLis[i].index=i;
                    tabTitleLis[i].onclick=function(){
                        for(var k=0;k<tabTitleLis.length;k++){
                            tabTitleLis[k].className="";
                        }
                        tabTitleLis[this.index].className="active";
                        tabConUl.style.left=-tabConLisWidth*this.index+"px";
                    }
                }
            })("tab");
            

            // 全选和反选
            var checkAllBtns=$('checkAll').getElementsByTagName("button");
            var checkAllIpts=$('checkAll').getElementsByTagName("input");

            checkAllBtns[0].onclick=function(){
                for(var i=0;i<checkAllIpts.length;i++){
                    checkAllIpts[i].checked=true;
                }
            }
            checkAllBtns[1].onclick=function(){
                for(var i=0;i<checkAllIpts.length;i++){
                    if(checkAllIpts[i].checked==false){
                        checkAllIpts[i].checked=true;

                    }else if(checkAllIpts[i].checked==true){
                    checkAllIpts[i].checked=false;
                    }
                }
            }
        })();
        // tab切换和探照灯
        var day_17_02_22 = (function(){
            console.log("--------day_17_02_22--------")
            var tab=$("tabMovie");
            var tabTitle=tab.getElementsByClassName("tabTitle")[0];
            var tabTitleLis=tabTitle.getElementsByTagName("li");
            var tabCon=tab.getElementsByClassName("tabCon")[0];
            var tabConUls=tabCon.getElementsByTagName("ul");

            for(var i=0;i<tabTitleLis.length;i++){
                //根据标题数量设置每个标题的宽度
               tabTitleLis[i].style.width=(tabTitle.clientWidth-68)/tabTitleLis.length+"px"
               //设置每个tab内容的宽带
               tabConUls[i].style.width=tab.clientWidth-48+"px"; 
                //获取索引
               tabTitleLis[i].index=i;
               tabTitleLis[i].onclick=function(){
                    for(var j=0;j<tabTitleLis.length;j++){
                        tabTitleLis[j].className="";
                        tabConUls[j].className="";
                    }
                    tabTitleLis[this.index].className="active";
                    tabConUls[this.index].className="active";
               }
            }
            var day_17_02_22=$("day_17_02_22");
            var mask=day_17_02_22.getElementsByClassName("mask")[0];
            mask.onmousemove=function(){
                var maskPositionX=getMousePos(event).x-mask.offsetLeft-82;
                var maskPositionY=getMousePos(event).y-mask.offsetTop-82;
                mask.style.webkitMaskPositionX=maskPositionX+"px";
                mask.style.webkitMaskPositionY=maskPositionY+"px";
            }
        })();
        // 月历
        var day_17_02_23 = (function(){
            console.log("-------day_17_02_23-------");
            //创建数组
            var arr1=[];
            var arr2=new Array();
            //console.log(arr2);
            //数组赋值

            var arr2=new Array(1,2,"a","b");
            //console.log(arr2.length);
            //console.log(arr2);
            //
            //数组指定的值
            console.log(arr2[2]);
            arr2[2]="ck";
            console.log(arr2[2]);

            //在数组末尾插入值，并返回数组的长度
            console.log(arr2.push("中文","汉语"));
            console.log(arr2);

            //在数组开始插入值，并返回数组的长度
            console.log(arr2.unshift("abc","dfg"));
            console.log(arr2);

            //二维数组
            var arr3=["html","css","css3","javascript"];
            console.log(arr2.push(arr3));
            console.log(arr2);
            console.log(arr2[8][3]);

            var arr4=[50,130,"mm","www"];
            var Arr=[];
            // var Arr=arr4.concat(arr4);
            // 合并数组
            Arr=Arr.concat(arr4);
            console.log(Arr);

            var m=new Map([['neng',111],['ee',22]]);
            var s=new Set([1,2,3]);
            console.log(m);
            console.log(m.get('neng'));
            console.log(m.set('neng',333));
            console.log(m);
            console.log(s);
            s.add(4);
            console.log(s);
            s.delete(2);
            // // console.log(s);
            // for(var i of m){
            //     console.log(i);
            // }
            // for(var i of s){
            //     console.log(i+"------");
            // }
            m.forEach(function(element,index,array){
                console.log(element);
                console.log(index);
                console.log(array);
            });

            //日历
            var day_17_02_23=$("day_17_02_23");
            var calenderTitle=day_17_02_23.getElementsByClassName("title")[0];
            var calenderTitleNodes=calenderTitle.getElementsByTagName("div");

            var calenderCon=day_17_02_23.getElementsByClassName("con")[0];
            var nowDate=new Date();
            var calenderDate=[
                ["JAN","一月春游踏青活动"],
                ["FER","二月不知道干什么"],
                ["MAR","三月好无聊啊"],
                ["APR","四月是什么鬼"],
                ["MAY","这么快就到五月了"],
                ["JUN","六月，半年了么"],
                ["JUL","七月据说。。。。"],
                ["AUG","八月有上面节日来着？"],
                ["SEP","九月了，开学？"],
                ["OCT","十月啦啦啦"],
                ["NOV","十一月小学生还没放假"],
                ["DEC","十二月快过年啦"],
            ];
            //创建空字符串，存储节点字符
            var calenderTitleNode="";
            var calenderConNode="";
            for(var i=0;i<12;i++){
                calenderTitleNode+="<div><p>"+(i+1)+"</p><p>"+calenderDate[i][0]+"</p></div>";
            }
            calenderTitle.innerHTML=calenderTitleNode;
            //获取当前月份并在相应月份加上active类
            calenderTitleNodes[nowDate.getMonth()].className="active";

            for(var i=0;i<12;i++){
                // 获取索引
                calenderTitleNodes[i].index=i;
                // 设置活动内容
                calenderConNode="<p>"+(i+1)+"月份活动</p><p>"+calenderDate[i][1]+"</p>"
                calenderCon.innerHTML=calenderConNode;

                calenderTitleNodes[i].onmouseover=function(){
                    for(var j=0;j<12;j++){
                        calenderTitleNodes[j].className="";
                    }
                    calenderTitleNodes[this.index].className="active";
                    calenderConNode="<p>"+(this.index+1)+"月份活动</p><p>"+calenderDate[this.index][1]+"</p>"
                    calenderCon.innerHTML=calenderConNode;
                }


            }
            console.log(nowDate.getMonth());
        })();
        // Math方法和浏览器识别码
        var day_17_02_24 = (function(){
            console.log("-------day_17_02_24-------");
            // 圆周率
            var PI=Math.PI;
            console.log(PI);

            var a=8.23;
            var b=9.68;
            //ceil向上取整（值大的方向取整）
            //floor向下取整（值大=小的方向取整）
            console.log(Math.ceil(a)); //9
            console.log(Math.floor(b)); //9
            //round四舍五入
            console.log(Math.round(b)); //10

            var c=10;
            console.log(Math.min(a,b,c)); //8.23
            console.log(Math.max(a,b,c)); //10


            //浏览器识别码（字符串）
            var str=window.navigator.userAgent;
            console.log(str);
            // 转换为小写toLowerCase()
            // 转换为大写toUpperCase()
            var str1=str.toLowerCase();
            if(str1.indexOf("chrome")!=-1){
                console.log("我是谷歌");
            }else if(str1.indexOf("firefox")!=-1){
                alert("请使用最新谷歌浏览器打开");
            }else if(str1.indexOf("msie")!=-1){
                alert("请使用最新谷歌浏览器打开");
            }else{
                alert("请使用最新谷歌浏览器打开");
            }
        })();
        //导航栏动效
        var day_17_03_07 = (function(){
            var day_17_03_07=$('day_17_03_07');

            var nav=day_17_03_07.getElementsByClassName('nav')[0];
            var navLi=nav.getElementsByTagName('li');
            var line=day_17_03_07.getElementsByClassName('line')[0];
            //设置nav长度
            nav.style.width=navLi[0].offsetWidth*navLi.length+'px';
            //设置line 长度
            line.style.width=navLi[0].offsetWidth+'px';
            // line.style.left=navLi[0].offsetLeft+'px';
            var time;
            for(var i=0;i<navLi.length;i++){
                navLi[i].index=i;
                navLi[i].onmouseover=function(){
                    clearInterval(time);
                    var line_s=line.offsetLeft;
                    var line_e=this.offsetLeft;
                    var step=0;
                    var eve=(line_e-line_s)/20; 
                    var start;
                     time=setInterval(function(){
                        step++;
                        if(step>=20){
                            clearInterval(time);
                        }

                        start=step*eve;
                        line.style.left=line_s+start+'px';

                    }, 10)
                }
            }
        })();
        //留言板
        var day_17_03_08 = (function(){
            var day_17_03_08=$('day_17_03_08');
            var box1 = day_17_03_08.getElementsByClassName('box1')[0];
            var box2 = day_17_03_08.getElementsByClassName('box2')[0];
            // 获取行间内样式
            // alert(box1.style.height);
            // 获取非行间样式
            // ie8以上支持两种写法
            // alert(box2.currentStyle.height);   //IE 6 7 8
            // alert(getComputedStyle(box2,false).height); //w3c
            var advert=day_17_03_08.getElementsByClassName('advert')[0];
            form0308.onsubmit=function(){
                if(!form0308.name.value && !form0308.content.value){
                    alert("你在逗我！都没填写怎么提交？");
                }else if(!form0308.name.value){
                    alert("姓名不能为空！！");
                }else if(!form0308.content.value){
                    alert("内容不能为空！！");
                }else{
                    var dl=document.createElement('dl');
                    dl.innerHTML='<dt>'+form0308.name.value+'</dt><dd><p>'+form0308.content.value+'</p><a class="delete" href="###">删除</a></dd>';
                    advert.appendChild(dl);
                    form0308.name.value="";
                    form0308.content.value="";
                    move(dl,0,dl.offsetHeight);
                    
                }
                return false;
            }

            // 事件绑定兼容写法
            function addEvent(obj,event,fun){
                if(obj.addEventListener){
                    obj.addEventListener(event,fun,false);
                }else{
                    obj.attachEvent("on"+event,fun);
                }
            }

            // 分步走
            function move(obj,start,end,type){
                obj.style.height=start+'px';
                var height=obj.offsetHeight;
                var step = 0;
                var eve = (end-start)/20;
                var time = setInterval(function(){
                    step++;
                    if(step>=20){
                        clearInterval(time);
                        if(type==='remove'){
                            advert.removeChild(obj);
                        }
                    }
                    //偏移量 
                    var offSet=eve*step;
                    obj.style.height=height+offSet+'px';
                    
                },20)
            }
            // var s="offsetHeight";
            // alert(advert.s);
            addEvent(advert,"click",function(ev){
                if(ev.target.className==="delete"){
                    move(ev.target.parentNode.parentNode,ev.target.parentNode.parentNode.offsetHeight,0,'remove');
                }
            });
        })();
        // addEventListener事件绑定
        var day_17_03_09 = (function(){
            console.log('--------day_17_03_09------');

            //addEventListener事件绑定
            // list.addEventListener("mouseover",function(ev){
            //     // target事件对象
            //     ev.target.style.background="red";
            // })
            // list.removeEvenListener("mouseover",function(){
            //     ev.target.style.background="red";
            // },false)
            // 
            // IE（6 7 8）
            // ie事件绑定
            // list.attachEvent("onmouseover",function(){});
            // ie事件移除
            // list.detachEvent("onmouseover",function(){});
            // 
            // 事件绑定兼容写法
           function addEvent(obj,event,fun){
                if(obj.addEventListener){
                    obj.addEventListener(event,fun,false);
                }else{
                    obj.attachEvent("on"+event,fun);
                }
            }
        })();
        // 瀑布流无限下拉加载
        var day_17_03_10 = (function(){
            console.log('--------day_17_03_10------');
            var day_17_03_10=document.getElementById('day_17_03_10');
            var waterfall=day_17_03_10.getElementsByClassName('waterfall')[0];
            var ul=waterfall.getElementsByTagName('ul');

            // 随机函数（区间值）
            function randomNum(start,end){
                var number=Math.round(Math.random()*start+(end-start));
                return number;
            }
            // 获取数组中最小值(返回索引)
            function arrGetMin(arr){
                var min = arr[0].offsetHeight;
                var index=0;
                for(var i = 1;i < arr.length;i++){
                    if(arr[i].offsetHeight < min){
                        min = arr[i].offsetHeight;
                        index = i;
                    }
                }
                return index;
            }


            // 动态加载模块
            function load(){
                var li=document.createElement("li");
                li.style.height=randomNum(150,200)+'px';
                ul[arrGetMin(ul)].appendChild(li);
                console.log(arrGetMin(ul));

            }

            for(var i=0;i<20;i++){
                load();
            }

            
            waterfall.onscroll=function(){
                if((waterfall.clientHeight+waterfall.scrollTop)-ul[arrGetMin(ul)].offsetHeight>0){
                    for(var i=0;i<20;i++){
                        load();
                    }
                }
            }

            var z=10;
            function foo(){
                console.log(z);
            }
            (function(funarg){
                var z=20;
                funarg();
            })(foo);
        })();
        // 城市选择器,事件委托和小球碰撞
        var day_17_03_13 = (function(){
            console.log("事件委托----day_17_03_13");

            // //1.性能方面 事件委托进行了优化
            // //2.事件委托精确找了某个执行事件的target对象
            // outers.onmouseover=function(ev){
            //     //阻止事件传播
            //     // if(event.stopPropagation){
            //     //     event.stopPropagation();
            //     // }else{
            //     //     event.cancelBubble=true;
            //     // }

            //     /*Event对象
            //     Event对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态*/
            //     var event=ev||window.event;
            //     //event.target w3c
            //     //event.srcElement ie
            //     var tagters = event.target||event.srcElement;
            //     tagters.style.background="gray";
            // }
            var day_17_03_13=$('day_17_03_13');
            var citySelect=day_17_03_13.getElementsByClassName('citySelect')[0];
            var city=day_17_03_13.getElementsByClassName('city')[0];
            var select=day_17_03_13.getElementsByClassName('select')[0];
            var ul=citySelect.getElementsByTagName("ul")[0];
            var li=ul.getElementsByTagName("li");

            // 普通方法：
            // select.onclick = function(ev){
            //     // 阻止事件传播
            //     var event=ev||window.event;
            //     if(event.stopPropagation){
            //         event.stopPropagation();
            //     }else{
            //         event.cancelBubble=true;
            //     }
            //     ul.style.display = 'block';

            // }
            // for(var i = 0; i < li.length;i++){
            //     li[i].onclick = function(){
            //         ul.style.display = "none";
            //         city.innerText = this.innerText;
            //     }
            // }
            // document.onclick=function(){
            //     ul.style.display='none';
            // }

            // 事件委托方法
            select.onclick=function(ev){
                var event = ev||window.event;
                if(event.stopPropagation){
                    event.stopPropagation();
                }else{
                    event.cancelBubble=true;
                }
                ul.style.display="block";

                ul.onclick=function(event){
                    var target = event.target || event.srcElement;
                    // nodeName 节点的值(大写)
                    if(target.nodeName == "LI" && target.parentNode.className=="list"){
                        city.innerHTML = target.innerText;
                        ul.style.display = "none";
                    }
                }
            }
            document.onclick=function(){
                ul.style.display = 'none';
            }

            // 点击按钮添加案例  事件委托方法
            var addList=day_17_03_13.getElementsByClassName('addList')[0];
            var addBtn=addList.getElementsByTagName("button")[0];
            var delBtn=addList.getElementsByTagName("button")[1];
            var addUl=addList.getElementsByTagName("ul")[0];
            var addLis=addUl.children;
            var addImgTop=addLis[0].children[0].offsetTop;
            // 设置ul宽度
            function setUlWidth(){
                if(addLis.length>=0){
                    console.log(addLis.length);
                    addUl.style.width=(addLis[0].offsetWidth+20)*addLis.length+"px";
                }else{
                    alert("不能再删了！");
                }
            }
            setUlWidth();
            
            function move(obj,myEnd){
                    var start=obj.offsetTop;
                    var end=myEnd;
                    var step=0;
                    var eve=(end-start)/20;
                    var time = setInterval(function(){
                        step++;
                        if(step>=20){
                            clearInterval(time);
                        }
                        var s=step*eve;
                        obj.style.top=start+s+'px';
                    }, 10);
            }
            // 添加鼠标移入效果
            /*这两个事件都会涉及把鼠标指针从一个元素的边界之内移到另一个元素边界之内。对mouseover事件而言，事件的主目标是获得光标的元素，而相关元素就是那个失去光标的元素。类似地，对mouseout事件而言，事件的主目标是失去光标的元素，而相关元素则是获得光标的元素。

            DOM通过event对象的relatedTarget属性提供了相关元素的信息。这个属性只对于mouseover和mouseout事件才包含值；对于其他事件，这个属性的值是null。IE不支持realtedTarget属性，但提供了保存着同样信息的不同属性。在mouseover事件触发时，IE的fromElement属性中保存了相关元素；在mouseout事件出发时，IE的toElement属性中保存着相关元素。*/
            addUl.onmouseover=function(ev){
                var event = ev || window.event;
                var target = event.target || event.srcElement;
                var n = target.nodeName;
                var from=event.fromElement||event.relatedTarget;
                // var from=event.fromElement||event.relatedTarget;
                //在mouseover事件中from，表示鼠标来自哪个元素，也是事件委托类型，和target与srcElement相反
                // alert(from);
                // var tag = event.target(谁执行谁就是target)
                // event.fromElement(指向子元素)
                while(from){
                    if(from==this){
                        move(target.childNodes[0],0);
                        return false;
                    }
                    return false;
                }

            }
            // 添加鼠标移出效果
            addUl.onmouseout = function(ev){
                var event = ev || window.event;
                var target = event.target || event.srcElement;
                var n = target.nodeName;
                var to=event.toElement||event.relatedTarget;
                //在mouseout事件中to，表示鼠标指向那个元素，也是事件委托类型，和target与srcElement相反
                while(to){
                    if(to==this){
                        move(target.childNodes[0],addImgTop);
                        return false;
                    }
                    return false;
                }
            }
            // 点击添加按钮添加
            addBtn.onclick = function(){
                var li = document.createElement('li');
                li.innerHTML='<img src="images/entrust/02.png" alt="" /><span>CDK兑换</span>';
                addUl.appendChild(li);
                setUlWidth();
            }
            // 点击删除按钮删除
            delBtn.onclick = function(){
                addUl.removeChild(addLis[addLis.length-1]);
                setUlWidth();
            }

            // 小球碰撞
            var collision = day_17_03_13.getElementsByClassName("collision")[0];
            var collisionBtn = day_17_03_13.getElementsByClassName("collisionBtn")[0];
            var ball = collision.getElementsByClassName('ball')[0
            ];
            var barLeft = collision.getElementsByClassName('left')[0];
            var barRight = collision.getElementsByClassName('right')[0];
            var collisionW=collision.clientWidth;
            var collisionH=collision.clientHeight;

            // 定义速度
            var vX=2;
            var vY=5;
            // 定义时间
            var time=null;
            //判断是否开启计算器
            var state=false;

            function ballObj(){

            }
            //创建小球对象
            var ballObj = {
                x:ball.offsetLeft,
                y:ball.offsetTop,

                boolX:true,
                boolY:true,

            }
            ballObj.vX=false;
            
            collisionBtn.onclick = function(){
                state=!state;
                if(state){
                      time=setInterval(function(){
                            ball.style.left=ball.offsetLeft+vX+'px';
                            ball.style.top=ball.offsetTop+vY+'px';
                            if(collisionBool().x){
                                vX=-vX;
                            }
                            if(collisionBool().y){
                                vY=-vY;
                            }
                    
                    },1); 
                    collisionBtn.innerText="停止" ;
                }else{
                    clearInterval(time);
                    collisionBtn.innerText="开始" ;

                }
                
            }
            // 判断是否碰撞
            function collisionBool(){
                // x轴
                var x = false;
                var y = false;

                // 左障碍物
                var lL = barLeft.offsetLeft;
                var lT = barLeft.offsetTop;
                var lR = lL+barLeft.offsetWidth;
                var lB = lT+barLeft.offsetHeight;

                //右障碍物
                var rL = barRight.offsetLeft;
                var rT = barRight.offsetTop;
                var rR = rL+barRight.offsetWidth;
                var rB = rT+barRight.offsetHeight;

                //球
                var bL = ball.offsetLeft;
                var bT = ball.offsetTop;
                var bR = bL+ball.offsetWidth;
                var bB = bT+ball.offsetHeight;

                // 左上
                if( vY>0 && bB>=lT && (bB-vY)<lT && bL<lR ){
                    y = true;
                }
                // 左下
                if( vY<0 && bT<=lB && (bT-vY)>lB && bL<lR){
                    y = true;
                }
                //左右
                if( vX<0 && bL<=lR && (bL-vX)>lR && bB>lT && bT<lB ){
                    x = true;
                }
                //右上
                if( vY>0 && bB>=rT && (bB-vY)<rT && bR>rL){
                    y = true;
                }
                // 右下
                if( vY<0 && bT<=rB && (bT-vY)>rB && bL>rL){
                    y = true;
                }
                //右左
                if( vX>0 && bR>=rL && (bR-vX)<rL && bB>rT && bT<rB ){
                    x = true;
                }

                //边框
                if(bL <= 0 || bL >= collisionW-ball.offsetWidth){
                    x = true;
                }
                if(bT <= 0 || bT >= collisionH-ball.offsetHeight){
                    y = true;
                }

                return { 'x': x, 'y': y };
            }
        })();
        // 钟表
        var day_17_03_14 = (function(){
            var day_17_03_14 =$('day_17_03_14');
            var clockBtn = day_17_03_14.getElementsByClassName("clockBtn")[0];
            var clockHours = day_17_03_14.getElementsByClassName("hours")[0];
            var clockMinutes = day_17_03_14.getElementsByClassName("minutes")[0];
            var clockSeconds = day_17_03_14.getElementsByClassName("seconds")[0];
            //创建时间对象
            // console.log(date);
            //GTM 格林威治时间是英国伦敦南郊原格林威治天文台的所在地，它又是世界上地理经度的起始点

            // console.log(hours); //当前时间的小时数

            // var year = date.getFullYear();
            // var month = date.getMonth()+1;
            // var dates = date.getDate();
            //获取当前事件的年月日

            // 按钮状态

             function clock(){
                var date = new Date();
                var hours = (date.getHours())%12; 
                var minutes = date.getMinutes(); 
                var seconds = date.getSeconds(); 
                clockHours.style.transform="rotate("+(hours*30+(minutes/60*30)+(seconds/3600*30))+"deg)";
                clockMinutes.style.transform="rotate("+(minutes*6+seconds/60*6)+"deg)";
                clockSeconds.style.transform="rotate("+(seconds*6)+"deg)";
            }
            clock();
            var state = false ;
            var time = null;
            clockBtn.onclick = function(){
                state = !state;
                if(state){
                    time = setInterval(function(){
                        clock();
                        clockBtn.innerText = "停止";
                    }, 1000);
                }else{
                        clockBtn.innerText = "开始";
                        clearInterval(time);

                }
            }
        })();
        // 页面加载事件和touch事件
        var day_17_03_16 = (function(){
            var day_17_03_16 =$('day_17_03_16');

            // 页面加载事件
            // //非IE
            // document.addEventListener("DOMContentLoaded",function(){
            //     console.log("页面加载完执行");
            // },false);

            // // IE(6,7,8)
            // document.attachEvent("onreadystatechange",function(){

            //     //onreadystatechange用于检测DOM事件是否加载完毕的整个过程
            //     //判断readyState 属性值是否为完成“完成”
            //     if(document.readtState == "complete"){
            //         console.log("页面加载完执行");
            //     }

            // },false);

            var day_17_03_16 = $("day_17_03_16");
            var touchBox = day_17_03_16.getElementsByClassName("touch")[0];
            //触摸开始
            touchBox.addEventListener("touchstart",function(ev){

                //在touch事件当中，event事件状态的对象是通过touches属性获取的，并且是一个数组
                var evX = ev.touches[0].clientX;
                var evY = ev.touches[0].clientY;

                var cha_x = evX-touchBox.offsetLeft;
                touchBox.addEventListener("touchmove",
                    function(ev){
                    var evX2 = ev.touches[0].clientX;
                    var x = evX2-cha_x;
                    console.log(cha_x);
                    touchBox.style.left = x+"px";
                },false);
            },false);
            document.addEventListener("touchend",function(){
                touchBox.removeEventListener("touchmove", function(){
                    var evX2 = ev.touches[0].clientX;
                    var x = evX2-cha_x;
                    touchBox.style.left = x+"px";
                })
            })
        })();
        //滑轮事件
        var day_17_03_17 = (function(){
            var day_17_03_17 =$('day_17_03_17');
            var wheel = day_17_03_17.getElementsByClassName("wheel")[0];
            var wheelScroll = day_17_03_17.getElementsByClassName("wheelScroll")[0];
            var wheelScrollCon =wheelScroll.getElementsByClassName("content")[0];
            var wheelScrollIcon =wheelScroll.getElementsByTagName("i")[0];
            //通过浏览器识别码是否为火狐
            var str = window.navigator.userAgent;

            if(str.indexOf("Firefox") != -1){
                 // 火狐
                addEvent(wheel,"DOMMouseScroll",scrollF,false);
                addEvent(wheelScroll,"DOMMouseScroll",scrollIcon,false);

            }else{
                // 非火狐
                addEvent(wheel,"mousewheel",scrollF,false);
                addEvent(wheelScroll,"mousewheel",scrollIcon,false);

            }
            // 添加点击移动

            addEvent(wheelScrollIcon,"mousedown",wheelIconClick,false);

            // 滑轮触发变颜色函数
            function scrollF(ev){
                var event = ev||window.event;
                //阻止事件传播
                stopEvent(event);
                //阻止默认事件
                preventEvent(event);
                //前滑
                var bgColorRGB =window.getComputedStyle(wheel).backgroundColor; 
                var bgColor16 = rgbChange16(bgColorRGB);
                var sum;

                //滑轮前滑（非火狐||火狐）
                wheelEvent(event,top,bottom);
                
                function top(){
                    sum = addSub16(bgColor16,"211111","add");
                    if(parseInt(sum,16)>=parseInt("ffffff",16)){
                        sum = "000000";
                    }
                    wheel.style.backgroundColor = "#"+sum;

                }
                function bottom(){
                    sum = addSub16(bgColor16,"211111","sub");
                    if(parseInt(sum,16)<=parseInt("000000",16)){
                        sum = "ffffff";
                    }
                    wheel.style.backgroundColor = "#"+sum;
                }
            }
            //内容滚动
            function scrollIcon(ev){
                var event = ev||window.event;
                stopEvent(event);
                preventEvent(event);
                //获取父元素高度
                var wheelScrollH = wheelScroll.clientHeight;
                // 获取滑轮滑动距离
                var wheelIconTop = wheelScrollIcon.offsetTop;
                // 获取滑轮高度
                var wheelIconH = wheelScrollIcon.offsetHeight;
                //滑轮滑动与内容滑动的比例
                var scale =(wheelScrollCon.scrollHeight-wheelScrollH)/(wheelScrollH-wheelIconH);

                //滑轮前滑（非火狐||火狐）
                wheelEvent(event,top,bottom);

                function top(){     //上滑
                    if(wheelScrollIcon.offsetTop>0){
                        wheelScrollIcon.style.top =wheelIconTop-5+"px";
                        wheelScrollCon.scrollTop = wheelScrollIcon.offsetTop*scale;
                    }else if(wheelScrollIcon.offsetTop<=0){
                        wheelScrollIcon.style.top = 0;
                        wheelScrollCon.scrollTop = wheelScrollIcon.offsetTop*scale;
                    }
                }
                function bottom(){  //下滑
                    if(wheelScrollIcon.offsetTop<(wheelScrollH-wheelIconH)){
                        wheelScrollIcon.style.top =wheelIconTop+5+"px";
                        wheelScrollCon.scrollTop = wheelScrollIcon.offsetTop*scale;
                    }else if(wheelScrollIcon.offsetTop>=wheelScrollH-wheelIconH){
                        wheelScrollIcon.style.top = wheelScrollH-wheelIconH+'px';
                        wheelScrollCon.scrollTop = wheelScrollIcon.offsetTop*scale;
                    }
                }
            }

            function wheelIconClick(ev){
                var event = ev||window.event;
                //获取父元素高度
                var wheelScrollH = wheelScroll.clientHeight;
                // 获取滑轮滑动距离
                var wheelIconTop = wheelScrollIcon.offsetTop;
                // 获取滑轮高度
                var wheelIconH = wheelScrollIcon.offsetHeight;
                //设置文本不可选
                wheelScroll.style.userSelect = "none";
                //获取鼠标到滑轮顶部的距离
                var cha_y = getMousePos(event,wheelScrollIcon).y;
                //滑轮滑动与内容滑动的比例
                var scale =(wheelScrollCon.scrollHeight-wheelScrollH)/(wheelScrollH-wheelIconH);

                // 添加移动事件
                addEvent(document,"mousemove",mouseMove,false);

                addEvent(document,"mouseup",function(){
                   removeEvent(document,"mousemove",mouseMove,false);
                });

                // 移动函数
                function mouseMove(ev){
                    var event = ev||window.event;
                    wheelScrollIcon.style.top =  getMousePos(event,wheelScroll).y-cha_y+'px';
                    wheelScrollCon.scrollTop = wheelScrollIcon.offsetTop*scale;
                    if(wheelScrollIcon.offsetTop<=0){
                        wheelScrollIcon.style.top = 0;
                        wheelScrollCon.scrollTop = wheelScrollIcon.offsetTop*scale;
                    }else if(wheelScrollIcon.offsetTop>=wheelScrollH-wheelIconH){
                        wheelScrollIcon.style.top = wheelScrollH-wheelIconH+'px';
                        wheelScrollCon.scrollTop = wheelScrollIcon.offsetTop*scale;
                    }
                    
                  
                }


            }
        })();
        // 贪吃蛇
        var day_17_03_19 = (function(){
            var day_17_03_19 = document.getElementById("day_17_03_19");
            var snakeBtn = day_17_03_19.getElementsByClassName("snakeBtn")[0];
            var snakeFrame = day_17_03_19.getElementsByClassName("snakeFrame")[0];
            var snake = snakeFrame.getElementsByClassName("snake")[0];
            var snakeDiv = snake.getElementsByTagName("div");
            var food = snakeFrame.getElementsByClassName("food")[0];
            var mask = snakeFrame.getElementsByClassName("mask")[0];
            var score = mask.getElementsByClassName("score")[0].getElementsByTagName("span")[0];
            var restartBtn = mask.getElementsByClassName("restart")[0];

            //获得游戏框的宽高
            var snakeFrameW = snakeFrame.clientWidth;
            var snakeFrameH = snakeFrame.clientHeight;

<<<<<<< HEAD
=======

>>>>>>> c2e99c47d536ebb8d60e8b1cb5c5818fdec48881
            //游戏参数
            var v  ;  //一格大小
            var vX ;    //x轴
            var vY ;   //y轴
            var vT ;  //速度（毫秒）
            var time ;  //时间
            var count ;  //吃的食物数量
            var scoreNum ; //得分
            var snakeSize; //蛇的长度 
            var gameState = false;  //游戏状态（true表示开始）
            function gameStart(){   //初始化游戏

                v = food.offsetWidth;  //初始化一格大小
                vX = v;    //初始化x轴
                vY = 0;    //初始化y轴
                vT = 300;  //初始化速度（毫秒）
                time = null;  //初始化时间
                count = 0;  //初始化吃的食物数量
                snakeSize = 3;  //初始化蛇的长度(最小为3)
                gameState = true; 

                var str="";
                for(var i =0;i<snakeSize;i++){
                    str+="<div></div>";
                }
                snake.innerHTML = str;

                for(var i =0;i < snakeDiv.length;i++){  //初始化蛇的位置
                    snakeDiv[i].style.left = (i+2)*v+'px';
                    snakeDiv[i].style.top = '45px';
                }
                snakeDiv = snake.getElementsByTagName("div");
                snakeDiv[snakeDiv.length-1].style.background="red";
                
                mask.style.display = 'none';
                getFood();
                snakeMove("right");

                //初始化控制器
                window.onkeydown = function(ev){
                    var event = ev || window.event;
                    stopEvent(event);
                    preventEvent(event);
                    // console.log(event.keyCode);
                    if(event.keyCode == 37){ //←键
                        if(vX == 0){
                            vX = -v;
                            vY = 0;
                            snakeBody();  
                            snakeHead("left");
                            snakeMove("left");
                        }
                    }
                    if(event.keyCode == 38){   //↑键
                        if(vY == 0){
                            vX = 0;
                            vY = -v;
                            snakeBody();  
                            snakeHead("up");
                            snakeMove("up");
                        }
                    }
                    if(event.keyCode == 39){  //→键
                        if(vX == 0){
                            vX = v;
                            vY = 0;
                            snakeBody();  
                            snakeHead("right");
                            snakeMove("right");
                        }
                    }
                    if(event.keyCode == 40){   //↓键
                        if(vY == 0){
                            vX = 0;
                            vY = v;
                            snakeBody();  
                            snakeHead("down");
                            snakeMove("down");
                        }
                    }
                }
            }
            function gameOver(){      //游戏结束
                gameState=false;
                clearInterval(time);
                mask.style.display = 'block';
                scoreNum = count*15;
                score.innerText=scoreNum;
                window.onkeydown = null;
            }
            function snakeGrow(){   //蛇长大一格
                var div = document.createElement("div");
                div.style.left = snakeDiv[0].offsetLeft+"px";
                div.style.top = snakeDiv[0].offsetTop+"px";
                snake.insertBefore(div,snakeDiv[0]);
                snakeDiv[snakeDiv.length-1].style.background="red";
                count++;
            }
            function getFood(){  //重新设置食物 
                var leftMax = snakeFrameW/v-1;
                var topMax = snakeFrameH/v-1;
                do{
                    var x = Math.round(randomNum(0,leftMax));
                    var y = Math.round(randomNum(0,topMax));
                }while(boolCollision(x,y));
                
                // console.log(boolCollision(x,y));
                food.style.left = x*v+"px";
                food.style.top = y*v+"px";
            }

            function boolCollision(x,y){   //判断是否与蛇身发生碰撞
                var arrX=[];
                var arrY=[];
                if(snakeDiv.length < 5 ){return false;}
                for(var i = 0; i < snakeDiv.length-1;i++){
                    arrX.push(snakeDiv[i].offsetLeft);
                    arrY.push(snakeDiv[i].offsetTop);
                
                }
                console.log(arrX+"x");
                console.log(arrY+"Y");
                for(var i = 0 ; i < arrX.length;i++){
                    if(arrX[i] == x && arrY[i] ==y){
                        return true;
                    }
                }
                return false;
            }   

            function snakeHead(direction){   //蛇头移动
                if(boolFrame(direction)){
                    if(vY == 0){  //水平移动
                        snakeDiv[snakeDiv.length-1].style.left = snakeDiv[snakeDiv.length-1].offsetLeft+vX+"px";
                    }
                    if(vX == 0){  //垂直移动
                        snakeDiv[snakeDiv.length-1].style.top = snakeDiv[snakeDiv.length-1].offsetTop+vY+"px";
                    }
                     if(boolFood()){
                        getFood();
                        snakeGrow();
                    }
                }else{
                    gameOver();
                }
            }

            function snakeBody(){ //蛇身移动
                if(vY == 0){
                    var x = snakeDiv[snakeDiv.length-1].offsetLeft+vX;
                    var y = snakeDiv[snakeDiv.length-1].offsetTop;
                    if(boolCollision(x,y)){
                            gameOver();
                        }
                        console.log(x,y);
                        console.log(boolCollision(x,y));
                }
                if(vX == 0){
                    var x = snakeDiv[snakeDiv.length-1].offsetLeft;
                    var y = snakeDiv[snakeDiv.length-1].offsetTop+vY;

                        if(boolCollision(x,y)){
                            gameOver();
                        }
                        console.log(x,y);
                        console.log(boolCollision(x,y));
                }
                        
                for(var i=0;i<snakeDiv.length-1;i++){    
                    snakeDiv[i].style.left = snakeDiv[i+1].offsetLeft+"px";
                    snakeDiv[i].style.top = snakeDiv[i+1].offsetTop+"px";
                }
            }
            function snakeMove(direction){  //蛇移动
                if(count>3){
                    vT = 200;
                }
                if(count>5){
                    vT = 150;
                }
                if(count>8){
                    vT = 100;
                }
                if(count>10){
                    vT = 50;
                }
                // console.log(vT);
                if(gameState){
                    clearInterval(time);
                    time = setInterval(function(){
                        if(boolFrame(direction)){
                            snakeBody();  
                            snakeHead(direction);
                        }else{
                            gameOver();
                        }

                    }, vT)
                }
                
            }

            function boolFrame(direction){   //判断是否碰到边界
                var snakeL = snakeDiv[snakeDiv.length-1].offsetLeft;
                var snakeT = snakeDiv[snakeDiv.length-1].offsetTop;
                switch(direction){
                    case "left"  : return snakeL>0;
                    case "right" : return snakeL<snakeFrameW-v;
                    case "up"   : return snakeT>0;
                    case "down": return snakeT<snakeFrameH-v;
                }
            }
            function boolFood(){   //判断蛇头是否碰到食物
                var snakeHeadL = snakeDiv[snakeDiv.length-1].offsetLeft;
                var snakeHeadT = snakeDiv[snakeDiv.length-1].offsetTop;
                var foodL = food.offsetLeft;
                var foodT = food.offsetTop;
                return (snakeHeadL==foodL)&&(snakeHeadT==foodT);
            }

            //游戏开始
            gameOver();
            //游戏重新开始
            restartBtn.onclick = function(){
                gameStart();
            }
        })();
        // 正则表达式
        var day_17_03_21 = (function(){
            console.log("------day_17_03_21-------");
            // 正则表达式 
            // new RegExp(pattern, attributes);
            // pattern为一个字符串，代表的就是正则
            // attributes为可选字符串，包含属性g、i 和 m
            // g：代表可以进行全局匹配。
            // i：代表不区分大小写匹配。
            // m：代表可以进行多行匹配。

            // 构造方式
            // [js]
            // //构造函数中的正则可以是常量字符串或一个js变量
            // var reg1 = new RegExp("a*b",gi);
            // [/js]

            // 普通写法
            // [js]
            // //普通方式中的正则必须是一个常量字符串
            // var reg2 = /a*b/gi;
            // [/js]


            // 规则的使用(规则大小写 含义相反)
            // 元字符匹配
            // [js]
            // var reg1 = /\d/g;
            // var reg2 = /\w/g;
            // var reg3 = /\D/g;
            // [/js]
            
            // \d : 匹配任意一个数字，0~9 中的任意一个
            // \s : 匹配任意一个空白字符
            // \b : 匹配一个单词边界，不匹配任何字符
            // \w : 匹配任意一个字符( 字母、 数字、下划线 )
            // .    : 匹配任意一个字符，除了换行符( \n )
            // \n : 查找换行符
            // \u : 通常用来匹配汉字

            // 表达式 "\d"，"\s"，"\b"，"\w"，对应的大写字母表示相反的意义 
            // 如：\D  匹配所有的非数字字符

            // 方括号[]匹配
            // [js]
            // var reg1 = /[3-8]/g;
            // var reg2 = /[A-C]/g;
            // [/js]

            // [abc] : 查找方括号之间的任何字符。
            // [^abc] : 查找任何不在方括号之间的字符。
            // [0-9] : 查找任何从 0 至 9 的数字。
            // [a-z] : 查找任何从小写 a 到小写 z 的字符。
            // [A-Z] : 查找任何从大写 A 到大写 Z的字符。

            // 量词匹配
            // [js]
            // var reg1 = /^[0-9]{11,12}$/g;
            // [/js]

            // n+ : 匹配任何包含至少一个 n 的字符串。
            // n? : 匹配任何包含零个或一个 n 的字符串。
            // n* : 匹配任何包含零个或多个 n 的字符串。
            // n{X} : 匹配包含 X 个 n 的序列的字符串。
            // n{X,Y} : 匹配包含 X 到Y 个 n 的序列的字符串。
            // ^n : 匹配任何开头为 n 的字符串。
            // n$ : 匹配任何结尾为 n 的字符串。

            // 其他
            // |   : 匹配左边或者右边
            // \   : 转义符  
            // 特殊标点符号，在前面加 \ 后，就代表该符号本身
            // ^ 要匹配 "^" 字符本身，请使用 \^
            // ( ) 要匹配小括号本身，请使用 \(  和  \)
            // 其他特殊标点符号  [ ]  { }  .   ?    +   *   |
            // Unicode编码16进制的utf-8汉字编码:   
            // 4e00最小中文字符    9fa5最大中文字符
            // [js]
            // /^[\u4e00-\u9fa5]+$/     //常用汉字编码范围
            // [/js]

            // 检测方法
            // [js]

            // var str = "123456789056";
            // var strs = "123ab456";
            // var reg1 = /^[0-9]{11,12}$/g;
            // var reg2 = /[a-c]+/g;
            // //检测字符串是否符合正则(符合返回true,不符合返回false)
            // console.log(reg1.test(str)); 
            // console.log(reg2.test(strs));
            // [/js]

            // exec 检索字符串返回查找结果的第一个值(数组),未检测返回null,indeX返回当前值得下标
            // [js]

            // var reg1 = /[a-f]{6}/g;
            // var str1 = "absdwsfcdaaeppomffaaccop";
            // var str2 = "asdf3erwtggdfhh";
            // console.log(reg1.exec(str1)); //["fcdaae", index: 6, input: "absdwsfcdaaeppomffaaccop"]
            // console.log(reg1.exec(str2)); //null
            // [/js]


            // compile 编辑指定的正则表达式

            // [js]
            // reg1.compile("[a-z]{4}");
            // console.log(reg1.exec(str2)); //["asdf", index: 0, input: "asdf3erwtggdfhh"]
            // [/js]

            // search 检索与正则表达式相匹配的值,没有返回-1,找到返回下标值(类似indexOf())
            // [js]

            // var reg2 = /[a-h]{7}/g;
            // console.log(str1.search(reg2)); //-1
            // [/js]

            // match 返回所有正则表达式匹配的字符串
            // var reg3 = /[a-f]{3}/g;
            // console.log(str1.match(reg3)); //["fcd", "aae", "ffa", "acc"]

            // replace 替换与正则表达式匹配的字符串
            // [js]
            // console.log(str1.replace(reg3,"...")); //absdws......ppom......op
            // [/js]
            // split将字符串匹配的部分做分割（返回数组）
            
            // [js]
            // var reg4 = /[abc]+/g;
            // var str3 = "0123abc456abc890";
            // console.log(str3.split(reg4)); //["0123", "456", "890"]
            // [/js]
        })();
        //cookie
        var day_17_03_24 = (function(){

            function getCookie(key){
                var arr1 = document.cookie.split("; ");
                for(var i=0 ; i<arr1.length;i++){
                    var arr2 = arr1[i].split("=");
                    if(arr2[0]==key){
                        return arr2[1];
                    }
                }
                return false;

            }
            function setCookie(key,value,days){
                var dates = new Date();
                dates.setDate(dates.getDate()+days);
                document.cookie = key+"="+value+";expires="+dates;
            }

            setCookie("neng","haha",2);
            function removeCookie(key){
                setCookie(key,"123",-1);
            }
        })();
<<<<<<< HEAD
        //canvas实现画图工具
        var day_17_04_19 = (function(){
            var day_17_04_19 = document.getElementById('day_17_04_19');
            var body = document.getElementsByTagName("body")[0];

            //显示的图层
            var cans = day_17_04_19.getElementsByTagName('canvas')[0];
            var canvas= cans.getContext('2d');
            //鼠标的图层
            var mouse = document.createElement("canvas");
            var can_mouse = mouse.getContext('2d');
            mouse.width = 400;
            mouse.height = 400;
            // 画画的图层
            var obj = document.createElement("canvas");
            var can_obj = obj.getContext('2d');
            obj.width = 400;
            obj.height = 400;

            var color = day_17_04_19.getElementsByClassName('color')[0];
            var range = day_17_04_19.getElementsByClassName('range')[0];
            var button = day_17_04_19.getElementsByTagName('button')[0];
            var buttonClear = day_17_04_19.getElementsByTagName('button')[1];
            button.onclick = function(){
                cans.style.background = color.value;
            }
            buttonClear.onclick = function(){
                canvas.clearRect(0,0,400,400);
                can_obj.clearRect(0,0,400,400);
                can_mouse.clearRect(0,0,400,400);
            }
            cans.onmousemove = function(ev){
                draw(ev,drawMouse);
            };

            cans.onmousedown = function(ev){
                var event = ev||window.event;
                body.style.userSelect="none";
                can_obj.beginPath();
                cans.onmousemove = function(ev){
                    draw(ev,drawMouse,drawBrush);
                }
                document.onmouseup = function(){

                    body.style.userSelect="auto";
                    cans.onmousemove = function(ev){
                        draw(ev,drawMouse);
                    };
                   
                }
            }
            
            function draw(ev,fun1,fun2){
                var event = ev||window.event;
                var x = getMousePos(ev).x-cans.offsetLeft;
                var y = getMousePos(ev).y-cans.offsetTop;
                if(fun1){
                    fun1(x,y);
                }
                if(fun2){
                    fun2(x,y);
                }

                combine();

                
            }
            //绘制鼠标
            function drawMouse(x,y){
                can_mouse.beginPath();
                can_mouse.clearRect(0,0,400,400);
                can_mouse.beginPath();
                can_mouse.arc(x,y,range.value/2,0,2*Math.PI);
                can_mouse.fillStyle=color.value;
                can_mouse.fill();
                can_mouse.closePath();

            }
            //绘制画笔
            function drawBrush(x,y){
                can_obj.lineTo(x,y);
                can_obj.lineWidth = range.value;
                can_obj.strokeStyle = color.value;
                can_obj.stroke();
            }
            //合并两个图层
            function combine(){
                canvas.clearRect(0,0,400,400);
                canvas.globalCompositeOperation = 'source-over';
                canvas.drawImage(obj,0,0,400,400);
                canvas.drawImage(mouse,0,0,400,400);

            }

        })();
=======


>>>>>>> c2e99c47d536ebb8d60e8b1cb5c5818fdec48881


    })();


   

}


