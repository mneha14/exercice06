
	// on cible l'élément « path » que l'on veut animer 
	var formes = document.querySelectorAll("#monSVG path");
console.log(formes.length);
	var longeurTableau = new Array();
	// la longueur du chemin «path»
	for(i=0; i<formes.length;i++){

	var longeur = formes[i].getTotalLength();

	longeurTableau[i] = longeur;

	// La longueur du tracé
	// https://developer.mozilla.org/en/docs/Web/SVG/Attribute/stroke-dasharray

	formes[i].style.strokeDasharray = longeur;
	

	// On fait disparaître le tracé en appliquant la propriété css strokeDashoffset sur toute la longueur du chemin
	formes[i].style.strokeDashoffset = longeur;

	}

	

	// extraire la fraction du déplacement de la barre de défilement et  ajusté le tracé
	window.addEventListener("scroll", maTrace);

	function maTrace() {

		/*console.log('scrollTop de body = ' + document.body.scrollTop)
		console.log('scrollTop de documentElement = ' + document.documentElement.scrollTop)
		console.log('scrollHeight de documentElement = ' + document.documentElement.scrollHeight)	
		console.log('clientHeight de documentElement = ' + document.documentElement.clientHeight)*/			

https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight


console.log(formes.length);
	  
	  for(i=0; i<formes.length;i++){

		var fractionDuScroll = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

	  	var trace = longeurTableau[i] * fractionDuScroll;

	  // tracé selon la fraction de «scroll»
	  formes[i].style.strokeDashoffset = longeurTableau[i] - trace ;

	  }

	  
	}
	