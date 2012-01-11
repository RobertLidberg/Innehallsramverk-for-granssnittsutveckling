$(document).ready(function(){
	$('#html').keypress(function() {
		$('#live').html($(this).val());
	});
});