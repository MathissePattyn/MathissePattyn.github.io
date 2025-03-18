const setup = () => {
    let btnScheiden = document.getElementById("btnScheiden");
    btnScheiden.addEventListener("click", scheidenMetSpaties);
}

const scheidenMetSpaties = () => {

    let tekstElement = document.getElementById("txtOutput");
    let tekst = tekstElement.value
    maakMetSpaties(tekst);

}

const maakMetSpaties = (inputText) =>{
    let woorden = inputText.split(" ");
    console.log(woorden);
    let samengeplakt = woorden.join("");
    console.log(samengeplakt);
    let gescheiden = samengeplakt.split("").join(" ");
    console.log(gescheiden);

}

window.addEventListener("load", setup);