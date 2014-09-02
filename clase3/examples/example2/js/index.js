var dibujo, lienzo;
function inicio (){
    dibujo = document.getElementById("dibujito");
    lienzo = dibujo.getContext("2d");

    dibujarMariposa(lienzo);
    
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
    var ancho = 300, alto = 300;
    var linea;
    var anchoLinea = 30;
    var limX = ancho / anchoLinea;
    var limY = alto / anchoLinea;
    
    for (linea = 0; linea <= limX; linea ++){
        l.beginPath();
        l.strokeStyle = "#AAA";
        l.moveTo(linea * anchoLinea, 0);
        l.lineTo(linea * anchoLinea, 300);
        l.closePath();
        l.stroke();
    }
    
    for (linea = 0; linea <= limY; linea ++){
        l.beginPath();
        l.strokeStyle = "#AAA";
        l.moveTo(0, linea * anchoLinea);
        l.lineTo(300, linea * anchoLinea);
        l.closePath();
        l.stroke();
    }
}

function dibujarMariposa(l){
    var ancho = 300, alto = 300;
    var lineas;
    var anchoLinea = 10;
    var limX = ancho / anchoLinea;
    var limY = alto / anchoLinea;
    for (linea = 0; linea <= limX; linea ++){
        l.beginPath();
        l.strokeStyle = "#AAA";
        l.moveTo(0, linea * 10);
        l.lineTo(linea * 10, 300);
        l.closePath();
        l.stroke();
    }
    for (linea = 0; linea <= limY; linea ++){
        l.beginPath();
        l.strokeStyle = "#AAA";
        l.moveTo(linea * 10, 0);
        l.lineTo(300, linea * 10);
        l.closePath();
        l.stroke();
    }
    
    for (linea = 0; linea <= limX; linea ++){
        l.beginPath();
        l.strokeStyle = "#AAA";
        l.moveTo(linea * 10, 300);
        l.lineTo(300, (300 - (linea * 10)));
        l.closePath();
        l.stroke();
    }
    for (linea = 0; linea <= limX; linea ++){
        l.beginPath();
        l.strokeStyle = "#AAA";
        l.moveTo((300 - (linea * 10)), 0);
        l.lineTo(0 , (linea * 10));
        l.closePath();
        l.stroke();
    }

}