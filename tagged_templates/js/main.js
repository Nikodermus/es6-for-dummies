/*!
	Nicolas M. Pardo
	ES6 for Dummies
*/

const terms = {
	HTML: 'Hyper Text Markup Language',
	CSS: 'Cascade Style Sheet',
	ES6: 'EcmaScript 2016',
};

const name = {
	first: 'Nicolas',
	last: 'Pardo',
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

	return strings.reduce((sentence, string, i) => sentence + string + abbreviated[i], '');
}


const sentence = definition `Sup there I'm ${name.first} ${name.last}, passionate about ${'HTML'}, ${'CSS'} and now with ${'ES6'}`;

window.onload = () => {
	document.body.innerHTML = sentence;
};