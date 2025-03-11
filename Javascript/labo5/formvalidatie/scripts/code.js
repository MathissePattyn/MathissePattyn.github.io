const setup = () => {
    let btnValidatie = document.getElementById("btnValidatie");
    btnValidatie.addEventListener("click", valideer)
}

const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboortedatum();
    valideerEmail();
    valideerKinderen();
}

const valideerKinderen = () => {

}

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if(voornaam.length > 30) {
        txtVoornaam.classList.add("invalid");
        errVoornaam.innerHTML = "max. 30 karakters";
    } else if(voornaam.length === 0) {
        txtVoornaam.classList.add("invalid");
        errVoornaam.innerHTML = "Verplicht veld";
    }else {
        txtVoornaam.className="";
        errVoornaam.innerHTML = "";
    }
}

const valideerFamilienaam = () =>{
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let errFamilienaam = document.getElementById("errFamilienaam");
    let familienaam = txtFamilienaam.value.trim();
    if(familienaam.length > 50){
        txtFamilienaam.classList.add("invalid");
        errFamilienaam.innerHTML = "max. 50 karakters";
    } else if(familienaam.length === 0 ){
        txtFamilienaam.classList.add("invalid");
        errFamilienaam.innerHTML = "Verplicht veld";
    } else{
        txtFamilienaam.className="";
        errFamilienaam.innerHTML = "";
    }
}

const valideerGeboortedatum = () =>{
    let txtGeboortedatum = document.getElementById("txtGeboortedatum");
    let errGeboortedatum = document.getElementById("errGeboortedatum");
    let geboortedatum = txtGeboortedatum.value.trim();

    txtGeboortedatum.classList.remove("invalid");
    errGeboortedatum.innerHTML = "";

    // console.log(geboortedatum);

    if(geboortedatum === ""){
        txtGeboortedatum.classList.add("invalid");
        errGeboortedatum.innerHTML = "Verplicht veld";
        return;
    }

    if(geboortedatum[4] === "-" && geboortedatum[7] === "-"){
        let jaar = geboortedatum.substring(0,4);
        let maand = geboortedatum.substring(5,7);
        let dag = geboortedatum.substring(8,10);

        geldigeDatum(jaar,maand,dag);
    } else{
        txtGeboortedatum.classList.add("invalid");
        errGeboortedatum.innerHTML = "formaat is niet jjjj-mm-dd";
    }


}

const valideerEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let errEmail = document.getElementById("errEmail");
    let email = txtEmail.value.trim();

    if(email === "") {
        txtEmail.classList.add("invalid");
        errEmail.innerHTML = "verplicht veld";
        return;
    }

    let index = email.indexOf("@");
    geldigeEmail(index, email);
}

const geldigeEmail = (index, email) => {
    if (index === -1){
        txtEmail.classList.add("invalid");
        errEmail.innerHTML = "geen geldig email-adres";
        return;
    } else if (email[index-1] === "" && email[index+1] === "") {
        txtEmail.classList.add("invalid");
        errEmail.innerHTML = "geen geldig email-adres";
        return;
    } else if(index === 0 || index === email.length-1){
        txtEmail.classList.add("invalid");
        errEmail.innerHTML = "geen geldig email-adres";
    }
    else{
        txtEmail.classList.remove("invalid");
        txtEmail.className = "";
        errEmail.innerHTML = "";
    }
}

const geldigeDatum =(jaar, maand, dag) =>{
    if(!geldigJaar(jaar)){
        txtGeboortedatum.classList.add("invalid");
        errGeboortedatum.innerHTML = "Geen geldig jaar";
    } else if (!geldigeMaand(maand)) {
        txtGeboortedatum.classList.add("invalid");
        errGeboortedatum.innerHTML = "Geen geldige maand";
    }else if (!geldigeDag(dag)) {
        txtGeboortedatum.classList.add("invalid");
        errGeboortedatum.innerHTML = "Geen geldige dag";
    }else {
        txtGeboortedatum.className = "";
        errGeboortedatum.innerHTML = "";
    }
}

const geldigJaar = (jaar) => {
    if(jaar.length === 4 && isGetal(jaar)){
        return true;
    } else {
        return false;
    }
}


const geldigeMaand = (maand) => {
    if(!isGetal(maand)){
        return false;
    }
    let maandInt = parseInt(maand, 10);
    if(maand.length === 2 && maandInt > 0) {
        return true;
    }
}

const geldigeDag = (dag) => {
    if(!isGetal(dag)){
        return false;
    }
    let dagInt = parseInt(dag, 10)
    if(dag.length === 2 && dagInt > 0){
        return true;
    }
}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}

window.addEventListener("load", setup);