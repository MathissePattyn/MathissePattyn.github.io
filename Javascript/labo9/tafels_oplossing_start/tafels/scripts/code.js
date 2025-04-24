const setup = () => {
    let go = document.getElementById('btnGo');
    go.addEventListener('click', maakTabel);
}


const maakTabel = () => {

    let tabellen = document.getElementsByClassName("tabel");
    let opgeslagenTabellen = [];
    for(let i = 0; i < tabellen.length; i++) {
        let header = tabellen[i].getElementsByClassName("header")[0].textContent;
        let delen = header.split(" ");
        let invoer = parseInt(delen[2]);
        opgeslagenTabellen.push({
            invoer: invoer,
            header: header
        })
        // verwijderAlleChildren(tabellen[i]);
    }

    let JSONTabel = JSON.stringify(opgeslagenTabellen);

    localStorage.setItem("tabellen", JSONTabel);

    let table = document.createElement('div');
    table.classList.add('tabel');

    let invoer = document.getElementById('invoer');

    maakHeader(table);
    maakTafels(table);

    let tableContainer = document.getElementsByClassName("tableContainer")[0];
    tableContainer.appendChild(table);
    invoer.value = "";
}

const maakHeader = (tabel) => {
    let invoer = document.getElementById("invoer").value;

    let tijdstip = new Date();
    let newDiv = document.createElement("div");
    newDiv.classList.add("header");

    let textNode = document.createTextNode("Tafel van " + invoer +" " +  tijdstip.toLocaleTimeString())
    newDiv.appendChild(textNode);
    tabel.appendChild(newDiv);
}

const maakTafels = (tabel) => {
    let invoer = document.getElementById("invoer").value;
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

const verwijderAlleChildren = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

}

window.addEventListener("load", setup);