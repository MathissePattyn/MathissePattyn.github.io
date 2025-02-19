const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", herbereken);
}

const herbereken = () => {

    let prijzenString = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btwWaardesString = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let eindtotaal = document.getElementsByClassName("eindtotaal");
    let eindresultaat = 0.00;

    for (let i = 0; i < subtotalen.length; i++) {

        let prijsGetal = parseFloat(prijzenString[i].textContent);
        console.log(prijsGetal);

        let aantal = parseFloat(aantallen[i].value);
        console.log(aantal);

        let btw = parseFloat(btwWaardesString[i].textContent)/100;
        console.log(btw);

        let subtotaal = prijsGetal * aantal * (1+btw);

        subtotalen[i].textContent = subtotaal.toFixed(2);


        eindresultaat += subtotaal;
    }
    eindtotaal[0].textContent = eindresultaat.toFixed(2);
}

window.addEventListener("load", setup);