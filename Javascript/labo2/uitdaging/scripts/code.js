const setup = () => {
    let btnZonder = document.getElementById('btnZonder');
    btnZonder.addEventListener('click', zonderBulletpoints);

    let btnMet = document.getElementById('btnMet');
    btnMet.addEventListener('click', metBulletpoints);

}

const zonderBulletpoints = () => {
    let listItem = document.getElementsByClassName('listItem');
    for (let item of listItem) {
        item.className = "zonderBullets"
    }

}

const metBulletpoints = () => {
    let zonderBullets = document.getElementsByClassName('zonderBullets');
    for (let item of zonderBullets) {
        item.className = "listItem";
    }
}


window.addEventListener("load", setup);