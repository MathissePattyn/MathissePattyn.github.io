let global = {
    AANTAL_KAARTEN: 6,
    IMAGE_PATH_PREFIX: "images/kaart",
    IMAGE_PATH_SUFFIX: ".png"
};

let kaartenArray = [];

const setup = () => {

    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", startSpel);

}

let startSpel = () => {
    console.log("Starting Spel");
    let kaartSpel = document.getElementById("kaartSpel");
    kaartSpel.innerHTML = "";
    maakKaartSpel();
}

let maakKaartenArray = () => {
    kaartenArray = [];
    let arrayKaarten = [];
    for(let i = 1; i<global.AANTAL_KAARTEN+1;i++){
        arrayKaarten.push(global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX);
    }
    kaartenArray = [...arrayKaarten, ...arrayKaarten];
    console.log(kaartenArray);
}

let maakKaartSpel = () => {
    maakKaartenArray();

    let kaartSpel = document.getElementById("kaartSpel");
    for(let i = 0; i < kaartenArray.length; i++){
        let kaartContainer = document.createElement("div");
        kaartContainer.setAttribute("class", "kaart");

        let voorkantKaart = document.createElement("img");
        voorkantKaart.setAttribute("class", "voorkant");
        voorkantKaart.setAttribute("src", kaartenArray[i]);
        kaartContainer.appendChild(voorkantKaart);

        let achterkantKaart = document.createElement("img");
        achterkantKaart.setAttribute("class", "achterkant");
        achterkantKaart.setAttribute("src", "images/achterkant.png");
        kaartContainer.appendChild(achterkantKaart);


        kaartSpel.appendChild(kaartContainer);
    }

}

window.addEventListener("load", setup);