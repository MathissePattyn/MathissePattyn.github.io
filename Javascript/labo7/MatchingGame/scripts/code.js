let global = {
    AANTAL_HORIZONTAAL : 4,
    AANTAL_VERTICAAL : 3,
    AANTAL_KAARTEN : 6
};

const setup = () => {

    let kaarten = document.getElementsByClassName("kaart");
    for(let i = 0; i < kaarten.length; i++){
        kaarten[i].addEventListener("click", draai);
    }


}

let draai = () => {
    
}

window.addEventListener("load", setup);