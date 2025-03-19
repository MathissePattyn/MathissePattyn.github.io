const setup = () => {
    let lstItems = document.querySelectorAll('li');
    for (let i = 0; i < lstItems.length; i++) {
        lstItems[i].setAttribute("class","listItem")
    }
    let img = document.createElement("img");

    img.setAttribute("src","workshopbusiness.jpg")
    img.setAttribute("alt","foto.jpg")
    document.body.appendChild(img);
}

window.addEventListener("load", setup);

// • Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for
//     "listitem" to make the color red.
// • Create a new img element and set its src attribute to a picture of you. Append that element to
// the page.