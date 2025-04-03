let global = {
    AANTAL_KAARTEN : 52,
    IMAGE_PATH_PREFIX : "images/",
    IMAGE_PATH_SUFFIX_CLUBS : "_of_clubs.png",
    IMAGE_PATH_SUFFIX_DIAMONDS : "_of_clubs.png",
    IMAGE_PATH_SUFFIX_HEARTS : "_of_clubs.png",
    IMAGE_PATH_SUFFIX_SPADES : "_of_clubs.png",
};

const setup = () => {

    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", startSpel);


}

const startSpel = () => {
    maakKaartArray();
}

const maakKaartArray = () => {
    let kaartenArray = [];
    for(let i = 0; i<=global.AANTAL_KAARTEN; i++) {
        kaartenArray.push(global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX_CLUBS);
        kaartenArray.push(global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX_DIAMONDS);
        kaartenArray.push(global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX_HEARTS);
        kaartenArray.push(global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX_SPADES);
    }

    console.log(kaartenArray);
}

window.addEventListener("load", setup);