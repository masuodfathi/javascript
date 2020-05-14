var videoLink = document.querySelector("video.vjs-tech").getAttribute('src');
CreateDownload(videoLink);
function CreateDownload(link) {
		let a = document.createElement("a");
		a.setAttribute("id","Download-udemy");
		a.setAttribute("href",link);
		a.setAttribute("target","_blank");
		let n = document.createElement("LI");
		let t = document.createTextNode("Download");
		
		n.appendChild(a);
		a.appendChild(t);
		document.querySelector("ul.nav-slide").appendChild(a);
	}