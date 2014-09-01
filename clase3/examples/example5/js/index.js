//function Pokemon(nombrePoke, vidaPoke, ataquePoke){
//	var estructuraPokemon = {
//		nombre:nombrePoke,
//		vida: vidaPoke,
//		ataque: ataquePoke,
//		datos:{
//			tipo:"Tierra",
//			debilidad:"Fuego"
//		}
//	}
//	return estructuraPokemon;
//}

//var pikachu = Pokemon("Pikachu",100,55);
//var bulbasaur = Pokemon("Bulbasaur",90,50);


//console.log(pikachu);


function Pokemon(n, v, a){
	this.grito = "Pika!";
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function(){
		alert(this.grito)
	}
}

var pikachu = new Pokemon("Pikachu",100,55);
var rattata = new Pokemon("Rattata",40,13);


function inicio()
{
    var rattata = new Pokemon("Rattata", 40, 2);
    rattata.vida = rattata.vida - 13;
    nombrePokemon.textContent = rattata.nombre;
}
