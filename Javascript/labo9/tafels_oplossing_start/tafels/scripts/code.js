const setup = () => {
    let go = document.getElementById('btnGo');
    go.addEventListener('click', maakTabel);
}


const maakTabel = () => {
    let table = document.createElement('div');
    table.classList.add('tabel');

    let invoer = document.getElementById('invoer');

    maakHeader(table);
    maakTafels(table);

    document.body.appendChild(table);
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
        let textNode = document.createTextNode(invoer + " x " + i + " = " + i * invoer);
        newDiv.appendChild(textNode);
        if(i%2 === 0){
            newDiv.classList.add("even");
        }
        tabel.appendChild(newDiv);
    }
}

window.addEventListener("load", setup);