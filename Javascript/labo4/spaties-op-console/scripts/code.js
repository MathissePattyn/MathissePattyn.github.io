const setup = () => {
    let btnScheiden = document.getElementById("btnScheiden");
    btnScheiden.addEventListener("click", scheidenMetSpaties);
}

const scheidenMetSpaties = () => {
    // let tekst = document.getElementById("txtOutput").value;
    // console.log(tekst);
    //
    // let woorden = tekst.split(" ");
    // console.log(woorden);
    //
    // let samengeplakt = "";
    // for (let i = 0; i < woorden.length; i++) {
    //     samengeplakt = samengeplakt.concat(woorden[i]);
    // }
    // console.log(samengeplakt);
    //
    // let gescheiden = samengeplakt.split("").join(" ");
    // console.log(gescheiden);

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