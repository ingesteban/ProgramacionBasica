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
	x:0,
	y:0,
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

var gameover = {
	x:0,
	y:0,
	gameURL: "images/gameover.png",
	gameOK: false,
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

	gameover.img = new Image();
	gameover.img.src = gameover.gameURL;
	gameover.img.onload = confirmarGameover;

	document.addEventListener('keydown', teclado);

}

function teclado(datos){

	var codigo = datos.keyCode;
	var muerte = muere(tifis.x, tifis.y);
	if(muerte == true){
		gameOver();
	}else{

		if(codigo == teclas.up){
			if(bordes(tifis.y, tifis.x, "menos", "y") == true){
				tifis.y -= tifis.velocidad;
			}
		}
		if(codigo == teclas.down){
			if(bordes(tifis.y, tifis.x, "mas", "y") == true){
	        	tifis.y += tifis.velocidad;
	    	}
		}
		if(codigo == teclas.left){
			if(bordes(tifis.x, tifis.y, "menos", "x") == true){
				tifis.x -= tifis.velocidad;
			}
		}
		if(codigo == teclas.right){
			if(bordes(tifis.x, tifis.y, "mas", "x") == true){
				tifis.x += tifis.velocidad;
			}
		}

		direccion = codigo;
		console.info(muerte);
	
		var muerte = muere(tifis.x, tifis.y);	
	}
	
	if(muerte == true){
		gameOver();
	}else{
		dibujar();
	}

}

function bordes(coord, coor, code, type){
	if(code == "mas"){
		var coorde = coord + 50;
	}else{
		var coorde = coord - 50;
	}
	if (coorde > 451 ||
		coorde < 0  ||
		(coorde == 200 && type == "x" && coor < 249 ) ||
		(coorde == 200 && type == "y" && (coor == 200 || coor <= 100 ))  ||
		(coorde == 100 && type == "x" && coor == 200 )  ||
		(coorde == 350 && type == "y" && coor >= 150 )  ||
		(coorde == 150 && type == "x" && coor == 350 )
		) {
		return false
	}else{
		return true
	}
}
function muere(x, y){
	if (x == 400 && y == 200)
	{
		return true
	}else{
		return false
	}
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
function confirmarGameover(){
	gameover.gameOK = true;
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
		console.info(tablero);

		tablero.drawImage(tifiDibujo,tifis.x,tifis.y);

		console.info(tifiDibujo);
	}
	if(liz.lizOK == true){
		tablero.drawImage(liz.liz,liz.x,liz.y);
	}
}
function gameOver(){
	if(gameover.gameOK == true){
		tablero.drawImage(gameover.img,gameover.x,gameover.y);
	}
}

