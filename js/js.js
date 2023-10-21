		$(document).ready(function() {
			$('.box-calculation').attr('disabled', 'true'); 
			$('.box-result').attr('disabled', 'true'); 
			$('.box-button button.times').attr('disabled', 'true'); 
			$('.box-button button.divide').attr('disabled', 'true'); 
			$('.box-button button.equal').attr('disabled', 'true'); 
		});

		$('.box-button button.number').on('click', function() {
			$char = $(this).html(); 
			$value_calculation = $('.box-calculation').val(); 
			$('.box-calculation').val($value_calculation + $char); 
			$('.box-button button.operation').removeAttr('disabled'); 
			$('.box-button button.equal').removeAttr('disabled');
		});

		$('.box-button button.dot').on('click', function() {
			$char = $(this).html(); 
			$value_calculation = $('.box-calculation').val(); 
			$('.box-calculation').val($value_calculation + $char); 
			$('.box-button button.operation').attr('disabled', 'true'); 
			$(this).attr('disabled', 'true'); 
		});

		$('.box-button button.refresh').on('click', function() {
			$('.box-calculation').val(''); 
			$('.box-result').val(''); 
		});

		$('.box-button button.del').on('click', function() {
			$string = $('.box-calculation').val(); 
			$('.box-calculation').val($string.substring(0, $string.length - 1)); 
		});

		$('.box-button button.operation').on('click', function() {
			$char = $(this).html();
			$value_calculation = $('.box-calculation').val(); 
			$('.box-calculation').val($value_calculation + $char); 
			$('.box-button button.times').attr('disabled', 'true'); 
			$('.box-button button.divide').attr('disabled', 'true'); 
			$('.box-button button.dot').removeAttr('disabled');
		});

		$('.box-button button.equal').on('click', function() {
			$result = $('.box-calculation').val(); 
			$('.box-result').val(eval($result)); 
		});