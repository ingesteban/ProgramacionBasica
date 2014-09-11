var tablero, direccion;

var teclas = {
	up: 38,
	down : 40,
	left: 37,
	right:39
};

var fondo ={
	imagenUrl: "images/fondo.png",
	imagenOK: false
};

var tifis = {
	x:100,
	y:100,
	frenteURL: "images/diana-frente.png",
	frenteOK: false,
	atrasURL: "images/diana-atras.png",
	atrasOK: false,
	derURL: "images/diana-der.png",
	derOK: false,
	izqURL: "images/diana-izq.png",
	izqOK: false,

	velocidad: 50
};

var liz = {
	x:400,
	y:200,
	lizURL: "images/liz.png",
	lizOK: false,
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

	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;

	tifis.izq = new Image();
	tifis.izq.src = tifis.izqURL;
	tifis.izq.onload = confirmarIzq;

	tifis.der = new Image();
	tifis.der.src = tifis.derURL;
	tifis.der.onload = confirmarDer;

	liz.liz = new Image();
	liz.liz.src = liz.lizURL;
	liz.liz.onload = confirmarLiz;

	document.addEventListener('keydown', teclado);

}

function teclado(datos){

	var codigo = datos.keyCode;

	if(codigo == teclas.up){
		tifis.y -= tifis.velocidad;
	}
	if(codigo == teclas.down){
		if(tifis.y<300)
        {
            tifis.y += tifis.velocidad;
        }
	}
	if(codigo == teclas.left){
		tifis.x -= tifis.velocidad;
	}
	if(codigo == teclas.right){
		tifis.x += tifis.velocidad;
	}

	direccion = codigo;

	dibujar();
}

function confirmarFondo(){
	fondo.imagenOK = true;
	dibujar();
}
function confirmarFrente(){
	tifis.frenteOK = true;
	dibujar();	
}
function confirmarAtras(){
	tifis.atrasOK = true;
	dibujar();	
}
function confirmarIzq(){
	tifis.izqOK = true;
	dibujar();	
}
function confirmarDer(){
	tifis.derOK = true;
	dibujar();	
}
function confirmarLiz(){
	liz.lizOK = true;
	dibujar();	
}

function dibujar()
{
	var tifiDibujo = tifis.frente;
	if(fondo.imagenOK == true){
		tablero.drawImage(fondo.imagen,0,0);
	}
	if(tifis.frenteOK && tifis.atrasOK && tifis.izqOK && tifis.derOK){
		if(direccion == teclas.up){
			tifiDibujo = tifis.atras;
		}
		if(direccion == teclas.down){
			tifiDibujo = tifis.frente;
		}
		if(direccion == teclas.left){
			tifiDibujo = tifis.izq;
		}
		if(direccion == teclas.right){
			tifiDibujo = tifis.der;
		}

		tablero.drawImage(tifiDibujo,tifis.x,tifis.y);
	}
	if(liz.lizOK == true){
		tablero.drawImage(liz.liz,liz.x,liz.y);
	}
}

