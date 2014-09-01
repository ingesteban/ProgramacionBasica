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


function Pokemon(n, v, a, g){
	this.grito = g;
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function(){
		alert(this.grito)
	}
}

var pikachu = new Pokemon("Pikachu",100,55);
var rattata = new Pokemon("Rattata",40,13);


function inicio(nombre,vida,ataque,grito)
{
    var pokemon = new Pokemon(nombre,vida,ataque,grito);
    nombrePokemon.textContent = pokemon.nombre;
    
    var img = document.createElement('img');
    img.src = 'images/'+pokemon.nombre.toLowerCase()+'.png';
    img.className = "image-pokemon";
        
    var datos = "El pokemon se llama "+pokemon.nombre+", tiene una vida de "+pokemon.vida+", un ataque de "+pokemon.ataque+" y su grito es "+pokemon.grito;
    
    console.log(datos);
    
    imgPokemon.appendChild(img);
    datosPokemon.textContent = datos;
}


