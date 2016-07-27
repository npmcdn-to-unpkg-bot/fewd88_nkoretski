$(document).ready(function () {

$('#myform').submit(function(event){
	$('#name-input').empty();
	var name = $('#name-input').val("")
	$('#target').text($('#name-input').val();
	console.log(event.type);
	event.preventDefault();

});

})
