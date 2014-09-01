function explosion(){
	alert('BOOM!!');	
	document.write('<h1>Elegiste un area minada :(</h1>');
}
function ganaste(){
	document.write('<p>Eres un ganador</p>');
}

var campo = [	[ 1 , 0 , 0] ,
				[ 0 , 1 , 0] ,
				[ 1 , 1 , 1]	];

var textos = ['Cesped','Bomba'];

var x, y;

alert("Estás en un campo minado\n" +
      "Elije una posición entre el 0 y el 2 para X y para Y");

x = prompt("Pocisión en X? (entre 0 y 2)");
y = prompt("Pocisión en Y? (entre 0 y 2)")

if(x <= 2 && y <= 2)
{
    var posicion = campo[x][y];
    document.write("Elegiste " + textos[posicion] + "<br />");
    if(posicion == 1)
    {
        explosion();
    }
    else
    {
        ganaste();
    }
}
else
{
    document.write("¡Te saliste del campo!");
    explosion();
}


