var lienzo;

function inicio()
{
    var conten = document.getElementById('lienzo');
    lienzo = conten.getContext("2d");

    hacerX();
    hacerCirculo();
}

function hacerX(){

    var altoLienzo = lienzo.canvas.height;
    var anchoLienzo = lienzo.canvas.width;
    var espacioLineas = 30;
    var numLineas = anchoLienzo /  espacioLineas;
    var flag = true;
    var punto2 = 0;

    for(i = 1; i <= numLineas; i++){
        var punto = espacioLineas * i;
        lienzo.beginPath();
        lienzo.moveTo(punto2, punto);
        lienzo.lineTo(punto, punto2);
        lienzo.strokeStyle = "#AAA";
        lienzo.lineWidth = 2;
        lienzo.closePath();
        lienzo.stroke();
        if((i == numLineas) && (flag == true)){
            var punto2 = 300;
            var flag = false;
            i = 0;
        }
    }

    var flag = true;
    var punto3 = 0;
    var punto4 = 300;

    for(i = 1; i <= numLineas; i++){
        var punto1 = espacioLineas * i;
        var punto2 = anchoLienzo - punto1;
        lienzo.beginPath();
        lienzo.moveTo(punto2, punto3);
        lienzo.lineTo(punto4, punto1);
        lienzo.strokeStyle = "#AAA";
        lienzo.lineWidth = 2;
        lienzo.closePath();
        lienzo.stroke();
        if((i == numLineas) && (flag == true)){
            var punto3 = 300;
            var punto4 = 0;
            var flag = false;
            i = 0;
        }
    }    
}

function hacerCirculo(){
    lienzo.beginPath();
    lienzo.arc(150,150, 100, (Math.PI * 2), false );
    lienzo.strokeStyle = "#00F";
    lienzo.fillStyle = "#F00";
    lienzo.fill();
    lienzo.lineWidth = 7;
    lienzo.closePath();
    lienzo.stroke();
}


