var sq = document.getElementById("sq");
var sptp = document.getElementsByClassName("sptp");
var video = document.getElementsByClassName("myvideo");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var bf = document.getElementById("bf");
var dhbt = document.getElementById("dhbt");
function gb() {
	sq.style.display = "none";
	for (var i=0;i<video.length;i++){
		if(!video[i].paused){
			video[i].pause();
		}
	}
}
function animate(offset) {
	var newLeft = parseInt(bf.style.left) + offset;
	bf.style.left = newLeft + "px";
	if (newLeft < -5000) {
		bf.style.left = 0 + 'px';
	}
	if (newLeft > 0) {
		bf.style.left = -5000 + 'px';
	}
}
var index = 1;
prev.onclick = function() {
	index -= 1;
	if (index < 1) {
		index = 6;
	}
	for (var i=0;i<video.length;i++){
		if(!video[i].paused){
			video[i].pause();
		}
	}
	dhbt.innerHTML=sptp[index-1].title;
	video[index-1].load();
	video[index-1].play();
	animate(1000);
}
next.onclick = function() {
	index += 1;
	if (index > 6) {
		index = 1;
	}
	for (var i=0;i<video.length;i++){
		if(!video[i].paused){
			video[i].pause();
		}
	}
	dhbt.innerHTML=sptp[index-1].title;
	video[index-1].load();
	video[index-1].play();
	animate(-1000);
}
for (var  i = 0; i < sptp.length; i++) {
	sptp[i].onclick = function() {
		sq.style.display = "block";
		var zdysx = parseInt(this.getAttribute('index'));
		var offset = 1000 * (index - zdysx);
		index = zdysx;
		dhbt.innerHTML=sptp[index-1].title;
		video[index-1].load();
		video[index-1].play();
		animate(offset);
	}
}
