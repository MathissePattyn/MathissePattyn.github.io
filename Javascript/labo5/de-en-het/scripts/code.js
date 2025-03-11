const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    console.log(tekst);
    let deNaarHet = tekst.replaceAll('de', 'het');
    console.log(deNaarHet);
}

window.addEventListener("load", setup);