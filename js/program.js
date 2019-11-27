this.logueado = false;

$("#entrar").click(function(){
	if($("#usuario").val() == "fernando" && $("#password").val() == "1234"){
		logueado = true;
		if(logueado == true){
			window.location = "menu.html";
		}
		
		}else{
			Swal.fire('Error');
	}
});
$("#galeria").click(function() {
	// body...
	window.location = "galeria.html";
});
$("#pdf").click(function() {
	// body...
	window.location = "pdf.html";
});
$("#Salir").click(function() {
	// body...
	window.location = "index.html";
});
$("#menu").click(function() {
	// body...
	window.location = "menu.html";
});
$("#pregunta").click(function() {
	// body...
	window.location = "pregunta.html";
});


window .addEventListener('load',function(){
	$('.container').fadeIn(100);
});

$(document).ready(function () {
	// body...
	$('datepicker').datepicker();
});

$(document).ready(function () {
	// body...
	$('select').formSelect();
});

$('#iniciar').click(function () {
	// body...
	$('#p1').slideDown();
	$('#iniciar').hide();
});

$('#siguiente').click(function () {
	// body...
	if ($('#p1').show()) {
		$('#p1').hide();
	}
	if ($('#p2').hide()) {
		$('#p2').show();
	}
	if ($('#p3').hide()) {
		$('#p3').show();
	}

});