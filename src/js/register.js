document.addEventListener("DOMContentLoaded",function(){



	var register = document.getElementById("register");
	var next = document.getElementById("next");
	var namestatu=false;
	var phonestatu =false;
	var yanzhengstatu=false;
	var pwdstatu = false;
	next.disabled = true;
	register.disabled = true;
	var _name = "";
	var _phone = "";
	var num = "";
	var  pwdstatu = false;
	var  cpwdstatu = false;
	d = new Date("3019-3-23 0:0:0");
	D = new Date("2000-3-23 0:0:0");

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
    $("#change").click(function(){
    	yanzheng();
    });
    //验证用户名
    $("#name").blur(function(){
    	var name = document.getElementById("name").value;
    	// console.log(name);
    	var $tip = $(".tishi");
    	$.get("../api/register.php?type=0&name="+name,function(res){
                        // console.log(res);
            if(!/^[a-zA-Z]{1}[^\s]{3,19}$/.test(name)){
                $tip[0].innerText = "*用户名格式有误";
                $tip[0].style.color = "red";
                namestatu = false;
            }
            

            else if(res){
                $tip[0].innerText = "*该用户名已存在";
                $tip[0].style.color = "red";
                namestatu = false;
                // console.log(111)
            }
            else{
                $tip[0].innerText = "可以使用";
                $tip[0].style.color = "#58bc58"
                namestatu = true;
                // console.log(222)
            }
            panduan();
        })                       
    })  
    //手机号码验证
    $("#phone").blur(function(){
    	var $tip = $(".tishi");
    	var phone = document.getElementById("phone").value;
    	$.get("../api/register.php?type=1&phone="+phone,function(res){
			if(!/^[\d]{11}$/.test(phone)){
				$tip[1].innerText = "*输入11位手机号码";
                $tip[1].style.color = "red";
                phonestatu = false;
			}
			else if(res){
				$tip[1].innerText = "*手机号码不能重复注册";
                $tip[1].style.color = "red";
                phonestatu = false;
			}
			else{
                $tip[1].innerText = "✔";
                $tip[1].style.color = "#58bc58"
                phonestatu = true;
            }
            panduan();
    	})
    })

    //验证码验证
    $("#yanzheng").blur(function(){
    	var $tip = $(".tishi");
    	var yanzheng = document.getElementById("yanzheng").value;
    	if(yanzheng==num){
    		$tip[2].innerText = "";
            yanzhengstatu = true;

    	}else{
    		$tip[2].innerText = "*验证码错误";
            $tip[2].style.color = "red";
            console.log(num);
            yanzhengstatu = false;
    	}
    	panduan();
    })
    $("#next").click(function(){
    	_name = document.getElementById("name").value;
    	_phone = document.getElementById("phone").value;
    	$("#bigbox").css({"display":"none"});
    	$("#bigbox1").css({"display":"block"});
    	document.getElementById("_name").value=_name;
    	document.getElementById("_phone").value=_phone;
    	document.getElementById("_name").disabled = true;
    	document.getElementById("_phone").disabled = true;

    })
    //密码验证
     $("#pwd").blur(function(){
    	var $tip = $(".tishi");
    	var pwd = document.getElementById("pwd").value;

			if(!/^[^\s]{6,16}$/.test(pwd)){
				$tip[3].innerText = "*密码格式错误";
                $tip[3].style.color = "red";
                pwdstatu = false;
			}
			
			else{
                $tip[3].innerText = "";
                pwdstatu = true;
            }
            _panduan();
    	
    })

     $("#cpwd").blur(function(){
    	var $tip = $(".tishi");
    	var cpwd = document.getElementById("cpwd").value;
    	var pwd = document.getElementById("pwd").value;

			if(cpwd!=pwd){
				$tip[4].innerText = "*两次密码不一致";
                $tip[4].style.color = "red";
                cpwdstatu = false;
			}
			
			else{
                $tip[4].innerText = "";
                cpwdstatu = true;
            }
            _panduan();
    	
    })

     $("#register").click(function(){
     	var savename = document.getElementById("_name").value;
     	var savephone = document.getElementById("_phone").value;
     	var savepwd = document.getElementById("pwd").value;
     	$.get("../api/register.php?type=2&vip=0&savename="+savename+"&savepwd="+savepwd+"&savephone="+savephone,function(res){
          // console.log(res)
	        document.cookie = "name="+savename+"; expires="+d+"; path=/";
	        
	        window.location.href = '../index.html';
      })
     })



    function panduan(){
    	if(yanzhengstatu&&namestatu&&phonestatu){
    		next.disabled = false;
    	}else{
    		next.disabled = true;
    	}
    }
    function _panduan(){
    	if(cpwdstatu&&pwdstatu){
    		register.disabled = false;
    	}else{
    		register.disabled = true;
    	}
    }

    yanzheng();
})