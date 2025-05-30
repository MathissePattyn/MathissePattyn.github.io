const setup = () => {
    //selecting node
    let p = document.getElementById("para");
    //get node name and type
    console.log(p.nodeName, p.nodeType); //P,1

    //get node name and node type of child node
    console.log(p.firstChild.nodeName, p.firstChild.nodeType);

    console.log(p.firstElementChild.nodeName, p.firstElementChild.nodeType)

    //get node name and type of next sibling
    console.log(p.nextElementSibling.nodeName, p.nextElementSibling.nodeType);
}
window.addEventListener("load", setup);