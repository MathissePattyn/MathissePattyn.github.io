const setup = () => {
    let btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("click", go);

    maakKaarten();
}

const go = (url) => {
    if(validSearch()){
        let url = slaCommandoOp();
        maakKaarten();
        goToPage(url);
    }
}

const goToPage = (url) => {
    if(url) {
        window.open(url, "_blank");
    }
}

const slaCommandoOp = () => {
    let txtInput = document.getElementById("txtInput");
    let arrayCommandos = JSON.parse(localStorage.getItem("input")) || [];
    let g;
    if (txtInput.value.trim() === "") {
        return;
    }
    let commando = txtInput.value.substring(1, 2);
    let zoekterm = txtInput.value.substring(3).trim();
    if (commando === "g" && zoekterm) {
        g = {
            title: "Google",
            text: zoekterm,
            url: "https://www.google.com/search?q=" + zoekterm
        };

    } else if (commando === "y"&& zoekterm) {
        g = {
            title: "youtube",
            text: zoekterm,
            url: "https://www.youtube.com/results?search_query=" + zoekterm
        };

    } else if (commando === "x"&& zoekterm) {
        g = {
            title: "x",
            text: zoekterm,
            url: "https://x.com/hashtag/" + zoekterm
        };

    } else if (commando ==="i"&& zoekterm){
        g = {
            title: "instagram",
            text: zoekterm,
            url: "https://www.instagram.com/explore/tags/" + zoekterm
        };

    }
    if(g) {
        arrayCommandos.push(g);
        localStorage.setItem("input", JSON.stringify(arrayCommandos));
        txtInput.value = "";
        return g.url;
    }

}

const maakKaarten = () => {
    let containerRow = document.querySelector(".container .row");
    containerRow.innerHTML ="";
    let commandos = JSON.parse(localStorage.getItem("input")) || [];
    for(let i = 0; i < commandos.length; i++) {
        let text = commandos[i].text
        let title = commandos[i].title;
        let url =commandos[i].url;

        let divCol4 = createElementWithClassName("div", "col-4");
        let divCard = createElementWithClassName("div", "card");
        let cardBody = createElementWithClassName("div", "card-body");
        let cardText = createElementWithClassNameAndText("p", "card-text", text);
        let cardTitle = createElementWithClassNameAndText("h5", "card-title", title);
        let ahref = createLinkButton(url);

        if (title === "Google"){
            cardBody.classList.add("google");
        } else if(title === "instagram") {
            cardBody.classList.add("instagram");
        }  else if(title === "x") {
            cardBody.classList.add("x");
        } else{
            cardBody.classList.add("youtube");
        }

        cardBody.appendChild(cardText);
        cardBody.appendChild(ahref);
        cardBody.appendChild(cardTitle);

        divCard.appendChild(cardBody);
        divCol4.appendChild(divCard);
        containerRow.appendChild(divCol4);
    }
}


const validSearch = () => {
    let txtinput = document.getElementById("txtInput").value;
    let substring = txtinput.substring(0,3);

    if (!substring.includes("/")) {
        alert("invalid command");
    } else if ( substring!== "/g " && substring!== "/y "&&
        substring!== "/x " && substring!== "/i ") {
        alert("Unknown command prefix,please use one of the following commands \n"
            + "/g, /y, /x, /i");
        return false;
    }
    return true;
}

const createLinkButton = (url) => {
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href", url);
    linkGo.setAttribute("target", "_blank");
    linkGo.setAttribute("class", "btn btn-primary");
    linkGo.appendChild(document.createTextNode("Go!"));
    return linkGo;
}

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
};

window.addEventListener("load", setup);