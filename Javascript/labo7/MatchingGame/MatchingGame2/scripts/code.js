let global = {
    AANTAL_KAARTEN: 6,
    IMAGE_PATH_PREFIX: "images/kaart",
    IMAGE_PATH_SUFFIX: ".png",
    AANTAL_GELIJKE_KAARTEN: 3
};

let isBusy = false;

let kaartenArray = [];
let geselecteerdeKaarten = [];

const setup = () => {

    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", startSpel);

}

const startSpel = () => {
    console.log("Starting Spel");
    let kaartSpel = document.getElementById("kaartSpel");
    kaartSpel.innerHTML = "";
    maakKaartSpel();

    let kaarten = document.getElementsByClassName("kaart");
    for(let i = 0; i < kaarten.length; i++) {
        kaarten[i].addEventListener("click", draaiKaart);
    }
}

const maakKaartenArray = () => {
    kaartenArray = [];
    for(let i = 1; i<global.AANTAL_KAARTEN+1;i++){
        let kaartPad = global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX;

        for (let j = 0; j < global.AANTAL_GELIJKE_KAARTEN; j++) {
            kaartenArray.push(kaartPad);
        }
    }

    shuffleArray(kaartenArray);
    console.log(kaartenArray);
}

const maakKaartSpel = () => {
    maakKaartenArray();

    let kaartSpel = document.getElementById("kaartSpel");
    for(let i = 0; i < kaartenArray.length; i++){
        let kaartContainer = document.createElement("div");
        kaartContainer.setAttribute("class", "kaart");

        let voorkantKaart = document.createElement("img");
        voorkantKaart.setAttribute("class", "voorkant");
        voorkantKaart.setAttribute("src", kaartenArray[i]);
        kaartContainer.appendChild(voorkantKaart);
        voorkantKaart.style.display = "none";

        let achterkantKaart = document.createElement("img");
        achterkantKaart.setAttribute("class", "achterkant");
        achterkantKaart.setAttribute("src", "images/achterkant.png");
        kaartContainer.appendChild(achterkantKaart);


        kaartSpel.appendChild(kaartContainer);
    }
};

const draaiKaart = (event) =>{

    if(isBusy || geselecteerdeKaarten.length >= global.AANTAL_GELIJKE_KAARTEN){return}

    let kaart = event.currentTarget;
    let voorkant = kaart.getElementsByClassName("voorkant")[0];
    let achterkant = kaart.getElementsByClassName("achterkant")[0];

    kaart.classList.add("omgedraaid");

    if(kaart.classList.contains("omgedraaid")){
        achterkant.style.display = "none";
        voorkant.style.display = "block";
        geselecteerdeKaarten.push(kaart);
    } else{
        voorkant.style.display = "none";
        achterkant.style.display = "block";
    }
    gelijkeKaarten();
}

const gelijkeKaarten = () => {

    if (isBusy){return}

    let kaarten = document.getElementsByClassName("kaart");
    let omgedraaideKaarten = [];

    for(let i = 0; i < kaarten.length; i++){
        if(kaarten[i].classList.contains("omgedraaid")){
            omgedraaideKaarten.push(kaarten[i]);
        }
    }


    geselecteerdeKaarten = omgedraaideKaarten.slice(0, global.AANTAL_GELIJKE_KAARTEN);
    console.log(geselecteerdeKaarten)
    if(omgedraaideKaarten.length === global.AANTAL_GELIJKE_KAARTEN) {
        isBusy = true;

        let voorkantEersteKaart = geselecteerdeKaarten[0].getElementsByClassName("voorkant")[0];
        let gelijkeKaarten = geselecteerdeKaarten.every(kaart => kaart.getElementsByClassName("voorkant")[0].src === voorkantEersteKaart.src)

        if (gelijkeKaarten) {
            geselecteerdeKaarten.forEach(kaart => kaart.getElementsByClassName("voorkant")[0].classList.add("juist"));
            geselecteerdeKaarten.forEach(kaart => kaart.getElementsByClassName("voorkant")[0].removeEventListener("click", draaiKaart));

            setTimeout(() => {
                geselecteerdeKaarten.forEach(kaart => kaart.classList.remove("omgedraaid"));
                geselecteerdeKaarten.forEach(kaart => kaart.getElementsByClassName("voorkant")[0].style.visibility = "hidden");
                geselecteerdeKaarten = [];
                isBusy = false;
            }, 1000);
        } else {
            geselecteerdeKaarten.forEach(kaart => kaart.getElementsByClassName("voorkant")[0].classList.add("fout"));

            setTimeout(() => {
                geselecteerdeKaarten.forEach(kaart => kaart.classList.remove("omgedraaid"));
                geselecteerdeKaarten.forEach(kaart => kaart.getElementsByClassName("voorkant")[0].style.display = "none");
                geselecteerdeKaarten.forEach(kaart => kaart.getElementsByClassName("achterkant")[0].style.display = "block");
                geselecteerdeKaarten.forEach(kaart => kaart.addEventListener("click", draaiKaart));
                geselecteerdeKaarten = [];
                isBusy = false;
            }, 1000);
        }
    } else{
        isBusy = false;
    }
}

