const setup = () => {

    let student = {}; // een leeg object
    student.firstName = "John";
    student.lastName = "Doe";
    student.age = new Date (2000,1,1);
    student.eyeColor = "blue";

    console.log (student.firstName);


    let student1 = {
        firstName: "John",
        lastName: "Doe",
        age: new Date (2000,0,1,0,10,30),
        eyeColor: "blue"
    };

    console.log(student1.firstName);
    console.log(student1.age);


    let text = JSON.stringify(student1);
    console.log(text);




// uitbreiding

    let student2 = {
        firstName: "John",
        lastName: "Doe",
        address : {
            zipCode : 8500,
            city : "Kortrijk"
        }
    };

    console.log (student2.address.zipCode);




    let students = [
        {
            firstName: "John",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        },
        {
            firstName: "VIVES",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        }
    ];

    //omzetten script-object naar JSON-object
    text = JSON.stringify(students);
    console.log(text);

    //omzetten JSON naar script-object
    let textJS = JSON.parse(text);
    console.log(textJS[0].firstName);




}
window.addEventListener("load", setup);