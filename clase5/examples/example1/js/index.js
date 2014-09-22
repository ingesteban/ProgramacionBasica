//forma de no hacerlo
//var perro ={
//	agilidad: 50, 
//	fuerza: 100,
//	limpieza: false, 
//	logevidad: 14,
//	amor: true,
//	voz: function(){
//		alert("guau");
//	}
//
//};
//perro.voz();


//forma de hacerlo
//Clase: Definicion del objeto
var nombre = "Roko";

var Mascota = function(n, v)
{
	this.nombre = n	;
	this.voz = v;
}

Mascota.prototype.hablar = function ()
{
	alert(this.nombre + " dice: " + this.voz);
}

var perro = new Mascota("roco", 'guau');
var gato = new Mascota("misifu", 'Los humanos son mis esclavos!');

perro.hablar();
gato.hablar();