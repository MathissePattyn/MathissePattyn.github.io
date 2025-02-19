const setup = () => {
    let familieLeden = ['1','2','3','4','5'];

    console.log(familieLeden.length);

    for (let i=0; i<familieLeden.length; i++){
        if ((familieLeden[i]%2) !== 0)
        console.log(familieLeden[i]);
    }
    let message = "Voeg een naam in";

    let naam = prompt(message, String);

    const voegNaamToe = (familieLeden) => {
        familieLeden.push(naam);
    }

    voegNaamToe(familieLeden);

    for (let i=0; i<familieLeden.length; i++){
            console.log(familieLeden[i]);
    }

    for (let i=0; i<familieLeden.length; i++){
        console.log("Familielid " +familieLeden[i]);
    }
    familieLeden.join(" - ");
}


window.addEventListener("load", setup);