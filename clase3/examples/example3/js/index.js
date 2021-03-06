var dibujo, lienzo;
function inicio (){

    numLineas = document.getElementById("lineas");
    btn = document.getElementById("trazar-linea");
    dibujo = document.getElementById("dibujito");
    lienzo = dibujo.getContext("2d");

    btn.addEventListener("click", dibujarGrilla)


    
    
    //trazo nuevo
    lienzo.beginPath();
    lienzo.strokeStyle = "#00F";
    //x,y = coordenadas del centro del circulo
    //arc(x,y,radio del circulo, radianes del circulo)
    lienzo.arc(150,150,100, (Math.PI * 2), false);
    lienzo.closePath();
    lienzo.stroke();
}


function dibujarGrilla(l){
    var l = lienzo;
    var rayas = Number(numLineas.value)


    var ancho = 300, alto = 300;
    var linea;
    var anchoLinea = ancho / rayas;
    var limX = ancho / anchoLinea;
    var limY = alto / anchoLinea;
    for (linea = 0; linea <= limX; linea ++){
        
        punto = (linea * anchoLinea) + 0.5;
        l.beginPath();
        l.strokeStyle = "#AAA";
        l.moveTo(punto, 0.5);
        l.lineTo(punto, ancho-0.5);
        l.closePath();
        l.stroke();
    }
    for (linea = 0; linea <= limY; linea ++){

        punto = (linea * anchoLinea) + 0.5;
        l.beginPath();
        l.strokeStyle = "#AAA";
        l.moveTo(0.5, punto);
        l.lineTo(alto - 0.5, punto);
        l.closePath();
        l.stroke();
    }
}
