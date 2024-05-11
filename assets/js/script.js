let numero1 = 0;
let numero2 = 0;

let resultado = 0;


let btnMostrarDatos = document.getElementById("btnMostrarDatos");

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");

btnMostrarDatos.addEventListener("click", function(e){
    
    e.preventDefault();
    
    error1.innerHTML = "";
    error2.innerHTML = "";


    numero1 = document.getElementById("numero1").value;
    if (numero1 === ""){
        error1.innerHTML = "Debe ingresar un numero";
        error1.style.color = "red";
        return;
    }

    numero2 = document.getElementById("numero2").value;
    if (numero2 ===""){
        error2.innerHTML = "Debe ingresar un numero";
        error2.style.color = "red";
        return;
    }

    resultado = parseInt(numero1) + parseInt(numero2);
    console.log(resultado);
    
    console.log(typeof(resultado));




})