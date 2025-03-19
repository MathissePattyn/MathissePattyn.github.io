const setup = () => {
    let p = document.getElementById('abc');
    console.log(p.nodeName, p.nodeType)
}
window.addEventListener("load", setup);