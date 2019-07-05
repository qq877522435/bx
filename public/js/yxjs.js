var video=document.getElementById("videoplay");
var tb=document.getElementsByClassName("tb");
var yxjn=document.getElementById("yxjn");
tb[0].onclick=function (){
	video.src="http://overwatch.nos.netease.com/1/assets/images/hero/genji/intro-video.mp4";
	yxjn.innerHTML="&nbsp ";
}
tb[1].onclick=function(){
	video.src="http://overwatch.nos.netease.com/1/assets/images/hero/genji/ability-shuriken/video-ability.mp4";
	yxjn.innerHTML="镖";
}
tb[2].onclick=function(){
	video.src="http://overwatch.nos.netease.com/1/assets/images/hero/genji/ability-deflect/video-ability.mp4";
	yxjn.innerHTML="闪";
}
tb[3].onclick=function(){
	video.src="http://overwatch.nos.netease.com/1/assets/images/hero/genji/ability-swift-strike/video-ability.mp4";
	yxjn.innerHTML="影";
}
tb[4].onclick=function(){
	video.src="http://overwatch.nos.netease.com/1/assets/images/hero/genji/ability-dragonblade/video-ability.mp4";
	yxjn.innerHTML="斩";
}
var dj=document.getElementsByClassName("dj");
var video1=document.getElementById("myvideo");
var body=document.getElementById("body");
var hz=document.getElementById("hz");
var gs=document.getElementById("gs");
var ztys=document.getElementsByClassName("ztys");
dj[0].style.backgroundColor="rgba(19,42,77,.6)";
ztys[0].style.color="#b4bac8";
dj[0].onclick=function (){
	gs.style.display="none";
	hz.style.display="block";
	video1.src="http://overwatch.nos.netease.com/1/assets/images/hero/genji/idle-video.mp4";
	body.style.backgroundImage="";
	dj[0].style.backgroundColor="rgba(19,42,77,.6)";
	ztys[0].style.color="#b4bac8";
	dj[1].style.backgroundColor="rgba(255,255,255,.6)";
	ztys[1].style.color="#3e383a";
}
dj[1].onclick=function (){
	hz.style.display="none";
	gs.style.display="block";
	video1.src="";
	body.style.backgroundImage="url(http://overwatch.nos.netease.com/1/assets/images/hero/genji/background-story.jpg)"
	dj[0].style.backgroundColor="rgba(255,255,255,.6)";
	ztys[0].style.color="#3e383a";
	dj[1].style.backgroundColor="rgba(19,42,77,.6)";
	ztys[1].style.color="#b4bac8";
	body.style.height="1060px"
}