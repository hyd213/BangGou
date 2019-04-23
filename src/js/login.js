document.addEventListener("DOMContentLoaded",function(){

    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var pwd = document.getElementById("pwd");
    var $phone = $("#phone");
    var $name = $("#name");
    var $pwd = $("#pwd");
    var $yanzhengma = $("#yanzhengma");
    var $b = $("b");
    var $login = $("#login");
    // console.log($b);
    var num ="";
    d = new Date("3019-3-23 0:0:0");
    function yanzheng(){
            num ="";
            function rn(min,max){
                return  parseInt(Math.random()*(max-min)+min);
            }
            //2.新建一个函数产生随机颜色
            function rc(min,max){
                var r=rn(min,max);
                var g=rn(min,max);
                var b=rn(min,max);
                return `rgb(${r},${g},${b})`;
            }
            //3.填充背景颜色,颜色要浅一点
            var w=120;
            var h=40;
            var ctx=c1.getContext("2d");
            ctx.fillStyle=rc(180,230);
            ctx.fillRect(0,0,w,h);
            //4.随机产生字符串
            var pool="ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";
            for(var i=0;i<4;i++){
                var c=pool[rn(0,pool.length)];//随机的字
                var fs=rn(18,40);//字体的大小
                var deg=rn(-30,30);//字体的旋转角度
                ctx.font=fs+'px Simhei';
                ctx.textBaseline="top";
                ctx.fillStyle=rc(80,150);
                ctx.save();
                ctx.translate(30*i+15,15);
                ctx.rotate(deg*Math.PI/180);
                ctx.fillText(c,-15+5,-15);
                ctx.restore();
                num+=c;
            }
            //5.随机产生5条干扰线,干扰线的颜色要浅一点
            for(var i=0;i<5;i++){
                ctx.beginPath();
                ctx.moveTo(rn(0,w),rn(0,h));
                ctx.lineTo(rn(0,w),rn(0,h));
                ctx.strokeStyle=rc(180,230);
                ctx.closePath();
                ctx.stroke();
            }
            //6.随机产生40个干扰的小点
            for(var i=0;i<40;i++){
                ctx.beginPath();
                ctx.arc(rn(0,w),rn(0,h),1,0,2*Math.PI);
                ctx.closePath();
                ctx.fillStyle=rc(150,200);
                ctx.fill();
            }
            
    }

    $("#shouji").click(function(){
        $("#zhanghao").removeClass("gaoliang");
         $("#shouji").addClass("gaoliang");
         $("#denglu1").css({"display":"none"});
         $("#denglu2").css({"display":"block"});
         pwd.value = "";
         yanzheng();
         name.value = "";
         yanzhengma.value="";
    })
     $("#zhanghao").click(function(){
        $("#shouji").removeClass("gaoliang");
         $("#zhanghao").addClass("gaoliang");
         $("#denglu1").css({"display":"block"});
         $("#denglu2").css({"display":"none"});
         phone.value="";
         yanzhengma.value="";
         pwd.value = "";
         yanzheng();
    })
     $name.focus(function(){
        $b[0].style.display="block";

     })
     $name.blur(function(){
        $b[0].style.display="none";

     })
     $phone.focus(function(){
        $b[1].style.display="block";

     })
     $pwd.focus(function(){
        $b[2].style.display="block";

     })
     $phone.blur(function(){
        $b[1].style.display="none";

     })
     $pwd.blur(function(){
        $b[2].style.display="none";

     })
     $yanzhengma.focus(function(){
        $b[3].style.display="block";
        $b[4].style.display="none";
     })
     $yanzhengma.blur(function(){
        $b[3].style.display="none";

     })

     $yanzhengma.blur(function(){
        if(num==yanzhengma.value){
            $b[4].style.display="none";
        }else{
             $b[4].style.display="block";
             $b[4].style.color="red";
        }
     })

     $login.click(function(){
     
        if(num!=yanzhengma.value){
           alert("验证码错误");
           window.location.href = 'login.html';

        }
        if(phone.value==""){
            $.get("../api/login.php?type=1&name="+name.value,function(res){
               
                if(res==1){
                    alert("该用户不存在");
                }else if(res==2){
                     $.get("../api/login.php?type=3&name="+name.value,function(res){
                                if('"'+pwd.value+'"'!=res){
                                    alert("密码错误");
                                }else{
                                    document.cookie = "name="+name.value+"; expires="+d+"; path=/";
            
                                     window.location.href = '../index.html';
                                }

                         })

                }



            })

        }
        
        if(name.value==""){
            $.get("../api/login.php?type=2&phone="+phone.value,function(res){
               
                if(res==1){
                    alert("该用户不存在");
                }else if(res==2){
                     $.get("../api/login.php?type=4&phone="+phone.value,function(res){
                                if('"'+pwd.value+'"'!=res){
                                    alert("密码错误");
                                }else{
                                    document.cookie = "name="+phone.value+"; expires="+d+"; path=/";
            
                                     window.location.href = '../index.html';
                                }
                                // console.log(res);
                         })

                }



            })
        }

        
     })
$("#change").click(function(){
    yanzheng();
})
yanzheng();

    



})

