const setup = () => {
    laadTaken();
    setupEventListeners();
}

const setupEventListeners = () => {
    let btnVoegToe = document.getElementById('btnVoegToe');
    btnVoegToe.addEventListener('click', voegTaakToe);
    document.querySelectorAll('.column').forEach(col => {
        const status = col.dataset.status;
        //Het dragover-event wordt geactiveerd wanneer een gesleept element over een geldig dropgebied beweegt
        //Zonder het dragover-event kunnen we het drop-event niet uitvoeren. Dit is omdat de standaard browseractie voor
        // het dragover-event niet toestaat dat de gebruiker iets daadwerkelijk "dropt".
        //Om de drop-actie toe te staan, moet je e.preventDefault() aanroepen in de dragover-event handler. H
        // ierdoor wordt de standaard browseractie (die het droppen verhindert) voorkomen.
        //Wanneer een gebeurtenis (zoals click, submit, dragover, enz.) plaatsvindt, heeft de browser daar vaak een standaardgedrag aan gekoppeld.
        // Soms wil je dat standaardgedrag overschrijven — dan gebruik je preventDefault().
        col.addEventListener('dragover', e => e.preventDefault());
        col.addEventListener('drop', e => handleDrop(e, status));
    });

}

const handleDrop = (e, status) => {
    e.preventDefault();
    let taskId = e.dataTransfer.getData("text/plain");
    let taskElement = document.getElementById(taskId);
    console.log(taskElement);

    taskElement.dataset.status = status;

    // const id = e.dataTransfer.getData("text");

    let taken = JSON.parse(localStorage.getItem('taken')) || [];
    let taskIndex = taken.findIndex(task => task.id === taskElement.id);
    if(taskIndex !== -1){
        taken[taskIndex].status = status;
        localStorage.setItem('taken', JSON.stringify(taken));
    }


    e.currentTarget.appendChild(taskElement);
}

const voegTaakToe = () => {
    let todo = document.getElementById('todo');
    let status = todo.dataset.status;

    let kaart = maakKaart(status);

    todo.appendChild(kaart);
}


const maakKaart = (status) => {

    let titel = document.getElementById('titel');
    let omschrijving = document.getElementById('omschrijving');

    let pTitel = document.createElement("p");
    let pOmschrijving = document.createElement("p");

    let txtTitel = document.createTextNode(titel.value);
    let txtOmschrijving = document.createTextNode(omschrijving.value);

    let taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    pTitel.appendChild(txtTitel);
    pOmschrijving.appendChild(txtOmschrijving);
    taskDiv.appendChild(pTitel);
    taskDiv.appendChild(pOmschrijving);

    taskDiv.draggable = true;

    let taskId = "task-" + Date.now();
    taskDiv.id = taskId;
    taskDiv.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', taskDiv.id);
    });


    let task = {
        id: taskId,
        titel: titel.value,
        omschrijving: omschrijving.value,
        // datum: Date.now(),
        status: status
    }
    let taken = JSON.parse(localStorage.getItem('taken')) || [];
    taken.push(task);
    localStorage.setItem('taken', JSON.stringify(taken));


    return taskDiv;
}

const renderTaak = (taak) => {
    let taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.id = taak.id;
    taskDiv.dataset.status = taak.status;

    let pTitel = document.createElement("p");
    pTitel.textContent = taak.titel;

    let pOmschrijving = document.createElement("p");
    pOmschrijving.textContent = taak.omschrijving;

    taskDiv.appendChild(pTitel);
    taskDiv.appendChild(pOmschrijving);

    taskDiv.draggable = true;
    taskDiv.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', taak.id);
    });

    const column = document.querySelector('[data-status="' + taak.status + '"]');
    column.appendChild(taskDiv);
};


const laadTaken = () => {
    let taken = JSON.parse(localStorage.getItem('taken')) || [];
    taken.forEach(taak => renderTaak(taak));
}

window.addEventListener("load", setup);