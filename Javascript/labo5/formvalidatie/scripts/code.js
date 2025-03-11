const setup = () => {
    let btnValidatie = document.getElementById("btnValidatie");
    btnValidatie.addEventListener("click", valideer)
}

const valideer = () => {
    valideerVoornaam();
}

const valideerVoornaam = () => {
    let txtvoornaam = document.getElementById("txtVoornaam");
    let voornaam = txtvoornaam.value.trim();
    if(voornaam.length > 30){

    }
}

window.addEventListener("load", setup);