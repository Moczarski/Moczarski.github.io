		let delay;
		
		function loading(){
			delay = setTimeout(showPage, 1000);
		}
		
		function showPage() {
			document.getElementById("loader").style.display = "none";
			document.getElementById("page").style.display = "flex";
			
			AOS.init({
				duration: 2000,
				once: true,
			});
		}