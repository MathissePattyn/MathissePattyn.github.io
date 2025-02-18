const setup = () => {
    let btnZonder = document.getElementById('btnZonder');
    btnZonder.addEventListener('click', zonder);

    let btnMet = document.getElementById('btnMet');
    btnMet.addEventListener('click', met);

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

const met = () => {
    let listItems = document.getElementsByClassName('listItem');
    console.log(listItems[0].className);
    listItems[0].classList.add('listItem');
    listItems[0].classList.remove('zonderBullets');
    console.log(listItems[0].className);

}

const zonder = () => {
    let listItems = document.getElementsByClassName('listItem');
    console.log(listItems[0].className);
    listItems[0].classList.add('zonderBullets');
    console.log(listItems[0].className);
}


window.addEventListener("load", setup);