const splash = document.getElementById("splash");
const main = document.getElementById("main");
const header = document.getElementById("header");

window.onload = () => {
	setTimeout(() => {
		postSplash();
	}, 1000);
}

postSplash = () => {
	splash.style.display = "none";
	main.style.display = "block";
	header.style.display = "block";
}