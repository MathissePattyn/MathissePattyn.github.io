const setup = () => {
    let btnTrigram = document.getElementById('btnTrigram');
    btnTrigram.addEventListener('click', trigram);
}

const trigram = () => {
  let woordElement = document.getElementById('txtOutput');
  let woord = woordElement.value;

    for (let i = 0; i<=woord.length-3; i++){
        let slice = woord.slice(i, i+3);
        console.log(slice);
    }
}


window.addEventListener("load", setup);