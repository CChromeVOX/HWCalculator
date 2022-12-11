let sendBut = document.querySelector('#send');



sendBut.addEventListener('click', createPost);

function createPost(){
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let stud = document.querySelector('#student').value;
    if(name.length>2){
        if(age>14 && age<30){
            if(stud=="Student"){
                window.location.href="calculator.html";
                
            }else alert("Vxod tolko dlya studentov");

        }else alert("Vozrast ne tot!!");

    }else alert("имя должно состоять из более чем 2 букв!!");


}
