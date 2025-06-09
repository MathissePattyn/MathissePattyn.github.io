const setup = () => {

    let keuze = document.getElementById("keuze");
    keuze.addEventListener("change", toonFoto);

    let txtLetter = document.getElementById("txtLetter");
    txtLetter.addEventListener("change", telLetter);

}

const toonFoto = () => {
    let keuze = document.getElementById("keuze");
    let img = document.getElementById("img");
    let selectedIndex = keuze.selectedIndex;

    if(selectedIndex === 1) {
        img.setAttribute("src", "images/with-egg.png");
        img.style.visibility = "visible";
        img.classList.add("met");
    } else if(selectedIndex === 2) {
        img.setAttribute("src", "images/without-egg.png");
        img.style.visibility = "visible";
        img.classList.add("zonder");
    } else {
        img.style.visibility = "hidden";
    }

    let txtZin = document.getElementById("txtZin");
    txtZin.innerHTML = "";

    if (img.classList.contains("zonder")) {
        let txtZonder = createElement("h1","ZIN","Hierboven een kip zonder ei.");
        txtZin.appendChild(txtZonder);
    } else if (img.classList.contains("met")) {
        let met = createElement("h1","ZIN","Hierboven een kip met ei.");
        txtZin.appendChild(met);
    }

}

const telLetter = () => {
    if(document.querySelector(".ZIN")) {
        let teller = 0;
        let txtZin = document.querySelector(".ZIN").innerText.toLowerCase();
        let txtLetter = document.getElementById("txtLetter").value;

        for(let i = 0; i<=txtZin.length-1;i++){
            if(txtZin[i] === txtLetter){
                teller++;
            }
        }
        let note = document.getElementById("note");
        note.innerHTML = "De letter kwam " + teller + " keer voor";
    }
}

const createElement = (element, className = "", text="") => {
    let e = document.createElement(element);
    if (className) {
        className.split(" ").forEach(className => e.classList.add(className));
    }
    if(text) {
        e.textContent = text;
    }
    return e;
}































// const setup = () => {
//     let metEi = "Hierboven, een kip met een ei";
//     let zonderEI = "Hierboven, een kip zonder een ei";
//     let keuze = document.getElementById("keuze");
//     keuze.addEventListener("click", toonFoto);
//
//
//     let note = document.getElementById("note");
//     let txtLetter = document.getElementById("txtLetter");
//     let letter = txtLetter.value;
//     let teller = 0;
//     for (let i = 0; i <note.length ; i++) {
//         let zin = note[i].textContent;
//
//         let index = zin.indexOf(letter);
//         while(index !== -1){
//             teller++;
//             index = zin.indexOf(note[i], index +1);
//         }
//
//         note.innerHTML = "De letter kwam " + teller + " keer voor";
//     }
// }
//
// const toonFoto = () => {
//     let img = document.getElementById("img");
//     let keuze = document.getElementById("keuze");
//     let selectedIndex = keuze.selectedIndex;
//     let note = document.getElementById('note');
//
//     if (selectedIndex === 1) {
//         let img = document.getElementById("img");
//         img.src = "with-egg.png";
//         img.alt = "met een ei";
//         note.innerHTML = "Hierboven, een kip met een ei"
//     } else if (selectedIndex === 2) {
//         img.src = "without-egg.png";
//         img.alt = "Zonder een ei";
//         note.innerHTML = "Hierboven, een kip zonder een ei"
//     } else{
//         note.innerHTML = "";
//     }
//
//
//
// }

window.addEventListener("load", setup);