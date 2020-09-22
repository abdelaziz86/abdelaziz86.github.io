var x=8 ; 
console.log(x) ; 
function overcarousel(image) {
	document.getElementById("bgcarousel").style.backgroundColor = "rgba(0,0,0,0.4) ";  
	document.getElementById("bgcarousel1").style.backgroundColor = "rgba(0,0,0,0.4) ";  
	document.getElementById("bgcarousel2").style.backgroundColor = "rgba(0,0,0,0.4) "; 
	var image1 = image.nextElementSibling ; 
 	var image2 = image1.children ; 
 	image2[0].className ="textcarousel1_hover"  ; 
 	image2[1].className ="textcarousel2_hover" ; 
 	console.log(document.getElementById("imge").style.padding) ; 

  
}


function leavecarousel(image) {
	document.getElementById("bgcarousel").style.backgroundColor = "rgba(0,0,0,0.7)"; 
	document.getElementById("bgcarousel1").style.backgroundColor = "rgba(0,0,0,0.7) ";  
	document.getElementById("bgcarousel2").style.backgroundColor = "rgba(0,0,0,0.7) ";  
 
	var image1 = image.nextElementSibling ; 
 	var image2 = image1.children ; 
 	image2[0].className ="textcarousel1"  ; 
 	image2[1].className ="textcarousel2" ; 

  
}

function selecttab (tab) {
	document.getElementById("jus").style.display = "none" ; 
	document.getElementById("cafe").style.display = "none" ; 
	document.getElementById("boisson").style.display = "none" ; 
	document.getElementById("thes").style.display = "none" ; 
	document.getElementById("chicha").style.display = "none" ;

	document.getElementById("tab11").classList.remove("active");
	document.getElementById("tab22").classList.remove("active");
	document.getElementById("tab33").classList.remove("active");
	document.getElementById("tab44").classList.remove("active");
	document.getElementById("tab55").classList.remove("active");


	if ((tab.id=="tab2")||(tab.id=="navjus")) {
		document.getElementById("jus").style.display = "block" ;
		document.getElementById("tab22").classList.add("active");
	} else if ((tab.id=="tab1")||(tab.id=="navcafe")) {
		document.getElementById("cafe").style.display = "block" ;
		document.getElementById("tab11").classList.add("active");
	} else if ((tab.id=="tab3")||(tab.id=="navboisson")) {
		document.getElementById("boisson").style.display = "block" ;
		document.getElementById("tab33").classList.add("active");
	} else if ((tab.id=="tab4")||(tab.id=="navthe")) {
		document.getElementById("thes").style.display = "block" ;
		document.getElementById("tab44").classList.add("active");
	} else if ((tab.id=="tab5")||(tab.id=="navchicha")) {
		document.getElementById("chicha").style.display = "block" ;
		document.getElementById("tab55").classList.add("active");
	}
	/*.style.display = "block" ;*/ 
}