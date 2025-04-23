
const storeSliderValues = () => {
    let sliderValues = {};
    let sliderValuesJSON;

    sliderValues.red = parseInt(document.getElementById("sldRed").value);
    sliderValues.green = parseInt(document.getElementById("sldGreen").value);
    sliderValues.blue = parseInt(document.getElementById("sldBlue").value);

    sliderValuesJSON = JSON.stringify(sliderValues);
    localStorage.setItem("sliderValues", sliderValuesJSON);
};

const restoreSliderValues = () => {
    let sliderValues;
    let sliderValuesJSON = localStorage.getItem("sliderValues");

    sliderValues = JSON.parse(sliderValuesJSON);

    document.getElementById("sldRed").value = sliderValues.red;
    document.getElementById("sldGreen").value = sliderValues.green;
    document.getElementById("sldBlue").value = sliderValues.blue;
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatchJSON;
    let swatchArray = [];

    let swatches = document.querySelectorAll("#swatchComponents .swatch");
    for (let i = 0; i < swatches.length; i++) {
        let swatchValue = swatches[i];
        let swatch = {
            red: swatchValue.getAttribute("data-red"),
            green: swatchValue.getAttribute("data-green"),
            blue: swatchValue.getAttribute("data-blue"),
        }
        swatchArray.push(swatch);
    }

    swatchJSON = JSON.stringify(swatchArray);
    localStorage.setItem("swatch", swatchJSON);
};

const restoreSwatches = () => {
    let swatchJSON = localStorage.getItem("swatch");
    let swatchArray = JSON.parse(swatchJSON);
    for (let i = 0; i < swatchArray.length; i++) {
        let swatchValue = swatchArray[i];
        addSwatchComponent(swatchValue.red, swatchValue.green, swatchValue.blue);

    }
};
