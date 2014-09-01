var dibujo, lienzo;
function inicio (){
    dibujo = document.getElementById("dibujito");
    lienzo = dibujo.getContext("2d");
    
    //hacer un borde dibujando un cuadro
    lienzo.moveTo(0,0);
    lienzo.lineTo(300,0);
    lienzo.lineTo(300,300);
    lienzo.lineTo(0,300);
    lienzo.lineTo(0,0);
    lienzo.stroke();
    
    lienzo.strokeStyle = "#F00";
    lienzo.stroke();
    
    //trazo con nuevo color
    lienzo.beginPath();
    lienzo.strokeStyle = "#00F";
    //x,y = coordenadas del centro del circulo
    //arc(x,y,radio del circulo, radianes del circulo)
    lienzo.arc(150,150,100, (Math.PI * 2), false);
    lienzo.closePath();
    lienzo.stroke();
    
    
    console.log(lienzo);
}