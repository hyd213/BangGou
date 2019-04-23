jQuery(function($){
	D = new Date("2000-3-23 0:0:0");
	var $banner = $("#banner_top");
	// console.log($banner);
	var $smallpic = $("#banner_bottom .container ul");
	$.get("api/bannernum.php",function(res){
		var $num = res;

		// console.log($num);
		//根据轮播图数量设置长度
		console.log((100*$num)+'%');
		$banner.width((100*$num)+'%');
		$banner.show();
		

			// console.log((100/$num)+'%')
			//获取图片src，渲染
			$.get("api/banner.php",function(arr){
				// console.log(arr);
				var src = arr.split(",");
				// console.log(src);
				// console.log($("#banner_top li").length);

				var srclen = src.length;
				var srcArr = src.splice(0,srclen-1);

				$("#banner").lunbotu({img:srcArr,'width':$("#banner")[0].offsetWidth,'height':600});
				// for(i=0;i<src.length-1;i++){
				
				// 	$li = $("<li></li>");
				// 	$li.width((100/$num)+'%');
				// 	$li.css({"background":'url("'+src[i]+'")',"background-position":"center center","background-repeat":"no-repeat"}	);
					
				// 	$li.appendTo($banner);
				// 	var $lis= $('<li></li>');
				// 	var $span = $('<span></span>');
					

				// 	$lis.width((100/$num)+'%');
				// 	$lis.css({"background":'url("'+src[i]+'")',"border-left":"10px solid #fff","background-origin": "content-box","background-size":"140% 100%","background-repeat":"no-repeat","background-position":"center"});
				
				// 	$lis.appendTo($smallpic);
				// 	$span.appendTo($lis);
				// 	// $('<img src="'+src[i]+'" alt="" />').appendTo($lis)						
					
				// }

					
			})	

		// console.log($smallpic);
		
	})
	//根据分类渲染页面
	$.get("api/index.php",function(res){
		var $hotpic = $("#hot ul li a");
		var picArr = getpic(res);
		var $jingxuanpic_t = $("#jingxuan .top li a");
		var $jingxuanpic_b = $("#jingxuan .bottom li a");
		// console.log(picArr);
		var $boypic = $("#boy .big a");
		var $girlpic = $("#girl .big a");
		var $childpic = $("#child .big a");
		var $shoepic = $("#shoe .big a");
		var hotnum = 0;
		var jingxuannum = 0;
		for(i=0;i<picArr.length;i++){
			
			if(picArr[i][0]=="hot"){
				
				// console.log(picArr[i][1])
				var hotpic = $hotpic[hotnum];
				// console.log(hotpic)
				$('<img src="'+picArr[i][1]+'" alt="" />').appendTo($(hotpic));
				hotnum++;
			}

			if(picArr[i][0]=="jingxuan"){
				if(jingxuannum<4){
					var jingxuanpic_t = $jingxuanpic_t[jingxuannum];
					$('<img src="'+picArr[i][1]+'" alt="" />').appendTo($(jingxuanpic_t));
					jingxuannum++;
				}else{
					var jingxuanpic_b = $jingxuanpic_b[jingxuannum-4];
					$('<img src="'+picArr[i][1]+'" alt="" />').appendTo($(jingxuanpic_b));
					jingxuannum++;
				}
			}
			if(picArr[i][0]=="boy"){
				var boy = $boypic[0];
				$('<img src="'+picArr[i][1]+'" alt="" />').appendTo($(boy));
			}
			if(picArr[i][0]=="girl"){
				var girl = $girlpic[0];
				$('<img src="'+picArr[i][1]+'" alt="" />').appendTo($(girl));
			}
			if(picArr[i][0]=="child"){
				var child = $childpic[0];
				$('<img src="'+picArr[i][1]+'" alt="" />').appendTo($(child));
			}
			if(picArr[i][0]=="shoe"){
				var shoe = $shoepic[0];
				$('<img src="'+picArr[i][1]+'" alt="" />').appendTo($(shoe));
			}

		}
		

	})

	$.get("api/shop.php?type="+1,function(res){
		var $hot = $("#todayHot li");
		var $hotpic = $hot.find("a");
		var $boy = $("#boy .bottom li").not(".big");
		var $boypic = $boy.find("a");
		var $girl = $("#girl .bottom li").not(".big");
		var $girlpic = $girl.find("a");
		var $child = $("#child .bottom li").not(".big");
		var $childpic = $child.find("a");
		var $shoe = $("#shoe .bottom li").not(".big");
		var $shoepic = $shoe.find("a");
		// console.log($boy); 
		var arr = res.split(";");
		var brr = [];
		var hotnum = 0;
		var boynum = 0;
		var girlnum = 0;
		var childnum = 0;
		var shoenum = 0;

		for(i=0;i<arr.length-1;i++){
			brr.push(arr[i].split("^"));

		}
		for(i=0;i<brr.length;i++){
			if(brr[i][0]=="hot"){
				var hotpic = $hotpic[hotnum];
				var hot = $hot[hotnum];
				$("#todayHot li")[hotnum].setAttribute("data-id",brr[i][4]);
				var $topbox = $('<div></div>');
				var $botbox = $('<div></div>');
				$topbox.css({"width":"100%","height":"20px","margin-top":"12px"});

				$topbox.appendTo($(hot));
				$botbox.css({"width":"100%","height":"20px","margin-top":"-15px"});
				
				// console.log(brr[i][1])
				var $img = $('<img src="'+brr[i][1]+'" alt="" />');
				$img.css({"width":"100%","height":"230px",});
				$img.appendTo($(hotpic));

				
				var $span_l=$('<span>METERSBONWE</span>');
				$span_l.css({"display":"block","margin-left":"10px",
					"color":"#999","float":"left"});
					$span_l.appendTo($topbox);
				var $name = $("<p>"+brr[i][2]+"</p>");
				$name.css({"margin-top":"10px","margin-left":"5px"});
				$name.appendTo($(hot));
				$botbox.appendTo($(hot));
				if(brr[i][5]){
					var $span_r=$('<span>'+brr[i][5]+'折</span>');
					var price_d = (brr[i][3]*brr[i][5]/10).toFixed(1);
					var $price=$("<span>￥"+price_d+"</span>");
					var $price_d=$("<span>￥"+brr[i][3]+"</span>");
					$span_r.css({"background-color":"#FDEDEC","color":"#F8584F","display":"block","float":"right","margin-right":"12px","border":"1px solid #F8584F","width":"42px","line-height":"20px","height":"20px","text-align":"center"});
					$price.css({"float":"left","font-size":"16px","color":"#F8584F","font-weight":"bold","display":"block"});
					$price.appendTo($(hot));
					$price_d.css({"float":"left","font-size":"16px","color":"#666","display":"block","text-decoration":"line-through","margin-left":"0px"});
					$price_d.appendTo($(hot));
					$span_r.appendTo($topbox);
					hotnum++;
					continue;
					 
				}
				var $price=$("<span>￥"+brr[i][3]+"</span>");
				$price.css({"float":"left","font-size":"16px","color":"#F8584F","font-weight":"bold","display":"block"});
				$price.appendTo($(hot));
				
				hotnum++;

			}
			if(brr[i][0]=="boy"){
				var boypic = $boypic[boynum];
				var boy = $boy[boynum];
				var $topbox = $('<div></div>');
				var $botbox = $('<div></div>');
				$topbox.css({"width":"230px","height":"20px","margin-top":"12px"});

				$topbox.appendTo($(boy));
				$botbox.css({"width":"230px","height":"20px","margin-top":"-15px"});
				
				// console.log(brr[i][1])
				var $img = $('<img src="'+brr[i][1]+'" alt="" />');
				$img.css({"width":"230px","height":"230px",});
				$img.appendTo($(boypic));

				
				var $span_l=$('<span>METERSBONWE</span>');
				$span_l.css({"display":"block","margin-left":"10px",
					"color":"#999","float":"left"});
					$span_l.appendTo($topbox);
				var $name = $("<p>"+brr[i][2]+"</p>");
				$name.css({"margin-top":"10px","margin-left":"5px"});
				$name.appendTo($(boy));
				$botbox.appendTo($(boy));
				if(brr[i][5]){
					var $span_r=$('<span>'+brr[i][5]+'折</span>');
					var price_d = (brr[i][3]*brr[i][5]/10).toFixed(1);
					var $price=$("<span>￥"+price_d+"</span>");
					var $price_d=$("<span>￥"+brr[i][3]+"</span>");
					$span_r.css({"background-color":"#FDEDEC","color":"#F8584F","display":"block","float":"right","margin-right":"12px","border":"1px solid #F8584F","width":"42px","line-height":"20px","height":"20px","text-align":"center"});
					$price.css({"float":"left","font-size":"16px","color":"#F8584F","font-weight":"bold","display":"block"});
					$price.appendTo($(boy));
					$price_d.css({"float":"left","font-size":"16px","color":"#666","display":"block","text-decoration":"line-through","margin-left":"0px"});
					$price_d.appendTo($(boy));
					$span_r.appendTo($topbox);

					$boy[boynum].setAttribute("data-id",brr[i][4]);
					// console.log(brr[i][4])
					// $("#boy .bottom li").not(".big")[boynum-4].setAttribute("data-id",brr[i][4]);
					boynum++;
					continue;
					 
				}
				var $price=$("<span>￥"+brr[i][3]+"</span>");
				$price.css({"float":"left","font-size":"16px","color":"#F8584F","font-weight":"bold","display":"block"});
				$price.appendTo($(boy));
				$boy[boynum].setAttribute("data-id",brr[i][4]);
				boynum++;
			}
			if(brr[i][0]=="girl"){
				var girlpic = $girlpic[girlnum];
				var girl = $girl[girlnum];
				var $topbox = $('<div></div>');
				var $botbox = $('<div></div>');
				$topbox.css({"width":"230px","height":"20px","margin-top":"12px"});

				$topbox.appendTo($(girl));
				$botbox.css({"width":"230px","height":"20px","margin-top":"-15px"});
				
				// console.log(brr[i][1])
				var $img = $('<img src="'+brr[i][1]+'" alt="" />');
				$img.css({"width":"230px","height":"230px",});
				$img.appendTo($(girlpic));

				
				var $span_l=$('<span>METERSBONWE</span>');
				$span_l.css({"display":"block","margin-left":"10px",
					"color":"#999","float":"left"});
					$span_l.appendTo($topbox);
				var $name = $("<p>"+brr[i][2]+"</p>");
				$name.css({"margin-top":"10px","margin-left":"5px"});
				$name.appendTo($(girl));
				$botbox.appendTo($(girl));
				if(brr[i][5]){
					var $span_r=$('<span>'+brr[i][5]+'折</span>');
					var price_d = (brr[i][3]*brr[i][5]/10).toFixed(1);
					var $price=$("<span>￥"+price_d+"</span>");
					var $price_d=$("<span>￥"+brr[i][3]+"</span>");
					$span_r.css({"background-color":"#FDEDEC","color":"#F8584F","display":"block","float":"right","margin-right":"12px","border":"1px solid #F8584F","width":"42px","line-height":"20px","height":"20px","text-align":"center"});
					$price.css({"float":"left","font-size":"16px","color":"#F8584F","font-weight":"bold","display":"block"});
					$price.appendTo($(girl));
					$price_d.css({"float":"left","font-size":"16px","color":"#666","display":"block","text-decoration":"line-through","margin-left":"0px"});
					$price_d.appendTo($(girl));
					$span_r.appendTo($topbox);
					$girl[girlnum].setAttribute("data-id",brr[i][4]);
					girlnum++;
					continue;
					 
				}
				var $price=$("<span>￥"+brr[i][3]+"</span>");
				$price.css({"float":"left","font-size":"16px","color":"#F8584F","font-weight":"bold","display":"block"});
				$price.appendTo($(girl));
				$girl[girlnum].setAttribute("data-id",brr[i][4]);
				girlnum++;
			}
			if(brr[i][0]=="child"){
				var childpic = $childpic[childnum];
				var child = $child[childnum];
				var $topbox = $('<div></div>');
				var $botbox = $('<div></div>');
				$topbox.css({"width":"230px","height":"20px","margin-top":"12px"});

				$topbox.appendTo($(child));
				$botbox.css({"width":"230px","height":"20px","margin-top":"-15px"});
				
				// console.log(brr[i][1])
				var $img = $('<img src="'+brr[i][1]+'" alt="" />');
				$img.css({"width":"230px","height":"230px",});
				$img.appendTo($(childpic));

				
				var $span_l=$('<span>METERSBONWE</span>');
				$span_l.css({"display":"block","margin-left":"10px",
					"color":"#999","float":"left"});
					$span_l.appendTo($topbox);
				var $name = $("<p>"+brr[i][2]+"</p>");
				$name.css({"margin-top":"10px","margin-left":"5px"});
				$name.appendTo($(child));
				$botbox.appendTo($(child));
				if(brr[i][5]){
					var $span_r=$('<span>'+brr[i][5]+'折</span>');
					var price_d = (brr[i][3]*brr[i][5]/10).toFixed(1);
					var $price=$("<span>￥"+price_d+"</span>");
					var $price_d=$("<span>￥"+brr[i][3]+"</span>");
					$span_r.css({"background-color":"#FDEDEC","color":"#F8584F","display":"block","float":"right","margin-right":"12px","border":"1px solid #F8584F","width":"42px","line-height":"20px","height":"20px","text-align":"center"});
					$price.css({"float":"left","font-size":"16px","color":"#F8584F","font-weight":"bold","display":"block"});
					$price.appendTo($(child));
					$price_d.css({"float":"left","font-size":"16px","color":"#666","display":"block","text-decoration":"line-through","margin-left":"0px"});
					$price_d.appendTo($(child));
					$span_r.appendTo($topbox);
					$child[childnum].setAttribute("data-id",brr[i][4]);
					childnum++;
					continue;
					 
				}
				var $price=$("<span>￥"+brr[i][3]+"</span>");
				$price.css({"float":"left","font-size":"16px","color":"#F8584F","font-weight":"bold","display":"block"});
				$price.appendTo($(child));
				$child[childnum].setAttribute("data-id",brr[i][4]);
				childnum++;
			}
			if(brr[i][0]=="shoe"){
				var shoepic = $shoepic[shoenum];
				var shoe = $shoe[shoenum];
				var $topbox = $('<div></div>');
				var $botbox = $('<div></div>');
				$topbox.css({"width":"230px","height":"20px","margin-top":"12px"});

				$topbox.appendTo($(shoe));
				$botbox.css({"width":"230px","height":"20px","margin-top":"-15px"});
				
				// console.log(brr[i][1])
				var $img = $('<img src="'+brr[i][1]+'" alt="" />');
				$img.css({"width":"230px","height":"230px",});
				$img.appendTo($(shoepic));

				
				var $span_l=$('<span>METERSBONWE</span>');
				$span_l.css({"display":"block","margin-left":"10px",
					"color":"#999","float":"left"});
					$span_l.appendTo($topbox);
				var $name = $("<p>"+brr[i][2]+"</p>");
				$name.css({"margin-top":"10px","margin-left":"5px"});
				$name.appendTo($(shoe));
				$botbox.appendTo($(shoe));
				if(brr[i][5]){
					var $span_r=$('<span>'+brr[i][5]+'折</span>');
					var price_d = (brr[i][3]*brr[i][5]/10).toFixed(1);
					var $price=$("<span>￥"+price_d+"</span>");
					var $price_d=$("<span>￥"+brr[i][3]+"</span>");
					$span_r.css({"background-color":"#FDEDEC","color":"#F8584F","display":"block","float":"right","margin-right":"12px","border":"1px solid #F8584F","width":"42px","line-height":"20px","height":"20px","text-align":"center"});
					$price.css({"float":"left","font-size":"16px","color":"#F8584F","font-weight":"bold","display":"block"});
					$price.appendTo($(shoe));
					$price_d.css({"float":"left","font-size":"16px","color":"#666","display":"block","text-decoration":"line-through","margin-left":"0px"});
					$price_d.appendTo($(shoe));
					$span_r.appendTo($topbox);
					$shoe[shoenum].setAttribute("data-id",brr[i][4]);
					shoenum++;
					continue;
					 
				}
				var $price=$("<span>￥"+brr[i][3]+"</span>");
				$price.css({"float":"left","font-size":"16px","color":"#F8584F","font-weight":"bold","display":"block"});
				$price.appendTo($(shoe));
				$shoe[shoenum].setAttribute("data-id",brr[i][4]);
				shoenum++;
			}
		}
		
		$boy.click(function(){
			var idx = this.attributes["data-id"].nodeValue;
			// console.log(this.attributes["data-id"].nodeValue);
			location.href = encodeURI("html/details.html?"+idx);

		})
		$hot.click(function(){
			var idx = this.attributes["data-id"].nodeValue;

			location.href = encodeURI("html/details.html?"+idx);

		})
		$girl.click(function(){
			var idx = this.attributes["data-id"].nodeValue;

			location.href = encodeURI("html/details.html?"+idx);

		})
		$child.click(function(){
			var idx = this.attributes["data-id"].nodeValue;

			location.href = encodeURI("html/details.html?"+idx);

		})
		$shoe.click(function(){
			var idx = this.attributes["data-id"].nodeValue;

			location.href = encodeURI("html/details.html?"+idx);

		})



	})
	
	var denglu = document.getElementById("denglu");
	var zhuce = document.getElementById("zhuce");
	var cookieArr = document.cookie.split("; ");
	cookieArr.forEach(function(item){
		var res = item.split("=");
		console.log(res);
		if(res[0]=="name"){
			denglu.innerHTML=`<a href="#" id="yonghu">${res[1]}</a>`;
			zhuce.innerHTML =`<a href="#" id="out">注销</a>`;

			
			$.get("api/shoppingbag.php?type=1&name="+denglu.innerText,function(res){

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

	})



	$("#out").click(function(){
		console.log(444)
		document.cookie = "name=; expires="+D+"; path=/";
		window.location.href = 'index.html';
	})

	
})

function getpic(res){
	var arr = res.split(",");
	var brr=[];
	for(i=0;i<arr.length;i++){
		 brr.push(arr[i].split(":"));
		
	}
	return brr;
	
}