const setup = () => {

    let newDiv = document.createElement("div");
    newDiv.classList.add("playField");

    let newImg = document.createElement("img");
    newImg.setAttribute("src","Javascript/labo7/BeginSituatie_HitAnObject/images/0.png");
    newImg.setAttribute("alt","bom");

    newDiv.appendChild(newImg);



};




window.addEventListener("load", setup);


