document.addEventListener("DOMContentLoaded",function(){

    var $ul = $("#shoplist");
	
    var jiage = true;
    var zhekou = true;
    var currentPage = 3;

	function show(type,dianji){
		if(!dianji){
			dianji = 1
		}
		$.get("../api/shop.php?qte="+dianji,function(res){
		
		var shoparr = JSON.parse(res)['resArr'];
		// var _shoparr = res.split(",");
		var shopNum = JSON.parse(res)['len'];
		var qte = Math.ceil(shopNum/20);
		var qtenow =  JSON.parse(res)['qte'];
		// console.log(res); 

		// var shoparr = shoparr.split(";");
		// var shoparr = [];	
			

		// for(i=0;i<shoparr.length-1;i++){
		// 	shoparr.push(shoparr[i].split(","));

		// }
		if(type==2){
			for(let j=0;j<shoparr.length;j++){
				
				for(let k=j+1;k<shoparr.length;k++){
					if(shoparr[k]['price']*1<shoparr[j]['price']*1){
						[shoparr[j],shoparr[k]] = [shoparr[k],shoparr[j]];
					}
				}
			}
			


		}
		if(type==3){
			for(let j=0;j<shoparr.length;j++){
				
				for(let k=j+1;k<shoparr.length;k++){
					if(shoparr[k]['price']*1>shoparr[j]['price']*1){
						[shoparr[j],shoparr[k]] = [shoparr[k],shoparr[j]];
					}
				}
			}
			


		}
		if(type==1){
			for(i=0;i<shoparr.length;i++){
				if(!shoparr[i]['discount']){
					shoparr[i]['discount'] =10;
				}
			}
			for(let j=0;j<shoparr.length;j++){
				
				for(let k=j+1;k<shoparr.length;k++){
					if(shoparr[k]['discount']*1<shoparr[j]['discount']*1){
						[shoparr[j],shoparr[k]] = [shoparr[k],shoparr[j]];
					}
					
				}
			}
			for(i=0;i<shoparr.length;i++){
				if(shoparr[i]['discount']==10){
					shoparr[i]['discount'] ='';
				}
			}


			


		}
		if(type==4){
			for(i=0;i<shoparr.length;i++){
				if(!discount){
					discount =0.001;
				}
			}
			for(let j=0;j<shoparr.length;j++){
				
				for(let k=j+1;k<shoparr.length;k++){
					if(shoparr[k]['discount']*1>shoparr[j]['discount']*1){
						[shoparr[j],shoparr[k]] = [shoparr[k],shoparr[j]];
					}
					
				}
			}
			for(i=0;i<shoparr.length;i++){
				if(discount==0.001){
					discount ='';
				}
			}


			


		}

		// console.log(shoparr.length)
			$ul[0].innerHTML="";
			$("#shopnum")[0].innerText = shoparr.length;
			for(i=0;i<shoparr.length;i++){
				var img = shoparr[i]['img'];
				var discount = shoparr[i]['discount'];
				var name = shoparr[i]['name'];
				var id = shoparr[i]['id'];
				var price = shoparr[i]['price'];
				var $li = $('<li></li>');
				// var hotpic = $hotpic[hotnum];
				// var hot = $hot[hotnum];
				// $li.setAttribute("data-id",shoparr[i][4]);
				$li.attr( "data-id",id);
				var $topbox = $('<div></div>');
				var $botbox = $('<div></div>');
				var $img = $('<img src="'+img+'" alt="" />');
				$img.css({"width":"100%","height":"230px",});
				$img.appendTo($li);
				$topbox.css({"width":"100%","height":"20px","margin-top":"12px"});

				$topbox.appendTo($li);
				$botbox.css({"width":"100%","height":"20px","margin-top":"-15px"});
				
				// console.log(shoparr[i][1])
				

				
				var $span_l=$('<span>METERSBONWE</span>');
				$span_l.css({"display":"block","margin-left":"10px",
					"color":"#999","float":"left"});
					$span_l.appendTo($topbox);
				var $name = $("<p>"+name+"</p>");
				$name.css({"margin-top":"10px","margin-left":"5px"});
				$name.appendTo($li);
				$botbox.appendTo($li);
				if(shoparr[i]['discount']){
					var $span_r=$('<span>'+discount+'折</span>');
					var price_d = (price*discount/10).toFixed(1);
					var $price=$("<span>￥"+price_d+"</span>");
					var $price_d=$("<span>￥"+price+"</span>");
					$span_r.css({"background-color":"#FDEDEC","color":"#F8584F","display":"block","float":"right","margin-right":"12px","border":"1px solid #F8584F","width":"42px","line-height":"20px","height":"20px","text-align":"center"});
					$price.css({"float":"left","font-size":"16px","color":"#F8584F","font-weight":"bold","display":"block"});
					$price.appendTo($li);
					$price_d.css({"float":"left","font-size":"16px","color":"#666","display":"block","text-decoration":"line-through","margin-left":"0px"});
					$price_d.appendTo($li);
					$span_r.appendTo($topbox);
					$li.appendTo($ul);
					continue;
					 
				}
				var $price=$("<span>￥"+price+"</span>");
				$price.css({"float":"left","font-size":"16px","color":"#F8584F","font-weight":"bold","display":"block"});
				$price.appendTo($li);
				$li.appendTo($ul);
				

			
			
			
			
			}

		
			$('#shoplist li').click(function(){
				var idx = this.attributes["data-id"].nodeValue;
				// console.log(idx)
				location.href = encodeURI("details.html?"+idx);

			})
			var $p = $('<p class="qte"></p>');

			for(i=0;i<qte;i++){
				$('<span>'+(i+1)+'</span>').appendTo($p);
			}
			$p.appendTo($('#main .container'));
			var $span = $('.qte span');
			$($span[dianji-1]).addClass('gaoliang');
			for(let i=0;i<$span.length;i++){
				$($span[i]).click(function(){
					// console.log(i)
					$p[0].innerHTML="";
					show(5,i+1);
				})
			}
		})



	}
	show();



	var $paixu = $("#paixu li input");	
		$($paixu[0]).addClass("gaoliang");
		$($paixu[0]).click(()=>{
			for(i=0;i<$paixu.length;i++){
				$($paixu[i]).removeClass('gaoliang');
			}
			$($paixu[0]).addClass('gaoliang');
			show();
		})

		$($paixu[1]).click(()=>{
			for(i=0;i<$paixu.length;i++){
				$($paixu[i]).removeClass('gaoliang');
			}
			$($paixu[1]).addClass('gaoliang');
			if(zhekou){
				show(1);
				$paixu[1].value = '折扣↓';
				zhekou = !zhekou;
			}else{
				show(4);
				$paixu[1].value = '折扣↑';
				zhekou = !zhekou;
			}
			
		})

		$($paixu[2]).click(()=>{
			for(i=0;i<$paixu.length;i++){
				$($paixu[i]).removeClass('gaoliang');
			}
			$($paixu[2]).addClass('gaoliang');
			if(jiage){
				show(2);
				$paixu[2].value = '价格↓';
				jiage = !jiage;
			}else{
				show(3);
				$paixu[2].value = '价格↑';
				jiage = !jiage;
			}
			
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
			
			gouwudai();
			
		}

	})

})