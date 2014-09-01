function aleatorio(min, max){
    var numero = Math.floor((Math.random() * max) + min);
    return numero;
}
function resultado(opcionUsuario, opcionMaquina){
    if( ((opcionUsuario == 0) && (opcionMaquina == 2)) || ((opcionUsuario == 1) && (opcionMaquina == 0)) || ((opcionUsuario == 2) && (opcionMaquina == 1)) ){
        var res = "Ganaste!";
    }else if((opcionUsuario == opcionMaquina)){
        var res = "Empate!";
    }else if((opcionUsuario > 2)){
        var res = "No seleccionaste una opcion valida!";
    }else {
        var res = "Perdiste!";
    }
    return res;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ['Piedra', 'Papel', 'Tijera'];

var opcionUsuario;
var opcionMaquina = aleatorio(0, 2);

opcionUsuario = prompt("¿Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2");

if(opcionUsuario < 3){
    alert('Has elegido '+ opciones[opcionUsuario]);
    alert('Javascript ha elegido '+ opciones[opcionMaquina]);
}
var result = resultado(opcionUsuario, opcionMaquina);

alert(result);
