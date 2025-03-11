const setup = () => {
    let btnResultaat = document.getElementById('btnResultaat');
    btnResultaat.addEventListener('click', toonResultaat);
}

const toonResultaat = () => {
    let roker = document.getElementsByName('roker')[0].checked ?'ja':'nee';

    let moedertaal = 'geen keuze';
    let keuzeMoedertaal = document.getElementsByName('moedertaal');
    for (let i = 0; i < keuzeMoedertaal.length; i++) {
        if (keuzeMoedertaal[i].checked){
            moedertaal = keuzeMoedertaal[i].value;
            break;
        }
    }

    let buurlandSelect = document.getElementsByName('favoriteBuurland')[0];
    let buurland = buurlandSelect.options[buurlandSelect.selectedIndex].value;


    let bestellingSelect = document.getElementsByName('bestelling')[0];
    let bestelling = [];
    for(let i = 0; i < bestellingSelect.options.length; i++){
        if(bestellingSelect.options[i].selected){
            bestelling.push(bestellingSelect.options[i].value);
        }
    }


    console.log('is roker: ', roker);
    console.log('Moedertaal: ', moedertaal);
    console.log('Favoriete buurland: ', buurland);
    console.log('Bestelling: ', bestelling);

}


window.addEventListener("load", setup);