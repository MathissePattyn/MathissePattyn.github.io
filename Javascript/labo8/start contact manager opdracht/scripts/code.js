let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    let lstPersonen = document.getElementById("lstPersonen");

    // valideer alle input data en controleer of er geen errors meer zijn

    // valideer();

    let elements = document.getElementsByClassName("invalid");
    if (elements.length == 0) {
        // alles in orde, we mogen bewaren
        let persoon = {};
        if (lstPersonen.selectedIndex == -1) {
            // nieuwe persoon bewaren
            vulPersoonOpBasisVanUserInterface(persoon);
            personen.push(persoon); // toevoegen aan interne lijst
            voegPersoonToeAanLijstInUserInterface(persoon);
        } else {
            // bestaande persoon wijzigen
            persoon = personen[lstPersonen.selectedIndex];
            vulPersoonOpBasisVanUserInterface(persoon);
            updatePersoonInLijstInUserInterface(persoon);
        }
    }
}
// indien ok, bewaar de ingegeven data.
// een nieuw aangemaakte persoon voegen we toe
// een bestaande persoon in de lijst passen we aan
const  vulPersoonOpBasisVanUserInterface = (persoon) =>{
    persoon.VOORNAAM = document.getElementById("txtVoornaam").value;
    persoon.FAMILIENAAM = document.getElementById("txtFamilienaam").value;
    persoon.GEBOORTEDATUM =  document.getElementById("txtGeboorteDatum").value;
    persoon.EMAIL =  document.getElementById("txtEmail").value;
    persoon.AANTAL_KINDEREN =  document.getElementById("txtAantalKinderen").value;
};


const voegPersoonToeAanLijstInUserInterface = (persoon) =>{
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
    let lstPersonen = document.getElementById("lstPersonen");
    let newSelect = document.createElement("option");
    let textNode = document.createTextNode(persoon.VOORNAAM + " " + persoon.FAMILIENAAM);
    newSelect.appendChild(textNode);
    lstPersonen.appendChild(newSelect);
}

const updatePersoonInLijstInUserInterface = (persoon) => {

    let lstPersonen =document.getElementById("lstPersonen");
    let index = lstPersonen.options.selectedIndex;

    let lijstPersoon = personen[index];


}


// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.selectedIndex = -1;

    let inputElementen  =document.querySelectorAll('input[type=text]');
    inputElementen.forEach(elem => {
        elem.value="";
    });
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");

    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);