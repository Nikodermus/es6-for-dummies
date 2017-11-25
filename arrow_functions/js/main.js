/*!
	Nicolas M. Pardo
	ES6 for Dummies
*/
/*jshint esversion: 6 */
let total_doggo_time;
window.onload = () => {
	total_doggo_time = Array.from(document.querySelectorAll('li'))
		.filter(li_items => li_items.innerText.includes('Doggo'))
		.map(li_items_doggo => li_items_doggo.dataset.time)
		.map(times_doggo => {
			const mins = times_doggo.substring(0, times_doggo.indexOf(':')) * 60;
			return mins + Number(times_doggo.substring(times_doggo.indexOf(':') + 1, times_doggo.length));
		})
		.reduce((total, value) => total + value, 0);

	console.log(`Your doggo videos are ${Math.floor(total_doggo_time/60)}min and ${Math.floor(total_doggo_time%60)}sec long`);


};