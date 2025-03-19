const setup = () => {
    // let lstQuery = document.querySelectorAll("p");
    // for (let i = 0; i < lstQuery.length; i++) {
    //     lstQuery[i].addEventListener("click", changeP);
    //     }

    let par = document.querySelectorAll("p");
    y = par.childNodes[i];
    par.removeChild(y);
    let txtNode = document.createTextNode("Good job");
    par.appendChild(txtNode);
}

// const changeP = (event) => {
//     event.target.innerHTML = "Good job";
// }
