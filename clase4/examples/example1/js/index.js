var tablero;
var fondo ={
	imagenUrl: "images/fondo.png"
} ;

function inicio()
{
	var canvas = document.getElementById('campo');
	tablero = canvas.getContext('2d');
	
	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenUrl;
	fondo.imagen.onload = dibujarFondo;
	console.log(fondo);
}
function dibujarFondo()
{
	tablero.drawImage(fondo.imagen,0,0);
}