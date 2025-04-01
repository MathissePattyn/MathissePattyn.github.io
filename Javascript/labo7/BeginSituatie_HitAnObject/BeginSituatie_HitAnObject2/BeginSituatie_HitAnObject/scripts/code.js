let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {

    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", start);


};

let start = () => {
    let playField = document.getElementById("playField");
    let img = document.createElement("img");
    img.setAttribute("src", getRandomImage());
    img.setAttribute("alt", "afbeelding");
    img.setAttribute("id","afbeelding");
    playField.appendChild(img);

    let afbeelding = document.getElementById("afbeelding");
    afbeelding.addEventListener("click", () => {
        if(img.alt === "bom"){
            alert("Spel over, je hebt de bom geraakt");
            img.remove();
        } else{
            verplaatsImg();
            changeImg();
        }
    })


};

let verplaatsImg = () => {
    let imgElement = document.getElementById("afbeelding");
    let playField = document.getElementById("playField");


    let left = Math.floor(Math.random() * (playField.clientWidth - imgElement.offsetWidth));
    let top = Math.floor(Math.random() * (playField.clientHeight - imgElement.offsetHeight));

    imgElement.style.left = left+"px";
    imgElement.style.top = top+"px";
};

let getRandomImage = () => {
    let random = Math.floor(Math.random() * (global.IMAGE_COUNT-1)) + 1;
    return global.IMAGE_PATH_PREFIX + random + global.IMAGE_PATH_SUFFIX;
};

let changeImg = () => {
    let img = document.getElementById("afbeelding")
    let random = Math.floor(Math.random()*global.IMAGE_COUNT);
    img.setAttribute("src", global.IMAGE_PATH_PREFIX + random + global.IMAGE_PATH_SUFFIX);
    if(random===0){
        img.setAttribute("alt","bom");
    } else{
        img.setAttribute("alt", "afbeelding");
    }
}


window.addEventListener("load", setup);


