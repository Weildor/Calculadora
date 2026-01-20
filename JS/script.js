// Referencia a la pantalla
const display = document.getElementById('display');

// Agrega números o símbolos al input
function agregarCaracter(caracter) {
    display.value += caracter;
}

// Limpia todo el input
function limpiarDisplay() {
    display.value = '';
}

// Borra solo el último caracter
function borrarUltimo() {
    display.value = display.value.toString().slice(0, -1);
}

// Realiza el cálculo matemático
function calcular() {
    try {
        if(display.value === '') return;
        
        // Evaluamos la expresión matemática
        let resultado = eval(display.value);
        
        if (!isFinite(resultado)) {
            display.value = "Error"; // División por cero, etc.
        } else {
            display.value = resultado;
        }
    } catch (error) {
        display.value = "Error";
        setTimeout(() => limpiarDisplay(), 1000);
    }
}