$(document).ready(function(){

	$('#open').on('click', (e) => {
		$('#open').hide();
		$('#close').show();

		$('.fundacion-logo').hide();
		$('.fundacion-nav ul').removeClass().addClass('nav-menu');
	})

	$('#close').on('click', (e) => {
		$('#close').hide();
		$('#open').show();

		$('.fundacion-logo').show();
		$('.fundacion-nav ul').removeClass().addClass('hide');
	})
})