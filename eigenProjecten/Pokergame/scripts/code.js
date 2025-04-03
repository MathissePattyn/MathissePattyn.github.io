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

const toonKaartenComputer = () => {
    console.log("toonKaartenComputer");
    let kaartspel = document.getElementById("kaartspel");
    let kaartenComputer = document.getElementById("kaartenComputer");
    kaartenComputer.setAttribute("class", "kaartContainer");


    for(let i = 0; i < 5; i++) {
        if(i===3 || i===4){
            let kaartContainer = document.createElement("div");
            kaartContainer.setAttribute("class", "kaartContainer");

            // achterkant kaart
            let achterkantKaart = document.createElement("img");
            achterkantKaart.setAttribute("class", "achterkant");
            achterkantKaart.setAttribute("src", "images/achterkant2.png");
            achterkantKaart.setAttribute("alt", "achterkant");
            kaartContainer.appendChild(achterkantKaart);

            kaartenComputer.appendChild(kaartContainer);
            kaartspel.appendChild(kaartenComputer);
        } else{
            // KaartContainer om voor en achterkant op te slaan
            let kaartContainer = document.createElement("div");
            kaartContainer.setAttribute("class", "kaartContainer");

            // voorkant kaart
            let voorkantKaart = document.createElement("img");
            voorkantKaart.setAttribute("class", "voorkant");
            voorkantKaart.setAttribute("src", kaartenArray[i]);
            voorkantKaart.setAttribute("alt", "voorkant");
            kaartContainer.appendChild(voorkantKaart);

            // Achterkant kaart


            kaartenComputer.appendChild(kaartContainer);
            kaartspel.appendChild(kaartenComputer);
        }
    }

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