const setup = () => {

	let sliders = document.getElementsByClassName("slider");
	for(let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", maakSwatch);
		sliders[i].addEventListener("click", maakSwatch);
	}

	let btnSave = document.getElementById("btnSave");
	btnSave.addEventListener("click", saveColors);

}

let maakSwatch = () => {
	let sliders = document.getElementsByClassName("slider");
	let valueRed = sliders[0].value;
	let valueBlue = sliders[1].value;
	let valueGreen = sliders[2].value;

	let colorRed = document.getElementById("colorRed");
	colorRed.innerHTML = valueRed;

	let colorBlue = document.getElementById("colorBlue");
	colorBlue.innerHTML = valueBlue;

	let colorGreen = document.getElementById("colorGreen");
	colorGreen.innerHTML = valueGreen;

	let swatch = document.getElementById("swatch");
	swatch.style.backgroundColor = "rgb(" + valueRed + ", " + valueGreen + ", " + valueBlue + ")";
}

let saveColors = () => {
	let swatch = document.getElementById("swatch");
	let rgb = swatch.style.backgroundColor;

	let savedColors = document.getElementById("savedColors");
	let newDiv = document.createElement("div");
	newDiv.style.backgroundColor = rgb;
	newDiv.classList.add("savedColors");

	let btnDelete = document.createElement("button");
	btnDelete.innerText = "X";
	btnDelete.classList.add("deleteColor");
	btnDelete.onclick =  () => {
		newDiv.remove();
	}
	newDiv.appendChild(btnDelete);

	savedColors.appendChild(newDiv);
}




window.addEventListener("load", setup);