const shuffleArray = (array) => {
    for(let i = array.length -1;i>0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

window.addEventListener("load", setup);

// MET 2 KAARTEN
// let global = {
//     AANTAL_KAARTEN: 6,
//     IMAGE_PATH_PREFIX: "images/kaart",
//     IMAGE_PATH_SUFFIX: ".png",
//     AANTAL_GELIJKE_KAARTEN: 3
// };
//
// let isBusy = false;
//
// let kaartenArray = [];
//
// const setup = () => {
//
//     let btnStart = document.getElementById("btnStart");
//     btnStart.addEventListener("click", startSpel);
//
// }
//
// const startSpel = () => {
//     console.log("Starting Spel");
//     let kaartSpel = document.getElementById("kaartSpel");
//     kaartSpel.innerHTML = "";
//     maakKaartSpel();
//
//     let kaarten = document.getElementsByClassName("kaart");
//     for(let i = 0; i < kaarten.length; i++) {
//         kaarten[i].addEventListener("click", draaiKaart);
//     }
// }
//
// const maakKaartenArray = () => {
//     kaartenArray = [];
//     let arrayKaarten = [];
//     for(let i = 1; i<global.AANTAL_KAARTEN+1;i++){
//         arrayKaarten.push(global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX);
//     }
//     kaartenArray = [...arrayKaarten, ...arrayKaarten];
//     shuffleArray(kaartenArray);
//     console.log(kaartenArray);
// }
//
// const maakKaartSpel = () => {
//     maakKaartenArray();
//
//     let kaartSpel = document.getElementById("kaartSpel");
//     for(let i = 0; i < kaartenArray.length; i++){
//         let kaartContainer = document.createElement("div");
//         kaartContainer.setAttribute("class", "kaart");
//
//         let voorkantKaart = document.createElement("img");
//         voorkantKaart.setAttribute("class", "voorkant");
//         voorkantKaart.setAttribute("src", kaartenArray[i]);
//         kaartContainer.appendChild(voorkantKaart);
//         voorkantKaart.style.display = "none";
//
//         let achterkantKaart = document.createElement("img");
//         achterkantKaart.setAttribute("class", "achterkant");
//         achterkantKaart.setAttribute("src", "images/achterkant.png");
//         kaartContainer.appendChild(achterkantKaart);
//
//
//         kaartSpel.appendChild(kaartContainer);
//     }
// };
//
// const draaiKaart = (event) =>{
//
//     if(isBusy){return}
//
//     let kaart = event.currentTarget;
//     let voorkant = kaart.getElementsByClassName("voorkant")[0];
//     let achterkant = kaart.getElementsByClassName("achterkant")[0];
//
//     kaart.classList.add("omgedraaid");
//
//     if(kaart.classList.contains("omgedraaid")){
//         achterkant.style.display = "none";
//         voorkant.style.display = "block";
//     } else{
//         voorkant.style.display = "none";
//         achterkant.style.display = "block";
//     }
//     gelijkeKaarten();
// }
//
// const gelijkeKaarten = () => {
//
//     if (isBusy){return}
//
//     let kaarten = document.getElementsByClassName("kaart");
//     let omgedraaideKaarten = [];
//
//     for(let i = 0; i < kaarten.length; i++){
//         if(kaarten[i].classList.contains("omgedraaid")){
//             omgedraaideKaarten.push(kaarten[i]);
//         }
//     }
//
//     if(omgedraaideKaarten.length === 2) {
//         isBusy = true;
//         let kaarten = document.getElementsByClassName("omgedraaid");
//         let kaart1 = omgedraaideKaarten[0];
//         let kaart2 = omgedraaideKaarten[1];
//
//         let voorkant1 = kaart1.getElementsByClassName("voorkant")[0];
//         let voorkant2 = kaart2.getElementsByClassName("voorkant")[0];
//         let achterkant1 = kaart1.getElementsByClassName("achterkant")[0];
//         let achterkant2 = kaart2.getElementsByClassName("achterkant")[0];
//
//
//         if (voorkant1.src === voorkant2.src) {
//             voorkant1.classList.add("juist");
//             voorkant2.classList.add("juist");
//
//             kaart1.removeEventListener("click", draaiKaart);
//             kaart2.removeEventListener("click", draaiKaart);
//
//             setTimeout(() => {
//
//                 voorkant1.style.visibility = "hidden";
//                 voorkant2.style.visibility = "hidden";
//
//                 kaart1.classList.remove("omgedraaid");
//                 kaart2.classList.remove("omgedraaid");
//                 isBusy = false;
//             }, 1000);
//         } else {
//             voorkant1.classList.add("fout");
//             voorkant2.classList.add("fout");
//
//             setTimeout(() => {
//                 achterkant1.style.display = "block";
//                 achterkant2.style.display = "block";
//
//                 voorkant1.style.display = "none";
//                 voorkant2.style.display = "none";
//
//                 kaart1.classList.remove("omgedraaid");
//                 kaart2.classList.remove("omgedraaid");
//                 isBusy = false;
//             }, 1000);
//         }
//     } else{
//         isBusy = false;
//     }
// }
//
// const shuffleArray = (array) => {
//     for(let i = array.length -1;i>0; i--){
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }
//
// window.addEventListener("load", setup);