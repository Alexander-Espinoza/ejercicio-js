let form = document.querySelector(".form");
var array = [];
var array2 = [];

form.onsubmit = (e) => {
        dato = f(e);
        console.log(dato);
        let array = addToArray(dato);
        let isNum = datoValidation(dato);
        if (!isNum) {
            error();
        }
        else {
            array2 = addToNewArray(dato);
            mostrarDatos(array2);
        }
        document.querySelector("#input-dato").value = "";

}

const mostrarDatos = (array2) => {
    document.querySelector(".msg").innerHTML ="";
    array2.forEach(element => {
        document.querySelector(".msg").innerHTML += element + "</br>"
    });
}
const f = (e) => {
    e.preventDefault();
    let dato = document.querySelector("#input-dato").value;
    return dato
}

const datoValidation = (dato) => {
    if (isNaN(dato) || dato.length == 0) {
        isNum = false;
    }
    else {
        isNum = true;
    }
    return isNum
}

const error = () => {
    msgError = "Debes ingresar un número";
    alert(msgError);
}

const addToArray = (dato) => {

    array.push(dato);
    return array
}

const addToNewArray = (dato) => {

    array2.push(dato);
    return array2 
}

let showAll = document.querySelector(".showAll");

showAll.onclick = function () {
    document.querySelector(".arrayAll").innerHTML ="";
    array.forEach(element => {
        document.querySelector(".arrayAll").innerHTML += element + "  "
    });
}
