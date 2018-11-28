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

var team = document.getElementsByClassName('accordeon__item');

for (var i = 0; i < team.length; i++) {
	team[i].addEventListener('click', function(e) {
		e.preventDefault();
		if (!(this.classList.contains('accordeon__item_active'))) {
			for (var i = 0; i < team.length; i++) {
				team[i].classList.remove('accordeon__item_active');
			}
			this.classList.add('accordeon__item_active');
		}
		else if (this.classList.contains('accordeon__item_active')) {
			for (var i = 0; i < team.length; i++) {
				team[i].classList.remove('accordeon__item_active');
			}
		}
	})
}

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const slider = document.querySelector("#slider");

const minRight = 0;
const maxRight = 235;
const step = 58.75;
let currentRight = 0;

slider.style.right = currentRight;

right.addEventListener("click", function(e) {
	e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    slider.style.right = currentRight + "rem";
  } else {
		currentRight = 0;
		slider.style.right = 0;
	}
});

left.addEventListener("click", function(e) {
	e.preventDefault();
  if (currentRight > minRight) {
    currentRight -= step;
    slider.style.right = currentRight + "rem";
  } else {
		currentRight = maxRight;
		slider.style.right = currentRight + "rem";
	}
});

var openButton = document.querySelectorAll('.reviews__hover_button-mobile');
var overlay = document.querySelector('.reviews-popup');
var close = document.querySelector('.reviews-popup__close');

for (var i = 0; i < openButton.length; i++) {
	openButton[i].addEventListener('click', openOverlay);
}

function openOverlay(e) {
	e.preventDefault();
	overlay.style.display = 'flex';
}

close.addEventListener('click', closeOverlay);

function closeOverlay(e) {
	e.preventDefault();
	overlay.style.display = 'none';
}

const orderForm = document.querySelector('.order__form-tag'),
  sendBtn = document.querySelector('#sendBtn'),
  name = orderForm.elements.name,
  phone = orderForm.elements.phone,
  comment = orderForm.elements.comment,
  orderSection = document.querySelector('#order');

sendBtn.addEventListener('click', event => {
  event.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(formData);
    xhr.addEventListener('load', () => {
      if (xhr.response.status) {
        const message = xhr.response.message;
        orderSection.appendChild(createResponse(message));
				document.body.style.overflow = 'hidden';
				return this._http.get(`api/data`)
				.map((response: Response) => response.json())
				.do(value => console.log(value));
      }
    });
  };
});

function serverResponse(text) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#responseTemplate");
  overlayElement.innerHTML = template.innerHTML;

  const closeElement = overlayElement.querySelector(".overlay__close--response");
  closeElement.addEventListener("click", function () {
    orderSection.removeChild(overlayElement);
  });

  const wrapElement = overlayElement.querySelector(".overlay__wrap");
  wrapElement.addEventListener("click", function () {
    orderSection.removeChild(overlayElement);
  });

  const messageElement = overlayElement.querySelector(".overlay__message");
  messageElement.innerHTML = text;

  return overlayElement;
