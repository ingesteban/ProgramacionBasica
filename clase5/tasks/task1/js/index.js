var palabra = "Tamarindo";
var hombre;

// Declaración de la calse ahoracado 
var Ahorcado = function(con)
{
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;


	this.fondoUrl = "images/fondo.png"; 
	this.fondoOK = false;
	this.fondoImg = new Image();
	this.fondoImg.src = this.fondoUrl;
	this.fondoImg.onload = this.confirmar();

	
}

Ahorcado.prototype.confirmar = function(){
	console.info('asd');
	this.fondoOK = true;
	this.dibujar();	
}

Ahorcado.prototype.dibujar = function()
{

	var dibujo = this.contexto;

	//Dibujar el poste
	dibujo.drawImage(this.fondoImg,0,0);

	console.info(dibujo.drawImage(this.fondoImg,0,0));
	console.info(dibujo);
	console.info(this.fondoImg);
	console.info(this.fondoOK);
	if(this.intentos > 0)
	{
		//intentos = 1 -> dibujar rostro
		//dibujo.beginPath();
		//dibujo.arc(150, 140, 40, 0, Math.PI * 2, false);
		//dibujo.strokeStyle = "red";
		//dibujo.lineWidth = 5;
		//dibujo.stroke();
		//dibujo.closePath();

		if(this.intentos > 1){
			//intentos = 2 -> dibujar torzo
			//dibujo.beginPath();
			//dibujo.moveTo(150,180);
			//dibujo.lineTo(150,250);
			//dibujo.strokeStyle = "red";
			//dibujo.lineWidth = 5;
			//dibujo.stroke();
			//dibujo.closePath();

			if(this.intentos > 2){
				//intentos = 3 -> dibujar brazos
				//dibujo.beginPath();
				//dibujo.moveTo(120,220);
				//dibujo.lineTo(150,180);
				//dibujo.lineTo(180,220);
				//dibujo.strokeStyle = "red";
				//dibujo.lineWidth = 5;
				//dibujo.stroke();
				//dibujo.closePath();

				if(this.intentos > 3){
					//intentos = 4 -> dibujar piernas
					//dibujo.beginPath();
					//dibujo.moveTo(120,290);
					//dibujo.lineTo(150,250);
					//dibujo.lineTo(180,290);
					//dibujo.strokeStyle = "red";
					//dibujo.lineWidth = 5;
					//dibujo.stroke();
					//dibujo.closePath();

					if(this.intentos > 4){
						//intentos = 5 -> dibujar ojos muertos
						//dibujo.beginPath();
						//Ojo Izquierdo
						//dibujo.moveTo(125,120);
						//dibujo.lineTo(145,145);
						//dibujo.moveTo(145,120);
						//dibujo.lineTo(125,145);
						//Ojo Derecho
						//dibujo.moveTo(155,120);
						//dibujo.lineTo(175,145);
						//dibujo.moveTo(175,120);
						//dibujo.lineTo(155,145);
						//dibujo.strokeStyle = "blue";
						//dibujo.lineWidth = 5;
						//dibujo.stroke();
						//dibujo.closePath();
					}
				}
			}
		}
	}
}


Ahorcado.prototype.trazar = function(){
	this.intentos ++;
	if(this.intentos >= this.maximo){
		this.vivo = false;
	}
	this.dibujar();

}

function iniciar()
{
	var canvas = document.getElementById('c');
	canvas.width = 900;
	canvas.height = 800;
	var contexto = canvas.getContext('2d');	
	hombre = new Ahorcado(contexto);


}


