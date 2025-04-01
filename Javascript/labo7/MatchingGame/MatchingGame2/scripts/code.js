let global = {
    AANTAL_KAARTEN: 6,
    IMAGE_PATH_PREFIX: "images/kaart",
    IMAGE_PATH_SUFFIX: ".png"
};


const setup = () => {
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", startSpel);

}

let startSpel = () => {

    maakKaartSpel();
}

let maakKaartSpel = () => {
    let arrayKaarten = [];
    for(let i = 1; i<global.AANTAL_KAARTEN+1;i++){
        arrayKaarten.push(global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX);
    }
    console.log(arrayKaarten);

    let kaartenArray = [...arrayKaarten, ...arrayKaarten];

    console.log(kaartenArray);

    let kaartSpel = document.getElementById("kaartSpel");
    for(let i = 0; i < kaartenArray.length; i++){
        let kaartContainer = document.createElement("div");
        let kaart = document.createElement("img");
        kaart.setAttribute("src", kaartenArray[i]);
        kaartContainer.appendChild(kaart);
        kaartSpel.appendChild(kaartContainer);
    }

}

window.addEventListener("load", setup);