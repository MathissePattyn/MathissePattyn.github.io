const setup = () => {
    window.alert("Dit is een mededeling");
    let antwoord = window.confirm("Weet u het zeker");
    let naam = window.prompt("Wat is uw naam", "onbekend");

    console.log(antwoord);
    console.log(naam);
}
window.addEventListener("load", setup);