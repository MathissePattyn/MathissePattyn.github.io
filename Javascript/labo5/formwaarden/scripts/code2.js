const setup = () => {
    let btnToon = document.getElementById("btnToon");
    btnToon.addEventListener("click", toon)
}

const toon = () =>{
    let isRoker = document.getElementById("chkIsRoker");
    if(isRoker.checked){
        console.log("is roker");
    } else{
        console.log("is geen roker");
    }

    let moedertaal = document.getElementsByName('rbtMoedertaal');
    for (let i = 0; i < moedertaal.length; i++) {
        if (moedertaal[i].checked){
            console.log("moedertaal: " + moedertaal[i].value);
            break;
        }
    }

    let buurland = document.getElementById("selFavorieteBuurland")
    let selectedIndex = buurland.selectedIndex;
    let option = buurland.options[selectedIndex];
    console.log(option.text);

    let selBestelling = document.getElementById('selBestelling');
    for (let i = 0; i < selBestelling.length; i++) {
        if(selBestelling.options[i].selected){
            console.log("Bestelling: " + selBestelling.options[i].value);
        }
    }
}

window.addEventListener("load", setup);