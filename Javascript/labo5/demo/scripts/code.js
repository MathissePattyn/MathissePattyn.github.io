const setup = () => {
    let imgPhoto = document.getElementById('imgPhoto');
    imgPhoto.addEventListener('mouseover', changePhoto);
}

const changePhoto = () => {
    let photo = document.getElementById('imgPhoto');
    photo.src = "./images/foto2.png";
    photo.alt = "test";
    photo.className = "sizePhoto";
    document.getElementById("txtText").innerHTML = "TESTTT"
}

window.addEventListener("load", setup);