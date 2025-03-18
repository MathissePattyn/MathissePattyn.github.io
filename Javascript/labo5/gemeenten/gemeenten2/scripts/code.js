const setup = () => {
    let gemeenten = [];
    let gemeente = prompt('Enter gemeente');

    while (gemeente !== 'stop'){
        gemeenten.push(gemeente);
        gemeente = prompt('Enter gemeente');
        let list = document.getElementById('selectGemeenten');
        list.innerHTML += `<option value="${gemeente}">${gemeente}</option>`;
    }
}

window.addEventListener("load", setup);