document.addEventListener("DOMContentLoaded",function(){


	$("#logo").click(function(){
		window.location.href = '../index.html';
	})
	D = new Date("2000-3-23 0:0:0");
	var denglu = document.getElementById("denglu");
	var zhuce = document.getElementById("zhuce");
	var cookieArr = document.cookie.split("; ");
	cookieArr.forEach(function(item){
		var res = item.split("=");
		console.log(res);
		if(res[0]=="name"){
			denglu.innerHTML=`<a href="#" id="yonghu">${res[1]}</a>`;
			zhuce.innerHTML =`<a href="#" id="out">注销</a>`;
			
			
		}

	})
	$("#out").click(function(){
		document.cookie = "name=; expires="+D+"; path=/";
		window.location.href = '../index.html';
	})

	function xuanranyemian(){
		$.get("../api/shoppingbag.php?type=1&name="+denglu.innerText,function(resArr){

				//判断用户购物车是否有商品
		if(resArr.slice(1,-1)){
			var shopArr = resArr.slice(1,-1).split(",");
			// console.log(shopArr);
				for(i=0;i<shopArr.length;i++){
					// console.log(shopArr[i].split('-')[1])
					let shopnum = shopArr[i].split('-')[1];
					// let sizeclass = 
					
					let colorArr = shopArr[i].split('-')[2];
					let sizeArr = shopArr[i].split('-')[3];

					$.get("../api/shoppingbag.php?type=2&id="+shopArr[i].split('-')[0],function(resBrr){
						var xuanran = JSON.parse(resBrr);
						
						var sizeclass = sizeArr.split('=')[1];
						var colorclass = colorArr.split('=')[1];
						// console.log(sizeclass)
						var idx = xuanran['id'];
						var size = xuanran['size'].split("&");
						var color = xuanran['color'].split("&");
						var name = xuanran['name'];
						var price = (xuanran['price']*1).toFixed(1);
						var discount = xuanran['discount'];
						var img = xuanran['img'];
						var money = price*shopnum;
						// console.log(size[sizeclass-1]);
						var showsize = size[sizeclass];
						var showcolor = color[colorclass];
						if(showcolor=="green"){
							showcolor="绿色";
						}
						if(showcolor=="bai"){
							showcolor="白色";
						}
						if(showcolor=="red"){
							showcolor="红色";
						}
						if(showcolor=="yellow"){
							showcolor="黄色";
						}
						if(showcolor=="blue"){
							showcolor="蓝色";
						}
						if(showcolor=="hei"){
							showcolor="黑色";
						}
						if(showcolor=="hui"){
							showcolor="灰色";
						}
						var zhekoujia = price;
						if(discount){
							var money = (price*discount/10*shopnum).toFixed(1);
							zhekoujia = (price*discount/10).toFixed(1);
							
							

						}
						var discount = xuanran['discount']||price;
						// for(i=0;i<$("#show li").length;i++){
						// 	if($("#show li .num")[i].innerText.slice(6,)=="")
								$('<li><input type="checkbox" class="xz"><img src="'+img+'" alt=""><div class="xinxi"><span class="name">'+name+'</span><span class="num">商品编号:'+idx+'</span><span>包邮 &nbsp不可用红包</span></div><div class="yangshi"><span class="color">颜色:'+showcolor+'</span><span class="size">尺码:'+showsize+'</span></div><div class="price"><span class="jiage">￥'+price+'</span><span class="zhekoujia">￥'+zhekoujia+'</span></div><div class="shopnum"><input type="button" value="-" class="jian"><input type="text" value="'+shopnum+'" class="shuliang"><input type="button" value="+" class="jia"></div><div class="xiaoji">￥'+money+'</div><div class="shanchu"><input type="button" class="del" value="删除"></div></li>').appendTo($('#show'));








						// }
							
					})
						}


					
				}


		// }
				
				
	})

	}
	xuanranyemian();
	var $show = $("#show");
	$show.mousemove(function(){
		var $xuanze = $("#show li .xz");
		var $all = $(".all");
		var $jian = $(".jian");
		var $jia=$(".jia");
		var $del=$(".del");
		for(i=0;i<$xuanze.length;i++){
			
			$xuanze[i].onclick = function(){
				// console.log(this);
				xuanranjiage();
			}
		}

		$all.click(function(){
			
		})
		$all[0].onclick=function(){
			for(i=0;i<$xuanze.length;i++){
				$('.xz')[i].checked=$all[0].checked;
				xuanranjiage();
			}


		}
		$all[1].onclick=function(){
			for(i=0;i<$xuanze.length;i++){
				$('.xz')[i].checked=$all[1].checked;
				xuanranjiage();
			}


		}
		var ckeckArr=[];
		for(let i=0;i<$jian.length;i++){
			$jian[i].onclick = function(){
				var nownum = this.parentElement.children[1].value*1;
				// console.log(i);
				// console.log($("#show li .shuliang")[i]);
				// console.log(($("#show li .zhekoujia")[i].innerText).slice(1,))
				$("#show li .xiaoji")[i].innerText="￥"+(($("#show li .shuliang")[i].value*1 -1) * $("#show li .zhekoujia")[i].innerText.slice(1,)).toFixed(2);
				nownum--;
				if(nownum<0){
					alert("数量最少为0");
					return;
				}
				this.parentElement.children[1].value=nownum;
				// console.log(nownum);
				var nowid = this.parentElement.parentElement.children[2].children[1].innerText.slice(5,);
				var crr;
				var brr;


				$.get("../api/shoppingbag.php?type=1&name="+denglu.innerText,function(res){
						var fenzu =	res.slice(1,-1).split(",");
						for(i=0;i<fenzu.length;i++){
							var arr = fenzu[i].split('-');
							if(arr[0]==nowid){
								crr = arr[0]+"-"+arr[1]+"-"+arr[2]+"-"+arr[3];
								arr.splice(1,1,nownum);
								brr = arr[0]+"-"+arr[1]+"-"+arr[2]+"-"+arr[3];
								
								


							}
							if(fenzu[i]==crr){
								fenzu.splice(i,1,brr);
									
							}

						}
						

						$.get("../api/shoppingbag.php?type=3&fenzu="+fenzu+"&nowid="+nowid+"&name="+denglu.innerText,function(res){

							// $("#show")[0].innerHTML="";
							// console.log(i);
							xuanranjiage();

						})

				})

				
			}

		}
		for(let i=0;i<$jia.length;i++){
			$jia[i].onclick = function(){
				var nownum = this.parentElement.children[1].value*1;
				// console.log(this.parentElement.parentElement.children[0].checked);
				// var checkArr=[];
				// for(i=0;i<$("#show li").length;i++){
				// 	checkArr.push($("#show li .xz")[i].checked);
				// }
				// console.log(checkArr);
				// console.log(i);
				// console.log($("#show li")[i])
				// console.log($("#show li .shuliang")[i].value);
				// console.log(($("#show li .zhekoujia")[i].innerText).slice(1,))
				$("#show li .xiaoji")[i].innerText="￥"+(($("#show li .shuliang")[i].value*1 +1) * $("#show li .zhekoujia")[i].innerText.slice(1,)).toFixed(2);
				nownum++;
				this.parentElement.children[1].value=nownum;
				// console.log(nownum);
				var nowid = this.parentElement.parentElement.children[2].children[1].innerText.slice(5,);
				var crr;
				var brr;


				$.get("../api/shoppingbag.php?type=1&name="+denglu.innerText,function(res){
						var fenzu =	res.slice(1,-1).split(",");
						for(i=0;i<fenzu.length;i++){
							var arr = fenzu[i].split('-');
							if(arr[0]==nowid){
								crr = arr[0]+"-"+arr[1]+"-"+arr[2]+"-"+arr[3];
								arr.splice(1,1,nownum);
								brr = arr[0]+"-"+arr[1]+"-"+arr[2]+"-"+arr[3];
								


							}
							if(fenzu[i]==crr){
								fenzu.splice(i,1,brr);
									
							}


						}
						

						$.get("../api/shoppingbag.php?type=3&fenzu="+fenzu+"&nowid="+nowid+"&name="+denglu.innerText,function(res){
							// $("#show")[0].innerHTML="";
							// xuanranyemian();

							xuanranjiage();

						})

				})

				
			}

		}

		for(i=0;i<$del.length;i++){
			$del[i].onclick=function(){

				// console.log(this.parentElement.parentElement.children[2].children[1].innerText.slice(5,));
			var nowid = this.parentElement.parentElement.children[2].children[1].innerText.slice(5,);
			var crr;
			var brr;
			$.get("../api/shoppingbag.php?type=1&name="+denglu.innerText,function(res){
				// console.log(res);
				var fenzu = res.slice(1,-1).split(',');
				console.log(fenzu);
				for(i=0;i<fenzu.length;i++){
					var arr = fenzu[i].split('-');
					// console.log(arr);
					if(arr[0]==nowid){
						// console.log(arr[0]);
						fenzu.splice(i,1);
						console.log(fenzu);
					}

				}
				$.get("../api/shoppingbag.php?type=3&fenzu="+fenzu+"&nowid="+nowid+"&name="+denglu.innerText,function(res){
					$("#show")[0].innerHTML="";
					xuanranyemian();
				})
			})




			}
		}


	})
	function jiansp(i){

		

	}
	function panduanNum(){
		var znum=0;
		var zjnum = 0;
		for(t=0;t<$(".xz").length;t++){
			if($('.xz')[t].checked==true){
				var spnum = $('.xz')[t].parentElement.children[5].children[1].value*1;
				var jgnum = $('.xz')[t].parentElement.children[6].innerText.slice(1,)*1;
				zjnum+=jgnum;
				
				znum+=spnum;
			
			}
			
		}
			return znum;
		
	}
	function xuanranjiage(){
		$("#jian")[0].innerText= panduanNum();
				$("#zongjia")[0].innerText =panduanPrice();
				var youhuijiage = Math.ceil(($("#zongjia")[0].innerText).slice(1,)/99)*10;
				$("#jianjia")[0].innerText = "优惠 -￥" +youhuijiage;
				$("#heji")[0].innerText = "￥"+($("#zongjia")[0].innerText.slice(1,)-youhuijiage).toFixed(1);
	}
	function panduanPrice(){
			var zjnum = 0;
			for(t=0;t<$(".xz").length;t++){
				if($('.xz')[t].checked==true){
					var jgnum = $('.xz')[t].parentElement.children[6].innerText.slice(1,)*1;
					zjnum+=jgnum;
					
				
				}
				
			}
				return "￥"+zjnum;

	}	
			


})