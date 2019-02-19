let port = document.getElementsByClassName("card");
		for(let i = 0; i < port.length; i++){
			port[i].addEventListener("click", function(){
				let el = port[0];
				while(el){
					if(el.tagName === "FIGURE"){
						el.classList.remove('active');
					}
					el = el.nextSibling;
				}
				this.classList.add("active");
		})
}



	



	





