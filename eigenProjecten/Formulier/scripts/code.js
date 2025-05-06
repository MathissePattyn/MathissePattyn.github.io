const setup = () => {
    let btnUpload = document.getElementById('btnUpload');
    btnUpload.addEventListener('click', upload);
}

const upload = () => {
    let gegevensArray = JSON.parse(localStorage.getItem('gegevens')) || [];

    let gegevens = {
        voornaam: document.getElementById('txtVoornaam').value,
        leeftijd: document.getElementById('nmbLeeftijd').value
    };

    gegevensArray.push(gegevens);
    let JSONArray = JSON.stringify(gegevensArray);
    localStorage.setItem('gegevens', JSONArray);
}

window.addEventListener("load", setup);