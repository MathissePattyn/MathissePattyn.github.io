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
    let txtKinderen = document.getElementById("txtKinderen");
    let errKinderen = document.getElementById("errKinderen");
    let kinderen = txtKinderen.value.trim();
    let kinderenInt = parseInt(kinderen, 10);

    if(!isGetal(kinderen) || kinderenInt < 0){
        reportError(txtKinderen, errKinderen, 'is geen positief getal');
    } else if(kinderenInt < 99){
        reportError(txtKinderen, errKinderen, 'is te vruchtbaar');
    } else{
        clearError(txtKinderen, errKinderen);
    }
}


const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if(voornaam.length > 30) {
        reportError(txtVoornaam, errVoornaam, "max. 30 karakters");
    } else if(voornaam.length === 0) {
        reportError(txtVoornaam, errVoornaam, 'Verplicht veld');
    }else {
        clearError(txtVoornaam, errVoornaam);
    }
}

const valideerFamilienaam = () =>{
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let errFamilienaam = document.getElementById("errFamilienaam");
    let familienaam = txtFamilienaam.value.trim();
    if(familienaam.length > 50){
        reportError(txtFamilienaam, errFamilienaam, 'max 50 karakters');
    } else if(familienaam.length === 0 ){
        reportError(txtFamilienaam, errFamilienaam, 'Verplicht veld');
    } else{
        reportError(txtFamilienaam, errFamilienaam);
    }
}

const valideerGeboortedatum = () =>{
    let txtGeboortedatum = document.getElementById("txtGeboortedatum");
    let errGeboortedatum = document.getElementById("errGeboortedatum");
    let geboortedatum = txtGeboortedatum.value.trim();

    clearError(txtGeboortedatum, errGeboortedatum);

    if(geboortedatum === ""){
        reportError(txtGeboortedatum, errGeboortedatum, 'Verplicht veld');
        return;
    }

    if(geboortedatum[4] === "-" && geboortedatum[7] === "-" && geboortedatum.length === 10){
        let jaar = geboortedatum.substring(0,4);
        let maand = geboortedatum.substring(5,7);
        let dag = geboortedatum.substring(8,10);

        geldigeDatum(jaar,maand,dag, txtGeboortedatum, errGeboortedatum);
    } else{
        reportError(txtGeboortedatum, errGeboortedatum, 'Formaat is niet jjjj-mm-dd');
    }
}

const valideerEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let errEmail = document.getElementById("errEmail");
    let email = txtEmail.value.trim();

    if(email === "") {
        reportError(txtEmail, errEmail, 'Verplicht veld');
        return;
    }

    let delen = email.split('@');
    let index = email.indexOf('@');
    geldigeEmail(delen, index, email, txtEmail, errEmail);
}

const geldigeEmail = (delen, index, email, txtEmail, errEmail) => {
    if(delen.length !== 2) {
        reportError(txtEmail, errEmail, 'Geen geldig email adres');
    } else if(email.includes('@ ') || email.includes(' @')) {
        reportError(txtEmail, errEmail, 'Geen geldig email adres');
    } else if(index === 0 || index === email.length - 1){
        reportError(txtEmail, errEmail, 'Geen geldig email adres');
    }else if (delen[0].length < 1 || delen[1].length < 1) {
        reportError(txtEmail, errEmail, "Geen geldig email-adres");
    }
    else{
        clearError(txtEmail, errEmail);
    }
}

const geldigeDatum =(jaar, maand, dag, txtGeboortedatum, errGeboortedatum) =>{
    if(!geldigJaar(jaar)){
        reportError(txtGeboortedatum, errGeboortedatum, 'Geen geldig jaar');
    } else if (!geldigeMaand(maand)) {
        reportError(txtGeboortedatum, errGeboortedatum, 'Geen geldige maand');
    }else if (!geldigeDag(dag)) {
        reportError(txtGeboortedatum, errGeboortedatum, 'Geen geldige dag');
    }else {
        clearError(txtGeboortedatum, errGeboortedatum);
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
        console.log(maand.length);
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
    console.log(!isNaN(tekst));
    return !isNaN(tekst);
}

const reportError = (element, errElement, message) => {
    element.className="invalid";
    errElement.innerHTML = message;
};

const clearError = (element, errElement) => {
    element.className="";
    errElement.innerHTML = "";
};

window.addEventListener("load", setup);