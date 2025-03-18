const setup = () => {
    let btnTrigram = document.getElementById("btnTrigram");
    btnTrigram.addEventListener("click", maakTrigram)
}

const maakTrigram = () => {
    let txtWoord = document.getElementById("txtOutput");
    let woord = txtWoord.value;
    console.log(woord);

    for (let i = 0; i<=woord.length-3; i++){
        let trigram = woord.slice(i, i+3);
        console.log(trigram);
    }
}

window.addEventListener("load", setup);