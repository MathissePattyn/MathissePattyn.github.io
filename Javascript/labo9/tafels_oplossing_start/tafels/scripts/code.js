const setup = () => {
    let go = document.getElementById('btnGo');
    go.addEventListener('click', voegTafelToe);
}

const voegTafelToe = () => {
    const invoer = parseInt(document.getElementById('invoer').value);

    let tabelArray = JSON.parse(localStorage.getItem('tabellen')) || [];

    tabelArray.push({ invoer });
    let JSONArray = JSON.stringify(tabelArray);
    localStorage.setItem('tabellen', JSONArray);


    document.getElementById('invoer').value = ""; // Leeg inputveld

    laadTabellen();
}

const laadTabellen = () => {
    document.querySelector('.tableContainer').innerHTML = "";
    let JSONTabel = localStorage.getItem('tabellen');
    let tabelArray = JSON.parse(JSONTabel);
    for (let i = 0; i < tabelArray.length; i++) {
        maakTabel(tabelArray[i].invoer);
    }
}

const maakTabel = (invoer) => {

    let table = document.createElement('div');
    table.classList.add('tabel');

    // let invoer = invoerOpgeslagenTabellen || document.getElementById('invoer').value;

    maakHeader(table, invoer);
    maakTafels(table, invoer);

    let tableContainer = document.getElementsByClassName("tableContainer")[0];
    tableContainer.appendChild(table);
}

const maakHeader = (tabel, invoer) => {
    let tijdstip = new Date();
    let newDiv = document.createElement("div");
    newDiv.classList.add("header");

    let textNode = document.createTextNode("Tafel van " + invoer +" " +  tijdstip.toLocaleTimeString())
    newDiv.appendChild(textNode);
    tabel.appendChild(newDiv);
}

const maakTafels = (tabel, invoer) => {
    let maxTafels = 10;
    for (let i = 1; i <= maxTafels; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("tafel");
        let textNode = document.createTextNode(invoer + " x " + i + " = " + i * invoer);
        newDiv.appendChild(textNode);
        if(i%2 === 0){
            newDiv.classList.add("even");
        }
        tabel.appendChild(newDiv);
    }

}

window.addEventListener("load", setup);