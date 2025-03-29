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
    btnStart.addEventListener("click", startSpel);


    setInterval(() => {
        console.log("test")
    }, 600);

    global.timeoutId = setInterval(() => {
        verplaatsImg();
    }, global.MOVE_DELAY);
};

let startSpel = () =>{
    global.score = 0;
    let playfield = document.getElementById("playField");

    playfield.innerHTML = "";

    let newDiv = document.createElement("div");
    newDiv.classList.add("playField");

    let newImg = document.createElement("img");
    newImg.setAttribute("src",getRandomImage());
    newImg.setAttribute("alt","target");
    newImg.setAttribute("id","target");

    newDiv.appendChild(newImg);
    playfield.appendChild(newDiv);

    let target = document.getElementById("target");
    target.addEventListener("click", () => {
        if (target.getAttribute("alt") === "bom") {
            alert("Spel over, je hebt de bom geraakt");
        } else {
            global.score++;
            verplaatsImg();
            changeImg();
            console.log(global.score);
        }
    });
};

let verplaatsImg = () => {
    let imgElement = document.getElementById("target");
    let playField = document.getElementById("playField");
    let maxLeft = playField.clientWidth - imgElement.offsetWidth;
    let maxHeight = playField.clientHeight - imgElement.offsetHeight;

    let left = Math.floor(Math.random()*maxLeft);
    let top = Math.floor(Math.random()*maxHeight);
    imgElement.style.left = left+"px";
    imgElement.style.top = top+"px";
}

let changeImg = () => {
    let target = document.getElementById("target");
    let randomImgIndex = Math.floor(Math.random()*global.IMAGE_COUNT);

    target.setAttribute("src", global.IMAGE_PATH_PREFIX + randomImgIndex + global.IMAGE_PATH_SUFFIX);

    if(randomImgIndex === 0){
        target.setAttribute("alt","bom");
    } else{
        target.setAttribute("alt","target");
    }
}

const getRandomImage = () => {
    let randomImgIndex = Math.floor(Math.random() * (global.IMAGE_COUNT - 1)) + 1; // Zorg ervoor dat we niet beginnen met een bom (0)
    return global.IMAGE_PATH_PREFIX + randomImgIndex + global.IMAGE_PATH_SUFFIX;
};
window.addEventListener("load", setup);


