// 左右事件
window.onload = function() {
	var list = document.getElementById("list");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	function animate(offset) {
		/*获取的style.left，是相对左边获取距离，所以第一张图后style.left都为负值*/
		/*且style.left获取的是字符串，需要用parseInt()取整转化为数字。*/
		var newLeft = parseInt(list.style.left) + offset;
		list.style.left = newLeft + "px";
		// 为图片添加切换效果
		list.style.transition='300ms linear';
		if (newLeft < -2034) {
			list.style.left = 0 + 'px';
		}
		if (newLeft > 0) {
			list.style.left = -2034 + 'px';
		}
	}
	// 设置自动轮播
	var timer;
	function zdlb() {
		timer = setInterval(function() {
			next.onclick()
		}, 3000);
	}
	zdlb();
	//鼠标移入图片时自动停止轮播,鼠标移出时正常轮播
	var box = document.getElementById("box");
	function tzlb() {
		clearInterval(timer)
	}
	box.onmouseover = tzlb;
	box.onmouseout = zdlb;
	
	// 按钮随着图片偏移而改动样式
	var button = document.getElementsByTagName('span');
	var index = 1;
	function xyd() {
		//清除之前的样式
		for (var i = 0; i < button.length; i++) {
			if (button[i].className == 'on') {
				button[i].className = '';
			}
		}
		button[index - 1].className = 'on';
	}
	prev.onclick = function() {
		index -= 1;
		if (index < 1) {
			index = 4;
		}
		xyd();
		animate(678);
	}
	next.onclick = function() {
		index += 1;
		if (index > 4) {
			index = 1;
		}
		xyd();
		animate(-678);
	}
	// 点击按钮即会切换到相应位置的图片	
	for (var i = 0; i < button.length; i++) {
		button[i].onclick = function() {
			// this.getAttribute为获取当前自定义属性的方法
			var zdysx = parseInt(this.getAttribute('index'));
			// zdysx为1,2,3,4,为自定义属性index的值 
			// console.log(zdysx)
			var offset = 678 * (index - zdysx);
			// console.log(index);
			// console.log(list.style.left);
			index = zdysx;
			//变量index的值会随着当前获取的zdysx的值改变而改变,在保证计算的同时也保证了小圆点可以正常显示
			// console.log(offset)
			animate(offset);
			xyd();
		}
	}
}
