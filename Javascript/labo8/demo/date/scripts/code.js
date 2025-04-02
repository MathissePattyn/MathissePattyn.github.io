const setup = () => {

    let start = new Date('2025-04-01T12:10:30');
    console.log(start);

    //dag van de week
    console.log(start.getDay());

    //maand
    console.log(start.getMonth() +1);

    //jaar
    console.log(start.getFullYear());

    //dag
    console.log(start.getDate());


    console.log(start.getDate() + "-"
        + (start.getMonth() + 1) + "-"
        + start.getFullYear() + " " + start.getHours()
        + ":" + start.getMinutes() + ":" + start.getSeconds());


    let datum = new Date(2025,0,1);
    console.log(datum);


    let event = new Date(); //Gebruikt jouw eigen tijdzone
    console.log(event);

    console.log(event.toISOString()); //geen rekening houdende met de tijdszone
    console.log(event.toDateString());
    console.log(event.toTimeString());



    let geboortedatum = new Date(1998,11,24);
    let secGeboorte = geboortedatum.getTime();
    let secEvent = event.getTime();
    let secLevend = secEvent - secGeboorte;
    let dagenLevend = (secLevend/1000/60/60/24);
    console.log(dagenLevend);


    let today = new Date();
    let birthday = new Date(1998,11,24)
    let mili = today - birthday;
    let oneDay = 1000*60*60*24;
    let countday = mili/(oneDay);
    console.log("aantal dagen: " + parseInt(countday));
}


window.addEventListener("load", setup);