const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    console.log(tekst);

    let zoekString = "de";
    let veranderString = "het";
    let index = tekst.indexOf(zoekString);
    while(index !== -1){
        tekst = tekst.slice(0, index) + veranderString + tekst.slice(index + zoekString.length);

        index = tekst.indexOf(zoekString, index + veranderString.length);
    }

    console.log(tekst);


}

window.addEventListener("load", setup);