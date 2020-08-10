function loading(){
	
	setTimeout(showPage, 2000);
	
}

function showPage() {
	
	document.getElementById("loader").style.display = "none";
	document.getElementById("page").style.display = "flex";
	
	AOS.init({
		
		duration: 1000,
		once: true,
		
	});
	
}