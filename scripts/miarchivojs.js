
var boton = document.getElementById("miBoton");
boton.addEventListener("click", function () {
    alert("Es inevitable tocar un boton cuando lo vemos ¿ no ? ");
});

console.log("Hola Profe Hola tutores, bienvenido!");

// Ejemplo para calcular nota final de alumno //

alert("Bienvenido a la calculadora para avergiuar su nota final. Por favor, ingrese el resultado de sus pruebas.");


var nota1 = parseFloat(prompt("Ingrese la nota de la primera evaluación:"));
var nota2 = parseFloat(prompt("Ingrese la nota de la segunda evaluación:"));
var nota3 = parseFloat(prompt("Ingrese la nota de la tercera evaluación:"));

var notaFinal = (nota1 + nota2 + nota3) / 3;

console.log("La nota final del alumno es: " + notaFinal.toFixed(2));

