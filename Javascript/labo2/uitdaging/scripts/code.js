const setup = () => {
    let btnZonder = document.getElementById('btnZonder');
    btnZonder.addEventListener('click', zonder);

    let btnMet = document.getElementById('btnMet');
    btnMet.addEventListener('click', met);

}

const met = () => {
    let listItems = document.getElementsByClassName('listItem');
    console.log(listItems[0].className);
    listItems[0].classList.add('metBullets');
    listItems[0].classList.remove('zonderBullets');
    console.log(listItems[0].className);

}

const zonder = () => {
    let listItems = document.getElementsByClassName('listItem');
    console.log(listItems[0].className);
    listItems[0].classList.add('zonderBullets');
    listItems[0].classList.remove("metBullets");
    console.log(listItems[0].className);
}


window.addEventListener("load", setup);