function init(){
	const entryInput = document.getElementById('entryinput');
	const entryButton = document.getElementById('entrybutton');
	const textOutput = document.getElementById('textoutput');

	entryButton.addEventListener('click', () => {
		alert(entryInput.value);
		textOutput.textContent = entryInput.value;
	});
}


window.addEventListener('load', init);	