shown = false;
function showSidebar() {
	if (shown) {
		document.getElementById("sidebar").style.left = "100%";
		document.getElementById("menu").style.transform = "rotate(0deg)";
		shown = false;
	} else {
		document.getElementById("sidebar").style.left = document.querySelector("body").offsetWidth - document.getElementById("sidebar").offsetWidth;
		document.getElementById("menu").style.transform = "rotate(90deg)";
		shown = true;
	}
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("menu").addEventListener("click", showSidebar);
}, false);