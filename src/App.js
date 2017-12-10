const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);// alert('test');
import './css/stylus.sss';
import abai45 from './abai45.json'

(function() {
	// svg
	const w = document.body.clientWidth,
				h = document.body.clientHeight;
	const paper = Snap(w, h);
	const cx = w / 2,
				cy = h / 2;

	var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
	            fill: "none",
	            stroke: "#fff",
	            strokeWidth: 5
	        }).toPattern(0, 0, 10, 10);
	var p2 = paper.text(0, 0, '0').attr({
		fill: "none",
		stroke: '#fff',
		strokeWidth: 1,
		fontSize: 5
	}).toPattern(0, 0, 10, 1);
	const word = paper.text(cx, cy, 'soz').attr({fill: p, fontSize: 60, class: 'qara'});

	// Number
	const number = paper.text(cx, cy, "45");
	number.attr({ fontSize: 250, fill: p2, class: 'mdm'});

	let currentSoz = 0;
	const randomNumber = Math.floor(Math.random() * (46 - 1)) + 1;
	console.log(randomNumber);

	Snap.animate(45, randomNumber, (value) => {
		number.attr({text: Math.round(value)});
	}, (45 - randomNumber) * 50, function() {
	  currentSoz = randomNumber;
		changeText(currentSoz - 1);
		document.body.classList.add('opened');
	});

	copyText();

	document.getElementById('open-nav').addEventListener('click', openNav)
	document.getElementById('info-btn').addEventListener('click', openNav);

	document.querySelector('.navigation').addEventListener('click', (e) => {
		if(e.target.tagName === 'A') {
			currentSoz = e.target.textContent;
			changeText(e.target.textContent - 1);
		}

		document.body.classList.remove('is-menu');
		e.preventDefault();
	});


	function openNav(e) {
		if(!document.body.classList.contains('is-menu')) {
			document.body.classList.add('is-menu');
		}

		e.preventDefault()
	}

	function copyText() {
		let btn = document.querySelector('.copy-btn');
		btn.addEventListener('click', function() {
			if(!btn.classList.contains('active')) {
				btn.classList.add('active');
			}
			var textarea = document.getElementById('text45');
			console.log(textarea.select);
			textarea.select();
	  	document.execCommand("Copy");
		})
	}

	function changeText(i) {
		document.getElementById('text45').textContent = abai45[i];
		document.querySelector('.dropdown').textContent = currentSoz;
	}

})()
