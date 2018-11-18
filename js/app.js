var acc = document.getElementsByClassName('menu-acc__item');

for (var i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function() {
		if (!(this.classList.contains('menu-acc__item_active'))) {
			for (var i = 0; i < acc.length; i++) {
				acc[i].classList.remove('menu-acc__item_active');
			}
			this.classList.add('menu-acc__item_active');
		}
		else if (this.classList.contains('menu-acc__item_active')) {
			for (var i = 0; i < acc.length; i++) {
				acc[i].classList.remove('menu-acc__item_active');
			}
		}
	})
}

var hamburger = document.getElementById('mobile');
var open = document.getElementById('nav');
var style = open.style;

hamburger.addEventListener('click', function() {
	style.display = 'flex';
	hamburger.style.display = 'none';
	crossicon.style.display = 'flex';
	document.getElementById('header').style.position = 'fixed';
})

var crossicon = document.getElementById('cross');

crossicon.addEventListener('click', function() {
	crossicon.style.display = 'none';
	style.display = 'none';
	hamburger.style.display = 'flex';
	document.getElementById('header').style.position = '';
})