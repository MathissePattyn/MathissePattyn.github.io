let global = {
    AANTAL_KAARTEN : 52,
    IMAGE_PATH_PREFIX : "images/",
    IMAGE_PATH_SUFFIX_CLUBS : "_of_clubs.png",
    IMAGE_PATH_SUFFIX_DIAMONDS : "_of_diamonds.png",
    IMAGE_PATH_SUFFIX_HEARTS : "_of_hearts.png",
    IMAGE_PATH_SUFFIX_SPADES : "_of_spades.png",
    AANTAL_SOORTEN_KAARTEN : 4
};

let kaartenArray = [];

const setup = () => {
    console.log("setup");
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", startSpel);


}

const startSpel = () => {
    console.log("startSpel");
    let btnStart = document.getElementById("btnStart");
    btnStart.remove();
    maakKaartArray();
    shuffle(kaartenArray);
    toonKaartenComputer();
}

const maakKaartArray = () => {
    console.log("maakKaartArray");
    for(let i = 1; i<=(global.AANTAL_KAARTEN/global.AANTAL_SOORTEN_KAARTEN); i++) {
        kaartenArray.push(global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX_CLUBS);
        kaartenArray.push(global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX_DIAMONDS);
        kaartenArray.push(global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX_HEARTS);
        kaartenArray.push(global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX_SPADES);
    }
    console.log(kaartenArray);
}

const maakVoorkantKaart = (kaartSrc) => {
    console.log("maakVoorkantKaard");
    let voorkantKaart = document.createElement("img");
    voorkantKaart.setAttribute("class", "voorkant");
    voorkantKaart.setAttribute("src", kaartSrc);
    voorkantKaart.setAttribute("alt", "voorkant");
    return voorkantKaart;
}

const maakAchterkantKaart = () => {
    console.log("maakAchterkantKaart");
    let achterkantKaart = document.createElement("img");
    achterkantKaart.setAttribute("class", "achterkant");
    achterkantKaart.setAttribute("src", "images/achterkantKaart2.png");
    achterkantKaart.setAttribute("alt", "achterkant");
    return achterkantKaart;
}

const maakKaartContainer = (kaartSrc, toonAchterkant) => {
  console.log("maakKaartContainer");
  let kaartContainer = document.createElement("div");
    kaartContainer.setAttribute("class", "kaartContainer");

//     Voeg voorkant toe
    let voorkantKaart = maakVoorkantKaart(kaartSrc);
    kaartContainer.appendChild(voorkantKaart);

//     voeg achterkant toe, indien gewenst
    if(toonAchterkant) {
        let achterkantKaart = maakAchterkantKaart();
        kaartContainer.appendChild(achterkantKaart);
    }

    return kaartContainer;

}


const toonKaartenComputer = () => {
    console.log("toonKaartenComputer");
    let kaartspel = document.getElementById("kaartspel");
    let kaartenComputer = document.getElementById("kaartenComputer");
    kaartenComputer.setAttribute("class", "kaartenComputer");


    for(let i = 0; i<5;i++){
        let toonAchterkant = (i===3||i===4);

        let kaartContainer = maakKaartContainer(kaartenArray[i], toonAchterkant);

        kaartenComputer.appendChild(kaartContainer);
    }

    kaartspel.appendChild(kaartenComputer);
}


const shuffle = (array) => {
    let currentIndex = array.length, randomIndex, temporaryValue;

    // Zolang er meer dan 1 element over is
    while (currentIndex !== 0) {
        // Kies een willekeurig index
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Wissel het huidige element met het willekeurige element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};


window.addEventListener("load", setup);