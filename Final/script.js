const inputName = document.querySelector ("#inp-name");
const outputText = document.querySelector("#salida-saludo");
function saludar (){
    const saldudoCompleto = "Su turno será confirmado vía telefónica y/o mail.-";
    outputText.innerHTML = saldudoCompleto;
}
function saludar(){
    if (inputName.value != " ") {
        alert ("Su turno será confirmado vía telefónica y/o mail.-");
    } 
}