window.onload = function(){
	var list = document.getElementById('list');
	var aP = list.getElementsByTagName('p');
	
	function zero(n){
		return n < 10? "0" + n : n;
	}
	
//	首先获取当前日期对象并且拼写字符长00:00:00
	var t = new Date();
	var h = t.getHours();
	var m = t.getMinutes();
	var s = t.getSeconds();
	
//	拼写字符串
	str = zero(h) + ':' + zero(m) + ':' + zero(s);
	console.log(str);
	
	for(var i = 0; i < str.length; i++){
		var img = aP[i].getElementsByTagName('img')[0];
		if(str.charAt(i) !== ":" ){
			img.src = 'img/' + str.charAt(i) + '.png';
		}
	}
	
//	存储一下页面初始时间
	var oldTime = str;
	
//	设定一个定时器改变时间
	setInterval(function(){
		var t = new Date();
		var h = t.getHours();
		var m = t.getMinutes();
		var s = t.getSeconds();
		
//	设定新的时间
	str = zero(h) + ':' + zero(m) + ':' + zero(s);
	
	for(var i = 0; i < str.length; i++){
		var img = aP[i].getElementsByTagName('img')[0];
		var img2 = aP[i].getElementsByTagName('img')[1];
		if(str.charAt(i) !== ':' ){
			img2.src ='img/' + str.charAt(i) + '.png'; 
			
//		判断两个时间字符之间的变化
		if(str.charAt(i) !== oldTime.charAt(i)){
			(function (i){
				mTween(aP[i],'top',-210,500,'linear',function(){
					aP[i].style.top = 0;
//					将第二张图片的地址给第一张
					var newimg = aP[i].getElementsByTagName('img')[0];
					var newimg2 = aP[i].getElementsByTagName('img')[1];
					
					newimg.src = newimg2.src;
				})
			})(i);
		}
		}else{
			img.src = 'img/fuh.png';
			(function(imgs){
				setTimeout(function(){
					imgs.src = 'img/nfh.png';
				},500);
			})(img);
		}
	};
//	保存当前时间
	oldTime = str;
	},1000)
};
