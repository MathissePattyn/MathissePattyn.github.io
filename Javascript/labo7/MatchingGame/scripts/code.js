let global = {
    AANTAL_HORIZONTAAL : 4,
    AANTAL_VERTICAAL : 3,
    AANTAL_KAARTEN : 6,
    IMAGE_PATH_PREFIX: "images/kaart",
    IMAGE_PATH_SUFFIX: ".png"

};

const setup = () => {

    toonKaarten();

    // let kaarten = document.getElementsByClassName("kaart");
    // for(let i = 0; i < kaarten.length; i++){
    //     kaarten[i].addEventListener("click", draai);
    // }


}

let toonKaarten = () => {

    //STOP DE KAARTEN IN EEN ARRAY
    let arrayKaarten = [];
    for (let i = 1; i < global.AANTAL_KAARTEN+1; i++) {
        arrayKaarten.push(global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX);
    }
    console.log(arrayKaarten);

    //TOON DE ACHTERKANTEN VAN DE KAARTEN



    //TOON DE KAARTEN (WILLEKEURIG) OP HET SCHERM

        //MAAK EEN NIEUW DIV ELEMENT VOOR IEDERE KAART MET EEN IMG ELEMENT

    //TOON DE ACHTERKANTEN VAN DE KAARTEN

    let kaartspel = document.getElementsByClassName("kaartspel")[0];
    let aantalKaarten = 0;
    while(aantalKaarten < 12){
        for(let i = 1; i < arrayKaarten.length+1; i++){
            let newDiv = document.createElement("div");
            newDiv.classList.add("kaart");
            kaartspel.appendChild(newDiv);
            let kaartImg = document.createElement("img");
            let kaartAchterkant = document.createElement("img");
            kaartImg.setAttribute("src",global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX);
            kaartAchterkant.setAttribute("src", "Javascript/labo7/MatchingGame/images/achterkant.png");
            newDiv.appendChild(kaartImg);
            aantalKaarten++;
        }
    }


}

// let draai = () => {
//     let kaarten = document.getElementsByClassName("kaart");
//     for(let i = 0; i < kaarten.length; i++){
//         kaarten[i].setAttribute("src", )
//     }
// }

window.addEventListener("load", setup);