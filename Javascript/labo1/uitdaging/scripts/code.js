const setup = () => {

    let btnVoegToe = document.getElementById('btnVoegToe');
    btnVoegToe.addEventListener("click", addFoto);

}

const addFoto = () => {
    let fotoUrl = document.getElementById('txtInput').value;
    if (fotoUrl.trim() !== "") {
        let img = document.createElement('img');
        img.src = fotoUrl;
        img.alt = "afbeelding";

        let divImages = document.getElementById("divImages");
        divImages.appendChild(img);
    } else{
        alert("Gelieve een geldige URL in te geven.");
    }
}

window.addEventListener("load", setup);