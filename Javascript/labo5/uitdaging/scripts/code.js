const setup = () => {
    let btnMaakVorm = document.getElementById("btnMaakVorm");
    btnMaakVorm.addEventListener("click", maakVorm);

    let btnBeweeg = document.getElementById("btnBeweeg");
    btnBeweeg.addEventListener("click", beweeg);
}

const maakVorm = () => {
    let breedte = document.getElementById("txtBreedte").value;
    console.log(breedte);
    let hoogte = document.getElementById("txtHoogte").value;
    console.log(hoogte);
    let kleur = document.getElementById("kleur").value;
    console.log(kleur);

    let vorm = document.getElementById("vorm");
    vorm.style.width = breedte + "px";
    vorm.style.height = hoogte + "px";
    vorm.style.backgroundColor = kleur;
    vorm.style.border = "1px solid black";

    vorm.style.position = "absolute";

    return vorm;
}

const beweeg = () => {
    let vorm = maakVorm();
    let waardeNaarRechts = 1000;

    for(let i = 0; i<waardeNaarRechts; i++){
        vorm.style.left = i + "px"
    }
}

window.addEventListener("load", setup);

