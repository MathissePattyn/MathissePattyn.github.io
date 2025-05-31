let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    // valideer();

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan
    let info = {
        voornaam: document.getElementById("txtVoornaam").value,
        familienaam: document.getElementById("txtFamilienaam").value,
        geboorteDatum: document.getElementById("txtGeboorteDatum").value,
        email: document.getElementById("txtEmail").value,
        aantalKinderen: document.getElementById("txtAantalKinderen").value
    }
    personen.push(info);
    let JSONPersonen = JSON.stringify(personen);
    localStorage.setItem("info", JSONPersonen);

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
    let lstPersonen = document.getElementById("lstPersonen");
    let optionElement = document.createElement("option");
    optionElement.value = (personen.length - 1);
    let textNode = document.createTextNode(document.getElementById("txtVoornaam").value + " " + document.getElementById("txtFamilienaam").value);
    optionElement.appendChild(textNode);
    lstPersonen.appendChild(optionElement);

    maakVeldLeeg();
};

const maakVeldLeeg = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = "";
    maakVeldLeeg();
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", laadGegevens)
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

const laadGegevens = (event) => {
    let index = event.target.value;
    let persoon = personen[index];

    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
}

window.addEventListener("load", setup);