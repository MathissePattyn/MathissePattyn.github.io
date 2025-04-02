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
    let arrayKaarten = [];
    for(let i = 1; i<global.AANTAL_KAARTEN+1;i++){
        arrayKaarten.push(global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX);
    }
    kaartenArray = [...arrayKaarten, ...arrayKaarten];
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
    let kaart = event.currentTarget;
    let voorkant = kaart.getElementsByClassName("voorkant")[0];
    let achterkant = kaart.getElementsByClassName("achterkant")[0];

    kaart.classList.add("omgedraaid");

    if(kaart.classList.contains("omgedraaid")){
        achterkant.style.display = "none";
        voorkant.style.display = "block";
    } else{
        voorkant.style.display = "none";
        achterkant.style.display = "block";
    }

    gelijkeKaarten();
}

const gelijkeKaarten = () => {
    let kaarten = document.getElementsByClassName("kaart");
    let omgedraaideKaarten = [];

    for(let i = 0; i < kaarten.length; i++){
        if(kaarten[i].classList.contains("omgedraaid")){
            omgedraaideKaarten.push(kaarten[i]);
        }
    }

    if(omgedraaideKaarten.length === 2){
        let kaart1 = omgedraaideKaarten[0];
        let kaart2 = omgedraaideKaarten[1];

        let voorkant1 = kaart1.getElementsByClassName("voorkant")[0];
        let voorkant2 = kaart2.getElementsByClassName("voorkant")[0];
        let achterkant1 = kaart1.getElementsByClassName("achterkant")[0];
        let achterkant2 = kaart2.getElementsByClassName("achterkant")[0];


        if(voorkant1.src === voorkant2.src){

            voorkant1.classList.add("juist");
            voorkant2.classList.add("juist");

            setTimeout(() => {

                voorkant1.style.visibility = "hidden";
                voorkant2.style.visibility = "hidden";

                kaart1.classList.remove("omgedraaid");
                kaart2.classList.remove("omgedraaid");

            },1000);
        } else{
            voorkant1.classList.add("fout");
            voorkant2.classList.add("fout");

            setTimeout(() => {
                achterkant1.style.display = "block";
                achterkant2.style.display = "block";

                voorkant1.style.display = "none";
                voorkant2.style.display = "none";

                kaart1.classList.remove("omgedraaid");
                kaart2.classList.remove("omgedraaid");
            }, 1000)
        }
    }
}

window.addEventListener("load", setup);