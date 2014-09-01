document.write("Hola mamá<br>");
var pi = 3.141592654;
pi = Math.floor(pi);
document.write(pi+"<br>")

var maxima;
maxima = Math.max(5,10,11,15,21,22,25,28,39);
document.write(maxima);

function mostrar(pos){
    document.write(pos.coords.latitude + "," + pos.coords.longitude);

}

var pos = navigator.geolocation.getCurrentPosition( mostrar );

