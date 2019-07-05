window.onload=function(){
	// 获取点击区域的id
	var ztqy=document.getElementById("ztan");
	// 获取视频区域
	var video=document.getElementById("videoplay");
	// 获取暂停按钮图标
	var antb=document.getElementById("antb");
	// 获取按钮文本
	var anwb=document.getElementById("anwb");
	ztqy.onclick=function(){
		if(!video.paused){
			video.pause();
			antb.style.backgroundPosition="0 -32px";
			anwb.innerHTML="播放";
		}else{
			video.play();
			antb.style.backgroundPosition="0 0";
			anwb.innerHTML="暂停";
		}
	}
}