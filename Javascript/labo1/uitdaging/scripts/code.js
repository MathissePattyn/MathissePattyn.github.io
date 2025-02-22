const setup = () => {

    let btnVoegToe = document.getElementById('btnVoegToe');
    btnVoegToe.addEventListener("click", addFoto);

}

const voegToe = () => {
    let fotoUrl = document.getElementById('txtInput').value;
    let img = document.createElement('img');
    img.src = fotoUrl;
    img.alt = "afbeelding";
    let divImages = document.getElementById("divImages");
    divImages.appendChild(img);
}

const addFoto = () => {
    let txtInput = document.getElementById('txtInput');
    let url = txtInput.value;
    let divImages = document.getElementById("divImages");
    divImages.innerHTML += "<img src='"+ url + "'/>";
    txtInput.value = "";
}

window.addEventListener("load", setup);