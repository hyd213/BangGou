(function($){
	$.fn.lunbotu = function(obj){
		var arr={
			//图片路径,轮播图大小,每张图切换间隔
			img:[],
			width:200,
			height:200,
			time:2000
		}
		 $(this).each(function(idx,item){
			var newObj = Object.assign({},arr,obj);
			var width = newObj["width"]+"px";
			var height = newObj["height"]+"px";
			var time = newObj["time"];
			$(this).css({"position":"relative","width":width,"height":height,"overflow":"hidden"});
			var $ul=$('<ul class="lunbotuul"></ul>');
			var len = newObj["img"].length;
			var num = 0;
			var $p=$('<p></p>');
			var init = () =>{
			for(i=0;i<len;i++){
				var $li = $("<li></li>");
				$li.css({"width":width,"height":height,"left":width});
				$('<img src="'+newObj["img"][i]+'" alt="" />').appendTo($li);
				$li.appendTo($ul);
			}
			for(i=0;i<len;i++){
				var $span = $('<span>'+(i+1)+'</span>');
				$span.appendTo($p);
			}
			$('<input type="button" class="next" value=">"/>').css({"position":"absolute","right":"10px","top":newObj["height"]/2+"px","height":"30px"}).appendTo($ul);
			$('<input type="button" class="prev" value="<"/>').css({"position":"absolute","left":"10px","top":newObj["height"]/2+"px","height":"30px"}).appendTo($ul);
			$p.appendTo($ul);
			
			$ul.css({"width":width,"height":height}).appendTo($(item));
			$($(item).find(".lunbotuul li")[0]).css({"left":0});
			$(item).find(".lunbotuul span")[0].classList.add('gaoliang');
			move();
			}
			var move = () =>{
			var $li=$(".lunbotuul li");
			var timer = null;
			timer =  setInterval(next,time);		
			function gaoliang(){
				for(i=0;i<len;i++){
					$(item).find(".lunbotuul span")[i].classList.remove('gaoliang');
				}
				$(item).find(".lunbotuul span")[num].classList.add('gaoliang');
			}
			function next(i){
				$($(item).find(".lunbotuul li")[num]).animate({left:'-'+width},500);
				if(i){
					num = i-1;
				}
				for(j=0;j<len;j++){
						if(num!=j)
						$($(item).find(".lunbotuul li")[j]).css({"left":width});
					}
				num++;
				if(num>=len){
					num=0;
				}
				$($(item).find(".lunbotuul li")[num]).animate({left:0},500);
				gaoliang();
			}
			function prev(i){
				$($(item).find(".lunbotuul li")[num]).animate({left:width},500);
				if(i){
					num = i;
				}
					for(j=0;j<len;j++){
						if(num!=j)
						$($(item).find(".lunbotuul li")[j]).css({"left":'-'+width});
					}
				num--;
				if(num<=-1){
					num=len-1;
				}
				$($(item).find(".lunbotuul li")[num]).animate({left:0},500);
				gaoliang();
			}

			$(".lunbotuul input").click(function(){
				for(i=0;i<$("input").length;i++){
					$("input")[i].disabled = true;
				}
				setTimeout(function(){
					for(i=0;i<$(".lunbotuul input").length;i++){
					$("input")[i].disabled = false;
				}
				},1000)
			})
			$ul.mouseover(function(){
				clearInterval(timer);
			})
			$ul.mouseout(function(){
				timer = setInterval(next, time);
			})
			$(item).find(".lunbotuul .next").click(function(){
				next();
			})
			$(item).find(".lunbotuul .prev").click(function(){
				prev();
			})
			for(let i=0;i<len;i++){
				$($(item).find(".lunbotuul span")[i]).click(function(){
					if(i>num){
						next(i);
					}else if(i<num){
						for(j=0;j<len;j++){
							if(i==j){
							$(item).find($li[j]).css({"left":'-'+width});
							}
						}
						prev(i+1);
					}
				})
			}
		}
			init();
		})
		 return this;
	}
})(jQuery)