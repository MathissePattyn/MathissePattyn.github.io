const setup = () => {

    /*let lblCursus= document.getElementById("lblCursus");
    lblCursus.className = "cursus";*/

    let lblCursus = document.getElementById('lblCursus');
    lblCursus.addEventListener("mouseover", change);

    let btnSend = document.getElementById('btnSend');
    btnSend.addEventListener("click", show);
}

const show = () =>{
    console.log("show");

    let txtName = document.getElementById('txtName');

    /* !== (strike vergelijking)
       != vergelijkt 2 waarden zonder rekening te houden met hun type
     */

    if(txtName.value !== "") {
        alert("Jouw naam is " + txtName.value);

        console.log("Jouw naam is " + txtName.value);

        console.log(`Jouw naam is ${txtName.value}`);
    } else{
        alert("Gelieve naam in te vullen");
    }
}

const change = () =>{
    let lblCursus = document.getElementById('lblCursus');
    lblCursus.className = "cursus";
}




window.addEventListener("load", setup);