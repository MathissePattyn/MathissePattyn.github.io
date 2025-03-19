const setup = () => {
    let metEi = "Hierboven, een kip met een ei";
    let zonderEI = "Hierboven, een kip zonder een ei";
    let keuze = document.getElementById("keuze");
    keuze.addEventListener("click", toonFoto);


    let note = document.getElementById("note");
    let txtLetter = document.getElementById("txtLetter");
    let letter = txtLetter.value;
    let teller = 0;
    for (let i = 0; i <note.length ; i++) {
        let zin = note[i].textContent;

        let index = zin.indexOf(letter);
        while(index !== -1){
            teller++;
            index = zin.indexOf(note[i], index +1);
        }

        note.innerHTML = "De letter kwam " + teller + " keer voor";
    }
}

const toonFoto = () => {
    let img = document.getElementById("img");
    let keuze = document.getElementById("keuze");
    let selectedIndex = keuze.selectedIndex;
    let note = document.getElementById('note');

    if (selectedIndex === 1) {
        let img = document.getElementById("img");
        img.src = "with-egg.png";
        img.alt = "met een ei";
        note.innerHTML = "Hierboven, een kip met een ei"
    } else if (selectedIndex === 2) {
        img.src = "without-egg.png";
        img.alt = "Zonder een ei";
        note.innerHTML = "Hierboven, een kip zonder een ei"
    } else{
        note.innerHTML = "";
    }



}

window.addEventListener("load", setup);