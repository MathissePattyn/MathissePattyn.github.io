const setup = () => {
    let btnAppend = document.getElementById("btnAppend");
    btnAppend.addEventListener("click", voegToe);

}

const voegToe = () =>{
    let element = document.createElement("p");
    let div = document.getElementById("myDIV");
    let textNode = document.createTextNode("Hello world");
    element.appendChild(textNode);
    div.appendChild(element);
}
window.addEventListener("load", setup);