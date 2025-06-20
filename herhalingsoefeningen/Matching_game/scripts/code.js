let AANTAL_HORIZONTAAL=4;
let AANTAL_VERTICAAL=3;
let AANTAL_KAARTEN=6;
let AANTAL_GELIJKE_KAARTEN = 2;
let PREFIX = "images/kaart";
let SUFFIX = ".png"

const setup = () => {
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", startSpel)

}

const draaiKaart = (event) => {
    let e = event.currentTarget;
    console.log(e)
}

const startSpel = () => {
    let btnStart = document.getElementById("btnStart");
    btnStart.remove();

    maakKaartSpel();

    let kaarten = document.getElementsByClassName("kaartContainer");
    for(let i = 0; i < kaarten.length; i++) {
        kaarten[i].addEventListener("click", draaiKaart);
    }
}

const maakKaartenArray = () =>{
    let kaartenArray = [];
    for(let i =1; i<=AANTAL_KAARTEN;i++){
        let kaartPad = (PREFIX + i + SUFFIX);
        for (let j =0;j<AANTAL_GELIJKE_KAARTEN;j++){
            kaartenArray.push(kaartPad);
        }
    }
    console.log(kaartenArray)
    return kaartenArray;
}

const maakKaartSpel = () => {

    let kaartenArray = maakKaartenArray();

    let kaartSpel = document.getElementById("kaartSpel");
    console.log(kaartSpel)

    for(let i =0; i<kaartenArray.length; i++){
        let kaartContainer = maakElementMetClassEnText("div","kaartContainer");
        let achterkantKaart = maakElementMetClassEnText("img","achterkant");
        let voorkantKaart = maakElementMetClassEnText("img","voorkant");

        achterkantKaart.setAttribute("class","achterkant");
        achterkantKaart.setAttribute("src", "images/achterkant.png");
        achterkantKaart.setAttribute("alt", "achterkant");

        voorkantKaart.setAttribute("class","voorkant");
        voorkantKaart.setAttribute("src", kaartenArray[i]);
        voorkantKaart.setAttribute("alt","voorkant");
        voorkantKaart.style.visibility = "hidden";

        kaartContainer.appendChild(achterkantKaart);
        kaartContainer.appendChild(voorkantKaart);

        kaartSpel.appendChild(kaartContainer);
    }
}

const maakElementMetClassEnText = (element , className="", text="") =>{
    let e = document.createElement(element);
    if (className) {
        className.split(' ').forEach(className => e.classList.add(className));
    }
    if (text) {
        e.textContent = text;
    }
    return e;
}

window.addEventListener("load", setup);