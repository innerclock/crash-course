// Write your JS in here
var pics = [
	'imgs/IMG_01.jpg', //0
	'imgs/IMG_02.jpg', //1
	'imgs/IMG_03.jpg', //2
	'imgs/IMG_04.jpg', //3
	'imgs/IMG_05.jpg', //4
	'imgs/IMG_06.jpg' //5
];

var btn = document.querySelector('button');
var img = document.querySelector('img');
counter = 1;

btn.addEventListener('click', function() {
	if (counter === 6) {
		counter = 0;
	}
	img.src = pics[counter];
	counter = counter + 1;
});
