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

var openButtonMobile = document.querySelectorAll('.reviews__hover_button-mobile');
var overlay = document.querySelector('.reviews-popup');
var close = document.querySelector('.reviews-popup__close');

for (var i = 0; i < openButtonMobile.length; i++) {
	openButtonMobile[i].addEventListener('click', openOverlayMobile);
}

function openOverlayMobile(e) {
	e.preventDefault();
	overlay.style.display = 'flex';
}

close.addEventListener('click', closeOverlayMobile);

function closeOverlayMobile(e) {
	e.preventDefault();
	overlay.style.display = 'none';
}

var openButton = document.querySelectorAll('.reviews__hover_button');
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

const myForm = document.querySelector('.order__form-tag'),
  sendBtn = document.querySelector('#sendBtn'),
  name = myForm.elements.name,
  phone = myForm.elements.phone,
  comment = myForm.elements.comment,
  orderSection = document.querySelector('#order');


name.addEventListener('keydown', function (event) {
  let isLetter = false,
    isControl = false;

  if (isFinite(event.key) == false) {
    isLetter = true;
  };

  if (event.key == "ArrowLeft" || event.key == "ArrowRight" || event.key == "Backspace" || event.keyCode == '32') {
    isControl = true;
  }

  if (!isLetter && !isControl) {
    event.preventDefault();
  };
});

const onlyDigit = document.querySelectorAll('.onlyDigit');

for (const element of onlyDigit) {
  element.addEventListener('keydown', function (event) {
    let isDigit = false;
    let isDash = false;
    isControl = false;

    if (event.key >= 0 || event.key <= 9) {
      isDigit = true;
    };

    if (event.key == '-') {
      isDash = true;
    };

    if (event.key == "ArrowLeft" || event.key == "ArrowRight" || event.key == "Backspace") {
      isControl = true;
    }

    if (!isDigit && !isDash && !isControl) {
      event.preventDefault();
    };
  });
}



sendBtn.addEventListener('click', event => {
  event.preventDefault();

  if (validateForm(myForm)) {
    let formData = new FormData(myForm);
    formData.append("name", myForm.elements.name.value);
    formData.append("phone", myForm.elements.phone.value);
    formData.append("comment", myForm.elements.comment.value);
    formData.append("to", 'mail@mail.com');

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(formData);
    xhr.addEventListener('load', () => {
      if (xhr.response.status) {
        const message = xhr.response.message;
        orderSection.appendChild(createResponse(message));
      }
    });
  };
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  };

  if (!validateField(form.elements.phone)) {
    valid = false;
  };

  if (!validateField(form.elements.comment)) {
    valid = false;
  };

  return valid;
};

function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;

  if (!field.checkValidity()) {
    field.nextElementSibling.classList.add('form__error--active');
  } else {
    field.nextElementSibling.classList.remove('form__error--active');
  }
  return field.checkValidity();
};

function createResponse(text) {
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
}

ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
					center: [59.896228, 30.424272900000005],
					zoom: 10
			}, {
					searchControlProvider: 'yandex#search'
			}),

			// Создаём макет содержимого.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),

			myPlacemark1 = new ymaps.Placemark(myMap.getCenter(), {
					hintContent: 'Собственный значок метки',
					balloonContent: 'Мы находимся здесь',
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: './icons/map-marker.svg',
					// Размеры метки.
					iconImageSize: [50, 60],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-5, -38]
			}),

			myPlacemark2 = new ymaps.Placemark([59.976402, 30.290290], {
					hintContent: 'Собственный значок метки с контентом',
					balloonContent: 'И здесь мы тоже есть',
					iconContent: ''
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: './icons/map-marker.svg',
					// Размеры метки.
					iconImageSize: [48, 48],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			});   

			myPlacemark3 = new ymaps.Placemark([59.872253, 30.316383], {
					hintContent: 'Собственный значок метки с контентом',
					balloonContent: 'И здесь',
					iconContent: ''
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: './icons/map-marker.svg',
					// Размеры метки.
					iconImageSize: [48, 48],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			});  
			
			myPlacemark4 = new ymaps.Placemark([59.84963070000001, 30.0357573], {
					hintContent: 'Собственный значок метки с контентом',
					balloonContent: 'И здесь',
					iconContent: ''
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: './icons/map-marker.svg',
					// Размеры метки.
					iconImageSize: [48, 48],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			}); 

	myMap.geoObjects
			.add(myPlacemark1)
			.add(myPlacemark2) 
			.add(myPlacemark3) 
			.add(myPlacemark4);
	
			myMap.behaviors.disable('scrollZoom');     

});

$('#fullpage').fullpage({
	menu: '#nav_list' 
});

var navigationItem = document.querySelectorAll(".navigation__item");
var navigationLink = document.querySelector(".navigation__link");

for (var i = 0; i < navigationLink.length; i++) {
	navigationLink[i].addEventListener('click', function () {
	navigationItem.classList.toggle('nav__item_active');   
})};

const videoEl = document.querySelector('.work__video-window'),
  videoWindow = $('.work__video-window'),
  videoContainer = $('.work__player'),
  playBtns = $('.playBtn'),
  volumeBtn = $('.player__volume'),
  volumeLevelBtn = $('.player__bar--volume').after;

playBtns.on('click', e => {
  playVideo();
});

videoWindow.on('click', e => {
  playVideo();
});

volumeBtn.on('click', e => {
  if (videoEl.volume != 0) {
    videoEl.volume = 0;
  } else {
    videoEl.volume = 1;
  };
  volumeBtn.toggleClass('player__volume--mute');
});

const playVideo = function () {
  if (videoEl.paused) {
    videoEl.play();
  } else {
    videoEl.pause();
  };
  videoContainer.toggleClass('player--active');
};

$(document).ready(function(){
	var controls = {
			video: $("#myvideo")               
	};
							
	var video = controls.video[0];

var controls = {
	total: $("#total"),
	buffered: $("#buffered"),
	progress: $("#current"),
	duration: $("#duration"),
	currentTime: $("#currenttime"),
	hasHours: false,
};              

video.addEventListener("canplay", function() {
	controls.hasHours = (video.duration / 3600) >= 1.0;                    
	controls.duration.text(formatTime(video.duration, controls.hasHours));
	controls.currentTime.text(formatTime(0),controls.hasHours);
}, false);

function formatTime(time, hours) {
	if (hours) {
			var h = Math.floor(time / 3600);
			time = time - h * 3600;
									
			var m = Math.floor(time / 60);
			var s = Math.floor(time % 60);
									
			return h.lead0(2)  + ":" + m.lead0(2) + ":" + s.lead0(2);
	} else {
			var m = Math.floor(time / 60);
			var s = Math.floor(time % 60);
									
			return m.lead0(2) + ":" + s.lead0(2);
	}
}
					
Number.prototype.lead0 = function(n) {
	var nz = "" + this;
	while (nz.length < n) {
			nz = "0" + nz;
	}
	return nz;
};

video.addEventListener("timeupdate", function() {
	controls.currentTime.text(formatTime(video.currentTime, controls.hasHours));
									
	var progress = Math.floor(video.currentTime) / Math.floor(video.duration);
	controls.progress[0].style.left = Math.floor(progress * controls.total.width()) + "px";
}, false);

controls.total.click(function(e) {
	var x = (e.pageX - this.offsetLeft)/$(this).left();
	video.currentTime = x * video.duration;
});
})
