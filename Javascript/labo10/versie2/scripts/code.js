const setup = () => {
    let btnGo = document.getElementById('btnGo');
    btnGo.addEventListener('click', go);

    loadHistory();
}

const go = () => {
    if(validCommand()){
        let commando = slaCommandoOp();
        openCommando(commando.url);

        let card = makeCard(commando.title, commando.text, commando.url);
        addCard(card);
    }
}

const validCommand = () =>{
    let txtCommando = document.getElementById("txtCommando").value;
    let txtPrefix = txtCommando.substring(0,1);
    let zoekSite = txtCommando.substring(1,3);

    if(txtPrefix !== "/"){
        alert("Invalid command");
        return false;
    } else if (zoekSite !== "g " && zoekSite !== "x " && zoekSite !== "i " && zoekSite !== "y "){
        alert("Unknown command prefix");
        return false;
    }

    return true;
}

const slaCommandoOp = () => {
    let txtCommando = document.getElementById("txtCommando").value;
    let zoekSite = txtCommando.substring(1,2);
    let zoekTerm = txtCommando.substring(3).trim();

    let arrayCommandos = JSON.parse(localStorage.getItem("commands")) || [];
    let commando;

    if(zoekSite === "y"){
        commando = {
            title: "youtube",
            text: zoekTerm,
            url: "https://www.youtube.com/results?search_query=" + zoekTerm
        }
    } else if(zoekSite === "i") {
        commando = {
            title: "instagram",
            text: zoekTerm,
            url: "https://www.instagram.com/explore/tags/" + zoekTerm
        }
    } else if(zoekSite === "x") {
        commando = {
            title: "x",
            text: zoekTerm,
            url: "https://x.com/hashtag/" + zoekTerm
        }
    } else{
        commando = {
            title: "google",
            text: zoekTerm,
            url: "https://www.google.com/search?q=" + zoekTerm
        }
    }
    arrayCommandos.push(commando);
    let JSONArray = JSON.stringify(arrayCommandos);
    localStorage.setItem("commands", JSONArray);

    return commando;
}

const openCommando = (url) => {
    window.open(url);
}

const makeCard = (title, text, url) =>{
    let divCol4 = makeElementWithClass("div", "col-4");
    let divCard = makeElementWithClass("div", "card");
    let cardBody = makeElementWithClass("div", "card-body");
    let cardText = makeElementWithClassAndText("p", "card-text", text);
    let cardTitle = makeElementWithClassAndText("h5", "card-title", title);
    let hyperlink = createLinkButton(url);

    cardBody.append(cardTitle);
    cardBody.append(cardText);
    cardBody.append(hyperlink);

    divCard.append(cardBody);

    divCol4.append(divCard);

    return divCol4;

}

const addCard = (divCol4) =>{
    let divRow = document.getElementsByClassName("row")[0];
    divRow.appendChild(divCol4);
}

const loadHistory = () => {
    let arrayCommands = JSON.parse(localStorage.getItem("commands"));
    if(arrayCommands === null){
        return;
    }
    for(let i = 0; i < arrayCommands.length; i++){
        let commando = arrayCommands[i];
        let card = makeCard(commando.title, commando.text, commando.url);
        addCard(card);
    }
}

const makeElementWithClass = (element, className) =>{
    let e = document.createElement(element);
    e.classList.add(className);
    return e;
}

const makeElementWithClassAndText = (element, className, text) =>{
    let e = makeElementWithClass(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
}

const createLinkButton = (url) => {
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href", url);
    linkGo.setAttribute("target", "_blank");
    linkGo.setAttribute("class", "btn btn-primary");
    linkGo.appendChild(document.createTextNode("Go!"));
    return linkGo;
}

window.addEventListener("load", setup);