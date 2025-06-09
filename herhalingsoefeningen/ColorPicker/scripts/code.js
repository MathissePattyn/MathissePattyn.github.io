const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i= 0; i< sliders.length; i++){
        sliders[i].addEventListener("change", updateSwatch);
        sliders[i].addEventListener("input", updateSwatch);
    }
    updateSwatch();

    let btnSave = document.getElementById("btnSave");
    btnSave.addEventListener("click", save);

    restoreSlider();
    restoreSavedSwatches();
}

const updateSwatch = () => {
    let sliders = document.getElementsByClassName("slider");
    let red = sliders[0].value;
    let blue = sliders[1].value;
    let green = sliders[2].value;

    let lblRed = document.getElementById("lblRed");
    lblRed.innerHTML = red;
    let lblGreen = document.getElementById("lblGreen");
    lblGreen.innerHTML = green;
    let lblBlue = document.getElementById("lblBlue");
    lblBlue.innerHTML = blue;

    let swatch = document.getElementsByClassName("swatch")[0];
    swatch.style.backgroundColor = "rgb(" + red + ", " + blue + ", " + green +")";

}

const save = () => {
    let swatch = document.getElementsByClassName("swatch")[0];
    let rgb = swatch.style.backgroundColor;

    let div = document.createElement("div");
    div.classList.add("swatch");
    div.style.backgroundColor = rgb;

    let deletebutton = document.createElement("button");
    deletebutton.innerText = "X";
    deletebutton.classList.add("deleteColor");
    deletebutton.onclick = () => {
        div.remove();
    }

    let savedColors = document.getElementById("savedColors");

    div.appendChild(deletebutton);
    savedColors.appendChild(div);

    storeSliderValues();
    saveSwatches();
}

const storeSliderValues = () => {
    let slider = {};

    let red = document.getElementById("sldRed").value;
    let blue = document.getElementById("sldBlue").value;
    let green = document.getElementById("sldGreen").value;

    slider = {
        red: red,
        blue: blue,
        green : green
    }

    let JSONSlider = JSON.stringify(slider);
    localStorage.setItem("sliderValues", JSONSlider);
}

const restoreSlider = () => {
    let slider = JSON.parse(localStorage.getItem("sliderValues"));

    let swatch = document.getElementsByClassName("swatch")[0];
    swatch.style.backgroundColor = "rgb(" + slider.red + ", " + slider.blue + ", " + slider.green +")";

    document.getElementById("sldRed").value = slider.red;
    document.getElementById("sldBlue").value = slider.blue;
    document.getElementById("sldGreen").value = slider.green;
}

const saveSwatches = () => {
    let savedSwatches = document.querySelectorAll("#savedColors .swatch");

    let savedSwatchesArray = [];

    for(let i = 0; i < savedSwatches.length; i++) {
        let rgb = window.getComputedStyle(savedSwatches[i]).backgroundColor;

        // Parse rgb(r, g, b)
        let match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        if (match) {
            let swatch = {
                red: parseInt(match[1]),
                green: parseInt(match[2]),
                blue: parseInt(match[3])
            };
            savedSwatchesArray.push(swatch);
        }
    }
    localStorage.setItem("swatch", JSON.stringify(savedSwatchesArray));
}

const restoreSavedSwatches = () => {
    let savedSwatches = JSON.parse(localStorage.getItem("swatch")) || [];

    savedSwatches.forEach((swatch) => {
        let rgb = `rgb(${swatch.red}, ${swatch.green}, ${swatch.blue})`;

        let div = document.createElement("div");
        div.classList.add("swatch");
        div.style.backgroundColor = rgb;

        let deletebutton = document.createElement("button");
        deletebutton.innerText = "X";
        deletebutton.classList.add("deleteColor");
        deletebutton.onclick = () => {
            div.remove();
        }

        let savedColors = document.getElementById("savedColors");

        div.appendChild(deletebutton);
        savedColors.appendChild(div);
    })

}


window.addEventListener("load", setup);