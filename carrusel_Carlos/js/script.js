
let intervalo;
let i=2;
let imagen = document.querySelector("#foto");
window.onload=reproducir();

function cambiar_foto(){
	
	switch(i){
		case 1:
			imagen.setAttribute("src","img/1.png");
			i++;
			break;
		case 2:
			imagen.setAttribute("src","img/2.png");
			i++;
			break;
		case 3:
			imagen.setAttribute("src","img/3.png");
			i++;
			break;
		case 4:
			imagen.setAttribute("src","img/4.png")
			i++;
			break;
	}

	if(i==5){
		i=1;
	}
}

function reproducir(){
	intervalo = setInterval(cambiar_foto,2000);
}

function detener(){
	clearInterval(intervalo);
}