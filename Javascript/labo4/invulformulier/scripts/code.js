const setup = () => {
    let btnSubmit = document.getElementsByName("submit");
    btnSubmit.addEventListener("click", submit);
}


window.addEventListener("load", setup);