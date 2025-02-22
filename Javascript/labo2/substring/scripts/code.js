const setup = () => {
    let btnSubstring = document.getElementById('btnSubstring');
    btnSubstring.addEventListener('click', substring);

}

const substring = () =>{
    let txtNaam = document.getElementById('txtNaam');
    let getalLinks = document.getElementById('getalLinks');
    let getalRechts = document.getElementById('getalRechts');

    let g1 = parseInt(getalLinks.value);
    let g2 = parseInt(getalRechts.value);
    let stringNaam = txtNaam.value;

    let subStringNaam = stringNaam.substring(g1, g2);

    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerHTML=subStringNaam;


}

window.addEventListener("load", setup);