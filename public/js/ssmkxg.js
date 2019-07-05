var ssmk = document.getElementsByClassName("ssmk");
for (let i = 0; i < ssmk.length; i++) {
	ssmk[i].lastElementChild.lastElementChild.style.lineHeight="30px"
	ssmk[i].onmouseover = function() {
		for (var j = 0; j< ssmk.length; j++) {
			if (ssmk[j].className == 'ssmk xg') {
				ssmk[j].className = 'ssmk';
			}
		}
		if (ssmk[i].className == "ssmk") {
			ssmk[i].className += " xg";
		} else {
			ssmk[i].className = "ssmk";
		}
	}
}

