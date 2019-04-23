document.addEventListener("DOMContentLoaded",function(){

	var idx = decodeURI(location.search);
	var shopnum = document.getElementById("num");
	var idxnum = idx.split("?")[1];
	var $name = $("#name");
	var $price = $("#price");
	var $discount = $("#discount");
	var $color = $("#color");
	var $size = $("#size");
	var $type = $("#type");
	var $more = $("#more");
	var $numid = $("#numid");
	var $bigimg = $("#bigimg li");
	var $smallimg = $("#smallimg li");
	console.log($bigimg[0]);
	console.log(idxnum);
	$numid[0].innerText = idxnum;
	// $.get("../api/details.php",function(res){
	// 	var size = res;
	// 	var _size = JSON.parse(size)
	// 	console.log(_size.split(":"));
	// })


	//渲染页面
	$.get("../api/details.php?idx="+idxnum+"&ram="+Math.floor(Math.random()*9999),function(res){
		var shopArr = JSON.parse(res);
		// console.log(shopArr);
		var name = shopArr['name'];
		var price = shopArr['price'];
		var color = shopArr['color'];
		var size = shopArr['size'];
		var type = shopArr['type'];
		var img = shopArr['smallimg'];
		var colorArr = color.split("&");
		var sizeArr = size.split("&");
		var imgArr = img.split("&");
		// console.log(imgArr[0]);
		// var bigimg = shopArr['smallimg'];
		$name[0].innerText=name;
		if(shopArr['discount']){
			var discount = shopArr['discount'];
			var price = (discount*price/10).toFixed(1);
			$discount[0].innerHTML='吊牌价:<span class="del">￥'+shopArr['price']+'</:span>'
		}
		if(type=='boy'){
			 $type[0].innerText = '男装';
			 $more[0].innerText = '男装';
		}
		if(type=='hot'){
			 $type[0].innerText = '热卖商品';
		}
		if(type=='girl'){
			 $type[0].innerText = '女装';
		}
		if(type=='child'){
			 $type[0].innerText = '童装';
		}
		if(type=='shoe'){
			 $type[0].innerText = '鞋靴';
		}
		$price[0].innerText="￥"+price;
		// $type[0].innerText = type;

		for(i=0;i<colorArr.length;i++){

			if(colorArr[i]=='red'){
				var $li = $("<li>红色</li>");
				$li.css({"width":"60px","height":"30px","text-align":"center","float":"left","display":"block","line-height":"30px"})
				$li.appendTo($color);
			}else if(colorArr[i]=='yellow'){
				var $li = $("<li>黄色</li>");
				$li.css({"width":"60px","height":"30px","text-align":"center","float":"left","display":"block","line-height":"30px"})
				$li.appendTo($color);
			}
			else if(colorArr[i]=='bai'){
				var $li = $("<li>白色</li>");
				$li.css({"width":"60px","height":"30px","text-align":"center","float":"left","display":"block","line-height":"30px"})
				$li.appendTo($color);
			}
			else if(colorArr[i]=='blue'){
				var $li = $("<li>蓝色</li>");
				$li.css({"width":"60px","height":"30px","text-align":"center","float":"left","display":"block","line-height":"30px"})
				$li.appendTo($color);
			}
			else if(colorArr[i]=='green'){
				var $li = $("<li>绿色</li>");
				$li.css({"width":"60px","height":"30px","text-align":"center","float":"left","display":"block","line-height":"30px"})
				$li.appendTo($color);
			}
			else if(colorArr[i]=='hei'){
				var $li = $("<li>黑色</li>");
				$li.css({"width":"60px","height":"30px","text-align":"center","float":"left","display":"block","line-height":"30px"})
				$li.appendTo($color);
			}else if(colorArr[i]=='hui'){
				var $li = $("<li>灰色</li>");
				$li.css({"width":"60px","height":"30px","text-align":"center","float":"left","display":"block","line-height":"30px"})
				$li.appendTo($color);
			}

			
		}

		for(i=0;i<sizeArr.length;i++){
			var $li = $("<li>"+sizeArr[i]+"</li>");
			$li.appendTo($size);
		}
		// console.log(imgArr.length);
		
		for(i=0;i<imgArr.length;i++){
			
			var $img = $('<img src="'+imgArr[i]+'" alt="" />');
			

			$img.appendTo($($smallimg[i]));

		}
		for(i=0;i<$bigimg.length;i++){
			// // $($bigimg[i]).css({"background":'(url:"'+imgArr[i]+'")'});
			// src='(url:"'+imgArr[i]+'")';
			// console.log(src);
			// $bigimg[i].style.backgroundImage = src;
			// // $bigimg[i].style.background ='red';
			var $img = $('<img src="'+imgArr[i]+'" alt="" />');
			// console.log($img);
			$img.appendTo($($bigimg[i]));

			// $img.appendTo($($smallimg[i]));

		}

		$("#smallimg li")[0].style.border = "1px solid red";
		// $("#color li")[0].style.border = "1px solid red";
		// $("#size li")[0].style.border = "1px solid red";
		$($("#size li")[0]).addClass("gaoliang");
		$($("#color li")[0]).addClass("gaoliang");


		//选中对应颜色边框高亮
		$("#color li").click(function(){
			for(i=0;i<$("#color li").length;i++){
				$($("#color li")[i]).removeClass("gaoliang");

			}
			$(this).addClass("gaoliang");
		})
		//选中对应尺寸边框高亮
		$("#size li").click(function(){
			for(i=0;i<$("#size li").length;i++){
				$($("#size li")[i]).removeClass("gaoliang");

			}
			$(this).addClass("gaoliang");
		})
		$("#fangdajing img")[0].src = $("#block")[0].children[0].src ;


	})


	$("#smallimg li").click(function(){
		// console.log(this.children[0].src);
		for(i=0;i<$("#smallimg li").length;i++){
			$("#smallimg li")[i].style.border = 0;
		}
		this.style.border = "1px solid red";
		var _src = this.children[0].src;
		$("#block")[0].children[0].src = _src;
		$("#fangdajing img")[0].src = $("#block")[0].children[0].src ;
	})

	$("#jian").click(function(){
		// 
		var _shopnum = shopnum.value;
		_shopnum--;
		if(_shopnum<1){
			alert("对不起，购买数量最少为1")
		}else{
			shopnum.value = _shopnum;
		}
		
	})
	$("#jia").click(function(){
		// 
		var _shopnum = shopnum.value;
		_shopnum++;
		
			shopnum.value = _shopnum;
		
		
	})
	$("#bigimg").mouseover(function(){
		$("#fangdajing")[0].style.display ="block";
		var fangdajing = $("#block")[0].children[0];
		var _fangdajing = $("#fangdajing")[0].children[0];
		var picbox =  $("#block")[0];
		var fangdajingbox = $("#fangdajing")[0];
		var op = $("#op")[0];
		var superbox = $("#imgbox")[0];
		var move = $("#bigimg")[0];
		// console.log(superbox.offsetWidth);
		// console.log(_fangdajing);
		$("#op").css({"display":"block"});
		// console.log(op.offsetLeft);
		// console.log(op.offsetWidth);
		// console.log(picbox.offsetLeft);
		var bili = _fangdajing.offsetWidth/480;
		console.log(_fangdajing.offsetLeft);
		move.onmousemove = function(e){
				// op.style.left = 
				// console.log(e.clientX)
				
				var maxleft =  superbox.offsetWidth-op.offsetWidth;
				var maxTop =  480-op.offsetHeight;
			

				// console.log(480)
				// console.log(maxTop);
				// console.log(op.offsetTop);
				if(op.offsetLeft<=maxleft&&op.offsetLeft>=0&&op.offsetTop<=maxleft&&op.offsetTop>=0){
					op.style.left = e.pageX-superbox.offsetLeft-op.offsetWidth/2+'px';
					op.style.top = e.pageY-superbox.offsetTop-op.offsetHeight/2+'px';
				}
				if(op.offsetLeft>maxleft){
					op.style.left=maxleft+'px';
				}
				if(op.offsetLeft<0){
					op.style.left=0;
				}
				// if(op.offsetTop<=maxleft&&op.offsetTop>=0){
				// 	op.style.left = e.pageX-superbox.offsetTop-op.offsetWidth/2+'px';
				// 	op.style.top = e.pageY-superbox.offsetTop-op.offsetHeight/2+'px';
				// }
				if(op.offsetTop>maxTop){
					op.style.top=maxTop+'px';
				}
				if(op.offsetTop<0){
					op.style.top=0;
				}

				
				_fangdajing.style.left = -op.offsetLeft*1.5+'px';
				_fangdajing.style.top = -op.offsetTop*1.5-182+'px'


		}
	})
	$("#op").mouseout(function(){
		$("#op").css({"display":"none"});
		$("#fangdajing")[0].style.display ="none";
	})

	$("#block").mouseout(function(){
		$("#fangdajing")[0].style.display ="none";
	})
	$("#logo").click(function(){
		window.location.href = '../index.html';
	})
	D = new Date("2000-3-23 0:0:0");
	var denglu = document.getElementById("denglu");
	var zhuce = document.getElementById("zhuce");
	var cookieArr = document.cookie.split("; ");
	cookieArr.forEach(function(item){
		var res = item.split("=");
		// console.log(res);
		if(res[0]=="name"){
			denglu.innerHTML=`<a href="#" id="yonghu">${res[1]}</a>`;
			zhuce.innerHTML =`<a href="#" id="out">注销</a>`;
			
			gouwudai();
			
		}

	})
	$("#join").click(function(){
		console.log($("#denglu a")[0].innerText)
		if($("#denglu a")[0].innerText=="登录"){
			alert("请先登录")
		}
		else{

			var colorgaoliang = $("#color .gaoliang");
		var sizegaoliang = $("#size .gaoliang");
		var buynum = $("#num");
		var numid = $("#numid");
		// console.log(colorgaoliang);
		// console.log(sizegaoliang);
		if(colorgaoliang[0].innerText=='绿色'){
			var colorname='green';
		}else if(colorgaoliang[0].innerText=='白色'){
			var colorname='bai';
		}else if(colorgaoliang[0].innerText=='黑色'){
			var colorname='hei';
		}else if(colorgaoliang[0].innerText=='红色'){
			var colorname='red';
		}else if(colorgaoliang[0].innerText=='蓝色'){
			var colorname='blue';
		}else if(colorgaoliang[0].innerText=='黄色'){
			var colorname='yellow';
		}else if(colorgaoliang[0].innerText=='灰色'){
			var colorname='hui';
		}
		// console.log(colorname);

		$.get("../api/details.php?idx="+numid[0].innerText,function(res){
			console.log(JSON.parse(res));
			var _sizeArr = JSON.parse(res)['size'].split("&");
			var _colorArr = JSON.parse(res)['color'].split("&");
			for(i=0;i<_sizeArr.length;i++){
				if(_sizeArr[i]==sizegaoliang[0].innerText){
					var savesize=i;
				}
			}
			// console.log(savesize);
			for(i=0;i<_colorArr.length;i++){
				if(_colorArr[i]==colorname){
					var savecolor=i;
				}
			}
			// console.log(savecolor)

			$.get("../api/shoppingbag.php?type=1&name="+denglu.innerText,function(res){
					arr = numid[0].innerText+"-"+$("#num")[0].value+"-color="+savecolor+"-size="+savesize;
					// console.log(arr);
					var brr = res.slice(1,-1).split(",");
					console.log(brr[0]);
					if(brr[0]){
						brr.push(arr);
						// console.log(arr);
						console.log(denglu.innerText)
						console.log(brr);
						$.get("../api/shoppingbag.php?type=3&fenzu="+brr+"&name="+denglu.innerText,function(res){
							alert("加入购物袋成功");

						})
					}else{
						$.get("../api/shoppingbag.php?type=3&fenzu="+arr+"&name="+denglu.innerText,function(res){
							alert("加入购物袋成功");

						})
					}
					gouwudai();

					

			})



		})




		}


	})



	function gouwudai(){
		$.get("../api/shoppingbag.php?type=1&name="+denglu.innerText,function(res){

				
				//判断用户购物车是否有商品
				if(res.slice(1,-1)){
					var shopArr = res.slice(1,-1).split(",");
									// console.log(shopArr);
						var shoppingbag=0;
						for(i=0;i<shopArr.length;i++){
							var shopnum = shopArr[i].split("-");
							shoppingbag+=shopnum[1]*1;


						}
						document.getElementById("gouwuche").innerText = shoppingbag;


				}
			})
	}
	$("#out").click(function(){
		document.cookie = "name=; expires="+D+"; path=/";
		window.location.href = '../index.html';
	})

})