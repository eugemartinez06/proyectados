function sumatoria (num1, num2) {
    let resultado = num1 + num2;
    console.log (resultado);
}
sumatoria (150, 23);

function nombres (nombre) {
    console.log ("Hola, " + nombre + " cómo estás? ");
}
nombres ("Lorenzo");

function mtsCuadrados (largo, ancho) {
    let mts = largo + ancho;
    console.log (mts + "m2");
}
mtsCuadrados (6, 1);
mtsCuadrados (3, 5);

function calcularCuadrado (numero) {
    let cuadrado = numero * numero;
    if(cuadrado > 100) {
        cuadrado = 100;
        console.log("El valor alcanzó el máximo: " + cuadrado);
    } else {
        console.log("El cuadrado es: " + cuadrado);
    }
}
calcularCuadrado(20);
calcularCuadrado(5);

function alertaTormenta(estaLloviendo){
    if(estaLloviendo == true){
        mensajeFinal = "Agarrá el paraguas"
    } else {
        mensajeFinal = "No agarres el paraguas"
    }
    console.log(mensajeFinal);
}
alertaTormenta(false);

function cuentaProgresiva(){
    for(let i=0; i < 10; i++){
        console.log(i);
    }
}
cuentaProgresiva();

function cuentaRrogresiva(){
    for(let i=10; i > 0; i--){
        console.log(i);
    }
}
cuentaRrogresiva();

let iANames = ["Charly", "Flaco", "Fabi", "Hilda"];
function iASaluden (){
    iANames.forEach(ia => {
        console.log(ia = ": Hola, Jefe! Cómo está?");
    });
}
iASaluden();

let bandera = true;
function iniciarCarrera(cantVueltas){
    let vuelta = 0;
    while(bandera){
        vuelta++;
        console.log("Va por la vuelta número: " + vuelta);
        if(vuelta >= cantVueltas){
            bandera = false;
        }    
    }
}
iniciarCarrera(6);

let refmytext = document.querySelector("#mytext")
function mostrartexto () {
    refmytext.innerHTML = "Lo que se veía antes ya no está más"
}

/*const inputName = document.querySelector ("#inp-nombre");
const outputText = document.querySelector("#salida-saludo");
function saludar (){
    const saldudoCompleto = "Hola, me llamo Jarvis, un placer conocerte " + inputName.value;
    outputText.innerHTML = saldudoCompleto;
}*/

/*function saludar(){
    if (inputName.value != " ") {
        const saldudoCompleto = "Hola, me llamo Jarvis, un placer conocerte " + inputName.value;
        outputText.innerHTML = saldudoCompleto;
    } else {
        outputText.innerHTML = "Por favor, ingresa tu nombre para empezar";
    }
}*/

const usuarios = [
    ['Nate', 31],
    ['Carlos', 33],
    ['Jazmin', 2],
    ['Susan', 29]
];
const usuarioMayor = usuarios.reduce((previous, current) => {
    return current[1] > previous[1] ? current : previous;
});
console.log(usuarioMayor);

const usuarioMenor  = usuarios.reduce((previous, current) => {
    return current[1] < previous[1] ? current : previous;
});
console.log(usuarioMenor);

let numero = prompt("Introduce número");
let resultado = parImpar(numero);
alert("El número "+numero+" es " +resultado);

function parImpar(numero) {
    if(numero % 2 == 0){
        return "par";
    } else{
        return "impar";
    }
}
