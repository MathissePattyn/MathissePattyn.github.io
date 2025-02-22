const setup = () => {
    let btnBereken = document.getElementById("btnBereken");
    btnBereken.addEventListener("click", bereken);
}

const bereken = () => {
    let zoekString = "an";
    let zoekTekst = document.getElementsByTagName("p");
    let teller = 0;
    for (let i = 0; i < zoekTekst.length; i++) {
        let zin = zoekTekst[i].textContent;
        console.log(zin);

        let index = zin.indexOf(zoekString);
        while(index !== -1){
            teller++;
            index = zin.indexOf(zoekString, index + 1);
        }
    }

    console.log(teller);
}

window.addEventListener("load", setup);