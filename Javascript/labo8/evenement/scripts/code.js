const setup = () => {

    console.log("setup");
    let evenement = {
        naam: "Codeer Workshop Javascript",
        datum: new Date(2025, 3, 15), // 15 april 2025
        locatie: "Kortrijk",
        deelnemers: ["John", "Maria", "Ahmed", "Sophie"]
    }
    toonEvenementInfo(evenement);

}

const toonEvenementInfo = (evenement) => {
    console.log("Evenement: " + evenement.naam);
    console.log("datum: " + evenement.datum.toDateString());
    console.log("Locatie: " + evenement.locatie);
    console.log("Deelnemers: " + evenement.deelnemers);
    console.log("Deelnemers: " + evenement.deelnemers.join(" - ")); //BELANGRIJK

    let date = new Date();
    let tijdResterend = evenement.datum - date;
    let dagenResterend = tijdResterend/1000/60/60/24;

    console.log("Aantal dagen tot het evenement: " + Math.ceil(dagenResterend));

}

window.addEventListener("load", setup);