window.onload = function() {

	//Menu interactivity
	var menu = document.getElementById('menu');
	var expanded = document.getElementById('nav-expanded');

	menu.addEventListener('click', function() {
		if (expanded.style.display == 'block') {
			expanded.style.display = 'none';
		}

		else {
			expanded.style.display = 'block';
		}
	});
};