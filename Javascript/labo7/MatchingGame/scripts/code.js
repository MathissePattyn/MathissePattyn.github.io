let global = {
    AANTAL_HORIZONTAAL : 4,
    AANTAL_VERTICAAL : 3,
    AANTAL_KAARTEN : 6,
    IMAGE_PATH_PREFIX: "images/kaart",
    IMAGE_PATH_SUFFIX: ".png"

};

let aantalKaarten =0;

let isBusy = false;

const setup = () => {

    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", startSpel);

    let btnOpnieuw = document.getElementById("btnOpnieuw");
    btnOpnieuw.addEventListener("click", speelOpnieuw)

}

const startSpel = () => {

    let btnStart = document.getElementById("btnStart");
    btnStart.remove();

    toonKaarten();

        let kaarten = document.getElementsByClassName("kaart");
        for (let i = 0; i < kaarten.length; i++) {
            kaarten[i].addEventListener("click", draaiKaart);
        }
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Wissel elementen
    }
};

const toonKaarten = () => {

    //STOP DE KAARTEN IN EEN ARRAY
    let arrayKaarten = [];
    for (let i = 1; i < global.AANTAL_KAARTEN+1; i++) {
        arrayKaarten.push(global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX);
    }
    console.log(arrayKaarten);

    let kaartenArray = [...arrayKaarten, ...arrayKaarten];
    shuffleArray(kaartenArray);
    console.log(kaartenArray);


    let kaartspel = document.getElementsByClassName("kaartspel")[0];

    kaartenArray.forEach((kaartPad) =>{
        let newDiv = document.createElement("div");
        newDiv.classList.add("kaart");

        //CONTAINER VOOR VOOR-ACHTERKANT
        let kaartContainer = document.createElement("div");
        kaartContainer.classList.add("kaartContainer");

        //ACHTERKANT KAART
        let kaartAchterkant = document.createElement("img");
        kaartAchterkant.setAttribute("src", "images/achterkant.png");
        kaartAchterkant.classList.add("achterkant");
        kaartContainer.appendChild(kaartAchterkant);

        //VOORKANT KAART
        let kaartImg = document.createElement("img");
        kaartImg.setAttribute("src",kaartPad);
        kaartImg.style.display = "none";
        kaartImg.classList.add("voorkant");
        kaartContainer.appendChild(kaartImg);

        //VOEG KAART CONTAINER TOE AAN DE DIV
        newDiv.appendChild(kaartContainer);

        //VOEG DIV TOE AAN HET KAARTSPEL + VERHOOG AANTAL KAARTEN
        kaartspel.appendChild(newDiv);
        aantalKaarten++;

    });

}

const draaiKaart = (event) =>{

    if(isBusy)return;

    //NEEM DE GEKLIKTE KAART
    let kaart = event.currentTarget;
    let achterkant = kaart.getElementsByClassName("achterkant")[0];
    let voorkant = kaart.getElementsByClassName("voorkant")[0];

    //VOEG EEN KLASSE OMGEDRAAID TOE
    kaart.classList.add("omgedraaid");

    //ZOEK DE KLASSE OMGEDRAAID EN WISSEL DE VOOR EN ACHTERKANT
    if(kaart.classList.contains("omgedraaid")){
        voorkant.style.display = "block";
        achterkant.style.display = "none";
    } else {
        voorkant.style.display = "none";
        achterkant.style.display = "block";
    }

    //BEKIJK OF DE OMGEDRAAIDE KAARTEN GELIJK ZIJN
    gelijkeKaarten();
}

const gelijkeKaarten = () => {

    if (isBusy) return;

    isBusy = true;

    //STOP DE OMGEDRAAIDE KAARTEN IN EEN ARRAY
    let kaart = document.getElementsByClassName("kaart");
    let omgedraaideKaarten = [];

    for (let i = 0; i < kaart.length; i++) {
        if (kaart[i].classList.contains("omgedraaid") && !kaart[i].classList.contains("juist")) {
            omgedraaideKaarten.push(kaart[i]);
        }
    }

    if (omgedraaideKaarten.length === 2) {
        let kaart1 = omgedraaideKaarten[0];
        let kaart2 = omgedraaideKaarten[1];

        let voorkantKaart1 = kaart1.getElementsByClassName("voorkant")[0];
        let voorkantKaart2 = kaart2.getElementsByClassName("voorkant")[0];
        let achterkantKaart1 = kaart1.getElementsByClassName("achterkant")[0];
        let achterkantKaart2 = kaart2.getElementsByClassName("achterkant")[0];

        if (voorkantKaart1.src === voorkantKaart2.src) {
            kaart1.classList.add("juist");
            kaart2.classList.add("juist");

            kaart1.removeEventListener("click", draaiKaart);
            kaart2.removeEventListener("click", draaiKaart);

            kaart1.style.pointerEvents = "none";
            kaart2.style.pointerEvents = "none";

            setTimeout(() => {
                kaart1.classList.remove("omgedraaid");
                kaart2.classList.remove("omgedraaid");
                kaart1.style.visibility = "hidden";
                kaart2.style.visibility = "hidden";
                isBusy = false;
                aantalKaarten -= 2;
                console.log("Aantal kaarten in het spel: " + aantalKaarten);

                if(aantalKaarten === 0){
                    document.getElementById("btnOpnieuw").style.display = "block";
                }
            }, 1000);
        } else {
            kaart1.classList.add("fout");
            kaart2.classList.add("fout");

            setTimeout(() => {
                kaart1.classList.remove("omgedraaid");
                kaart2.classList.remove("omgedraaid");
                voorkantKaart1.style.display = "none";
                voorkantKaart2.style.display = "none";
                achterkantKaart1.style.display = "block";
                achterkantKaart2.style.display = "block";

                kaart1.classList.remove("fout");
                kaart2.classList.remove("fout");

                isBusy = false;
            }, 1000);
        }
    } else{
        isBusy = false;
    }
}

const speelOpnieuw = () => {
    document.getElementById("btnOpnieuw").style.display = "none";
    let kaartspel = document.getElementsByClassName("kaartSpel")[0];
    kaartspel.innerHTML= "";

    toonKaarten();

    let kaarten = document.getElementsByClassName("kaart");
    for (let i = 0; i < kaarten.length; i++) {
        kaarten[i].addEventListener("click", draaiKaart);
    }


}


window.addEventListener("load", setup);