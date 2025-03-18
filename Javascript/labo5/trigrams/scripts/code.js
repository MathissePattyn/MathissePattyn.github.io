const setup = () => {
    let btnTrigram = document.getElementById('btnTrigram');
    btnTrigram.addEventListener('click',toonTrigram);

}

const trigram = () => {
  let woordElement = document.getElementById('txtOutput');
  let woord = woordElement.value;
  let result = [];
  let trigram;

    for (let i = 0; i<=woord.length-3; i++){
        trigram = woord.slice(i, i+3);
        result.push(trigram);
        console.log(trigram);
    }
    console.log(result);
    return result;
}

const toonTrigram = () => {
    let output ="";
    let trigrams = trigram();
    for (let i = 0; i<trigrams.length; i++) {
        output+="<li>"+trigrams[i]+"</li>";
    }

    let lstTrigrams = document.getElementById('lstTrigrams');
    lstTrigrams.innerHTML = output;

}

window.addEventListener("load", setup);