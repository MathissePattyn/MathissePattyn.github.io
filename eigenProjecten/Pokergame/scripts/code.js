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
let huidigeKaartIndex = 3;

const setup = () => {
    console.log("setup");
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", startSpel);

    let btnCheck = document.getElementById("btnCheck");
    btnCheck.addEventListener("click", check);

}

const startSpel = () => {
    console.log("startSpel");
    let btnStart = document.getElementById("btnStart");
    btnStart.remove();

    maakEnToonKaarten();

}

const maakEnToonKaarten = () => {
    console.log("maakEnToonKaarten");
    maakKaartArray();
    shuffle(kaartenArray);
    toonKaartenComputer();
    toonKaartenSpeler();
    toonKaartenStapel();
}

// const geselecteerdeKaart = (event) => {
//     console.log("geselecteerdeKaart");
//     let kaart = event.currentTarget;
//     let voorkant = kaart.getElementsByClassName("voorkant")[0];
//
//     voorkant.classList.toggle("geselecteerd");
// }
//
// const verwijderKaart = () => {
//     console.log("verwijderKaart");
//
// }

const check = () => {
    console.log("check");
    let kaartenComputer = document.getElementById("kaartenComputer");
    let kaartContainers = kaartenComputer.getElementsByClassName("kaartContainer");

    if (huidigeKaartIndex < kaartContainers.length) {
        let kaartContainer = kaartContainers[huidigeKaartIndex];
        let voorkant = kaartContainer.getElementsByClassName("voorkant")[0];
        let achterkant = kaartContainer.getElementsByClassName("achterkant")[0];
        console.log(achterkant)

        if (achterkant && achterkant.style.display !== "none") {
            achterkant.style.display = "none";
            voorkant.style.display = "block";
        }
        huidigeKaartIndex++;
    }
}




    // let voorkant = kaartContainer.getElementsByClassName("voorkant");
    // let achterkantenKaartenArray = [];
    // let achterkantKaarten = kaartContainer.getElementsByClassName("achterkant");
    // for (let i = 0; i < achterkantKaarten.length; i++) {
    //     achterkantenKaartenArray.push(achterkantKaarten[i]);
    // }
    //
    // if(achterkantenKaartenArray.length>0){
    //     kaa
    // }
//
//     achterkantenKaartenArray[0].style.display = "none";
// console.log(achterkantenKaartenArray);


const draaiKaart = (event) => {
    console.log("draaiKaart");
    let kaart = event.currentTarget;
    console.log(kaart);
    let voorkant = kaart.getElementsByClassName("voorkant")[0];
    let achterkant = kaart.getElementsByClassName("achterkant")[0];
    console.log(achterkant);


    if(achterkant){
        voorkant.style.display = "block";
        achterkant.style.display = "none";
    } else{
        console.log("Kan de achterkant niet vinden op de kaart");
    }


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
    let voorkantKaart = document.createElement("img");
    voorkantKaart.setAttribute("class", "voorkant");
    voorkantKaart.setAttribute("src", kaartSrc);
    voorkantKaart.setAttribute("alt", "voorkant");
    return voorkantKaart;
}

const maakAchterkantKaart = () => {
    let achterkantKaart = document.createElement("img");
    achterkantKaart.setAttribute("class", "achterkant");
    achterkantKaart.setAttribute("src", "images/achterkant2.png");
    achterkantKaart.setAttribute("alt", "achterkant");
    return achterkantKaart;
}

const maakKaartContainer = (kaartSrc, toonAchterkant) => {
  let kaartContainer = document.createElement("div");
    kaartContainer.setAttribute("class", "kaartContainer");

//     Voeg voorkant toe
    let voorkantKaart = maakVoorkantKaart(kaartSrc);
    kaartContainer.appendChild(voorkantKaart);

//     voeg achterkant toe, indien gewenst
    if(toonAchterkant) {
        let achterkantKaart = maakAchterkantKaart();
        voorkantKaart.style.display = "none";
        kaartContainer.appendChild(achterkantKaart);
        kaartContainer.addEventListener("click", draaiKaart);
    }
    return kaartContainer;
}

const toonKaartenSpeler = () => {
    console.log("toonKaartenSpeler");
    let kaartspel = document.getElementById("kaartspel");
    let kaartenSpeler = document.getElementById("kaartenSpeler");
    kaartenSpeler.setAttribute("class", "kaartenSpeler");

    for(let i = 0; i<2;i++){
        let toonAchterkant = false;
        let kaartContainer = maakKaartContainer(kaartenArray[i], toonAchterkant);
        kaartenArray.splice(i,1);
        // kaartContainer.addEventListener("click", geselecteerdeKaart);
        kaartenSpeler.appendChild(kaartContainer);
    }
    kaartspel.appendChild(kaartenSpeler);
}

const toonKaartenStapel = () => {
    console.log("toonKaartenStapel");
    let kaartspel = document.getElementById("kaartspel");
    let kaartStapel = document.getElementById("kaartStapel");
    kaartStapel.setAttribute("class", "kaartStapel");
    let kaartContainers = document.createElement("div");
    let tekst = "Kaarten in stapel: " + (kaartenArray.length);

    let textNode = document.createTextNode(tekst);

    kaartContainers.appendChild(maakAchterkantKaart());
    kaartContainers.appendChild(textNode);
    kaartStapel.appendChild(kaartContainers);
    kaartspel.appendChild(kaartStapel);

}

const toonKaartenComputer = () => {
    console.log("toonKaartenComputer");
    let kaartspel = document.getElementById("kaartspel");
    let kaartenComputer = document.getElementById("kaartenComputer");
    kaartenComputer.setAttribute("class", "kaartenComputer");

    for(let i = 0; i<5;i++){
        let toonAchterkant = (i===3||i===4);
        let kaartContainer = maakKaartContainer(kaartenArray[i], toonAchterkant);
        kaartenArray.splice(i,1);
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