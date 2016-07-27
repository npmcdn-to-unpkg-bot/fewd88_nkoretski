



document.getElementById('click-me').onclick =calculate;

function calculate(){

	var age = parseInt(document.getElementById('age').value);
	var maxAge = parseInt(document.getElementById('max-age').value);
	var item = document.getElementById('item').value;
	var numPerDay = parseInt(document.getElementById('num-per-day').value);

	var solution = (maxAge - age) * 365 * numPerDay;

	document.getElementById('solution').innerHTML = solution;
	document.getElementById('drink').innerHTML = item;


}	
 