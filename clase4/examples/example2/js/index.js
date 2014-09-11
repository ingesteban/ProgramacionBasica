var tablero;
var fondo ={
	imagenUrl: "images/fondo.png",
	imagenOK: false
};

var tifis = {
	x:100,
	y:100,
	frenteURL: "images/diana-frente.png",
	frenteOK: false,
};

function inicio()
{
	var canvas = document.getElementById('campo');
	tablero = canvas.getContext('2d');
	
	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenUrl;
	fondo.imagen.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	var mover = document.getElementById('mover');
	mover.addEventListener('click', movimiento);
}

function confirmarFondo(){
	fondo.imagenOK = true;
	dibujar();
}
function confirmarFrente(){
	tifis.frenteOK = true;
	dibujar();	
}

function dibujar()
{
	if(fondo.imagenOK == true){
		tablero.drawImage(fondo.imagen,0,0);
	}
	if(tifis.frenteOK == true){
		tablero.drawImage(tifis.frente,tifis.x,tifis.y);
	}
}

function movimiento(){
	tifis.x += 50;
	dibujar();
}