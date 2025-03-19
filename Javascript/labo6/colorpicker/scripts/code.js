const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
	  sliders[i].addEventListener("change", update);
	  sliders[i].addEventListener("input", update);
  	}

	let btnSave = document.getElementById("save");
	btnSave.addEventListener("click", save);
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let valueRed = sliders[0].value;
	let valueGreen = sliders[1].value;
	let valueBlue = sliders[2].value;
	console.log("de waarde van de slider is momenteel : " + valueRed);

	let lblRed = document.getElementById("lblRed");
	lblRed.innerHTML = valueRed;

	let lblGreen = document.getElementById("lblGreen");
	lblGreen.innerHTML = valueGreen;

	let lblBlue = document.getElementById("lblBlue");
	lblBlue.innerHTML = valueBlue;

	let swatch = document.getElementById("swatch");
	swatch.style.backgroundColor = "rgb(" + valueRed + ", " + valueGreen + ", " + valueBlue+")";
}

const save = () => {

}

window.addEventListener("load", setup);