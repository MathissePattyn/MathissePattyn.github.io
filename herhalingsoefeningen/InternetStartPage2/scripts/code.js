const setup = () => {
    let btnGo = document.getElementById('btnGo');
    btnGo.addEventListener('click', slaCommandoOp)

    laadCards();
}


const laadCards = () => {
    let cards = JSON.parse(localStorage.getItem("commands")) || [];
    console.log(cards);
    for(let i = 0; i < cards.length; i++){
        let title = cards[i].title;
        let text = cards[i].text;
        let url = cards[i].url;
        maakCard(title, text, url);
    }
}

const slaCommandoOp = () => {
    let txtCommando = document.getElementById('txtCommando').value;
    let zoekPagina = txtCommando.substring(1,2);
    let text = txtCommando.substring(3).trim();
    let search = text.replace(/ /g, "+");


    let title ="";
    let url ="";

    if(zoekPagina === "y"){
        title = "youtube";
        url = "youtube.com/results?search_query=" + search;
    } else if(zoekPagina === "i"){
        title = "instagram";
        url = "instagram.com/explore/tags/" + search;
    } else if(zoekPagina === "x"){
        title = "twitter";
        url = "x.com/hashtag/" + search;
    } else if(zoekPagina === "g"){
        title = "google";
        url = "https://www.google.com/search?q=" + search;
    }

    let nieuwCommando = {
        title: title,
        text: text,
        url: url
    }

    let bestaande = JSON.parse(localStorage.getItem("commands")) || [];
    bestaande.push(nieuwCommando)
    let JSONInfo = JSON.stringify(bestaande);
    localStorage.setItem("commands", JSONInfo);

    maakCard(title, text, url);
}

const maakCard = (title, text, url) => {
    let history = document.getElementById("history");
    let card = createElementWithClasses("div", "card","");
    let cardBody = createElementWithClasses("div", "card-body", "");
    let cardTitle = createElementWithClasses("h5", "card-title", title);
    let cardText = createElementWithClasses("p","card-text", text);

    cardBody.append(cardTitle);
    cardBody.append(cardText);
    card.append(cardBody);
    history.append(card);
}

const createElementWithClasses = (element, className="", text="") => {
    let e = document.createElement(element);
    if (className) {
        className.split(' ').forEach(className => e.classList.add(className));
    }
    if (text) {
        e.textContent = text;
    }
    return e;
}



window.addEventListener("load", setup);