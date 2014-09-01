$(document).ready(function(){

	$('.option').click(function(){

		var name = $(this).attr('id');
		var src = "images/" + name + ".png";
		var contWi = $('.container').innerWidth();
		var ani = (contWi / 100) * 8.33;
		
		$('#select-usr').attr('src', src);
		$('#select-usr').attr('alt', name);
		$('#select-usr').attr('title', name);
		$(".result-usr").show();
		$(".result-usr").animate({left: ani+'px',opacity:'1'},"slow");

		var num = Math.floor((Math.random() * 5) + 1);
		var gamer = $(this).attr('data-id');

		setTimeout(function() {
			
			var img = $('a[data-id="'+num+'"]').attr('id');
			var src = "images/" + img + ".png";

			var contWi = $('.container').innerWidth();
			var ani = (contWi / 100) * 8.33;

			$('#select-js').attr('src', src);
			$('#select-js').attr('alt', img);
			$('#select-js').attr('title', img);
			$(".result-js").show();
			$(".result-js").animate({left: ani+'px',opacity:'1'},"slow");
      
		}, 1000);
		
		setTimeout(function() {
			var resultado = resultGame(gamer, num);
			$('#result-game').append(resultado);
			$('#anchor').show();
		}, 2000);

	});


});


function resultGame(gamer, js){
	console.info(js);
	console.info(gamer);
	if( ((gamer == 1) && (js == 3 || js == 4)) || 
		((gamer == 2) && (js == 1 || js == 5)) || 
		((gamer == 3) && (js == 4 || js == 2)) ||
		((gamer == 4) && (js == 5 || js == 2)) ||
		((gamer == 5) && (js == 1 || js == 3))
	){
		var result = "You are a Winner" ;
	}else if (gamer == js){
		var result = "It's a tie";
	}else{
		var result = "You are a Loser";
	}
	return result;
}
