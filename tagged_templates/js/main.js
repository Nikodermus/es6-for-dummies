/*!
	Nicolas M. Pardo
	ES6 for Dummies
*/
/*jshint esversion: 6 */
const terms = {
	HTML: 'Hyper Text Markup Language',
	CSS: 'Cascade Style Sheet',
	ES6: 'EcmaScript 2016'
};

const name = {
	first: 'Nicolas',
	last: 'Pardo'
};

function definition(strings, ...values) {
	const abbreviated = values.map(value => {
		if (terms[value]) {
			return `<abbr title="${terms[value]}">
			${value}
			</abbr>`;
		}
		return value;
	});

	return strings.reduce((sentence, string, i) => {
		return sentence + string + abbreviated[i];
	}, '');
	console.log(abbreviated);
}



const sentence = definition `Sup there I'm ${name.first} ${name.last}, passionate about ${'HTML'}, ${'CSS'} and now with ${'ES6'}`;

window.onload = () => {
	document.body.innerHTML = sentence;
};