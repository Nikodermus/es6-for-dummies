/*!
	Nicolas M. Pardo
	ES6 for Dummies
*/

/*jshint esversion: 6 */

let h2;

function fillSpan(elem) {
	elem.innerHTML = [...elem.textContent.trim()]
		.map(letter => `<span>${letter}</span>`)
		.join('');
}

window.onload = () => {
	h2 = document.querySelector('.jump');
	fillSpan(h2);
};