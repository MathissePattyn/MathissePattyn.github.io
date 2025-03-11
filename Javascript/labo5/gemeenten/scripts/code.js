const setup = () => {
    let gemeenten = [];
    let stad;

    while(true){
        let message = 'gemeente: '
        stad = prompt(message);
        if(stad !== 'stop'){
            gemeenten.push(stad);
            console.log(stad);
        } else {
            break;
        }

        console.log(gemeenten.sort((a, b) => a.localeCompare(b)));

        const selectGemeenten = document.getElementById('selectGemeenten');
        selectGemeenten.innerHTML = '';

        gemeenten.forEach((gemeente) => {
            selectGemeenten.innerHTML += `<option value="${gemeente}">${gemeente}</option>`;
        })

    }
}

window.addEventListener("load", setup);